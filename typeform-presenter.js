/**
 * Typeform-Style Presenter for FHIR Questionnaires
 * Transforms standard FHIR forms into elegant one-question-at-a-time interfaces
 */

class TypeformPresenter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentQuestion = 0;
    this.questions = [];
    this.responses = {};
    this.fhirSystemReady = false;
  }

  connectedCallback() {
    // Wait for FHIR system to be ready before initializing
    this.waitForFHIRSystem()
      .then(() => {
        this.initializePresenter();
        this.setupKeyboardNavigation();
      })
      .catch((error) => {
        console.error('Failed to initialize FHIR system:', error);
        this.showError('Failed to load FHIR system. Please refresh the page.');
      });
  }

  waitForFHIRSystem() {
    return new Promise((resolve, reject) => {
      // Check if FHIR system is already loaded
      const hasFhirFormWidget = window.customElements && window.customElements.get('fhir-form-widget');
      const hasFhirForm = window.customElements && window.customElements.get('fhir-form');
      
      if (hasFhirFormWidget || hasFhirForm) {
        this.fhirSystemReady = true;
        this.fhirElementName = hasFhirFormWidget ? 'fhir-form-widget' : 'fhir-form';
        console.log(`FHIR system ready with element: ${this.fhirElementName}`);
        resolve();
        return;
      }

      // Wait for it to load
      let attempts = 0;
      const checkInterval = setInterval(() => {
        attempts++;

        const hasFhirFormWidget = window.customElements && window.customElements.get('fhir-form-widget');
        const hasFhirForm = window.customElements && window.customElements.get('fhir-form');

        if (hasFhirFormWidget || hasFhirForm) {
          this.fhirSystemReady = true;
          this.fhirElementName = hasFhirFormWidget ? 'fhir-form-widget' : 'fhir-form';
          console.log(`FHIR system loaded with element: ${this.fhirElementName}`);
          clearInterval(checkInterval);
          resolve();
        } else if (attempts > 100) {
          // 10 seconds timeout
          clearInterval(checkInterval);
          reject(new Error('FHIR system failed to load within timeout'));
        }
      }, 100);
    });
  }

  initializePresenter() {
    if (!this.fhirSystemReady) {
      console.error('FHIR system not ready');
      return;
    }

    // Use the detected element name or try both
    const elementName = this.fhirElementName || 'fhir-form';
    
    // Find existing FHIR form widget
    let fhirForm = this.querySelector(elementName) || this.querySelector('fhir-form-widget') || this.querySelector('fhir-form');
    
    if (!fhirForm) {
      console.log(`Creating new ${elementName}`);
      
      // Check if the custom element is defined
      const FhirFormClass = window.customElements.get(elementName);
      if (FhirFormClass) {
        // Create using the constructor if available
        fhirForm = new FhirFormClass();
      } else {
        // Fallback to createElement
        fhirForm = document.createElement(elementName);
      }
      
      // Set default attributes
      fhirForm.setAttribute('editmode', 'false');
      fhirForm.setAttribute('showcontrols', 'false');
      fhirForm.setAttribute('showtestingpanel', 'false');
      
      this.appendChild(fhirForm);
    }

    // Store reference
    this.fhirFormWidget = fhirForm;

    // Hide the original form
    fhirForm.style.display = 'none';

    // Listen for content ready event
    fhirForm.addEventListener('contentReady', () => {
      console.log('FHIR content ready, extracting questions');
      // Add delay to ensure DOM is fully rendered
      setTimeout(() => {
        this.extractQuestions();
        this.render();
        this.showCurrentQuestion();
      }, 1000);
    });

    // Also listen for load events
    fhirForm.addEventListener('load', () => {
      console.log('FHIR form loaded');
      setTimeout(() => {
        this.extractQuestions();
        this.render();
        this.showCurrentQuestion();
      }, 1000);
    });

    // Listen for questionnaire loaded event
    fhirForm.addEventListener('questionnaireLoaded', () => {
      console.log('Questionnaire loaded event');
      setTimeout(() => {
        this.extractQuestions();
        this.render();
        this.showCurrentQuestion();
      }, 1000);
    });

    // Listen for FHIR-specific build complete events
    const buildCompleteHandler = () => {
      console.log('FHIR build complete, extracting questions');
      setTimeout(() => {
        this.extractQuestions();
        this.render();
        this.showCurrentQuestion();
      }, 500);
    };
    
    fhirForm.addEventListener('buildComplete', buildCompleteHandler);
    fhirForm.addEventListener('itemsBuilt', buildCompleteHandler);
    fhirForm.addEventListener('renderComplete', buildCompleteHandler);
  }

  // Method to load questionnaire from string (called from demo)
  loadFromString(xmlContent) {
    if (!this.fhirSystemReady) {
      throw new Error('FHIR system not ready');
    }

    const fhirForm = this.fhirFormWidget || 
                     this.querySelector('fhir-form') || 
                     this.querySelector('fhir-form-widget') ||
                     this.querySelector(this.fhirElementName);
    if (!fhirForm) {
      throw new Error('FHIR form widget not found');
    }

    // Try different methods to load the content
    const loadMethods = [
      'loadFromString',
      'loadQuestionnaireXmlContent',
      'loadXML',
      'setContent',
      'load',
      'parse'
    ];

    let methodUsed = null;
    for (const method of loadMethods) {
      if (typeof fhirForm[method] === 'function') {
        console.log(`Trying to load questionnaire using ${method} method`);
        try {
          fhirForm[method](xmlContent);
          methodUsed = method;
          break;
        } catch (e) {
          console.error(`Failed to load using ${method}:`, e.message);
        }
      }
    }

    if (!methodUsed) {
      // Fallback: set innerHTML and trigger parsing
      console.log('Using fallback innerHTML method');
      fhirForm.innerHTML = xmlContent;

      // Trigger a custom event to simulate content ready
      setTimeout(() => {
        const event = new CustomEvent('contentReady');
        fhirForm.dispatchEvent(event);
      }, 100);
    } else {
      console.log(`Successfully used ${methodUsed} to load questionnaire`);
    }

    // Wait a bit then try to extract questions
    setTimeout(() => {
      console.log('Attempting to extract questions after load...');
      this.extractQuestions();
      if (this.questions.length > 0) {
        this.render();
        this.showCurrentQuestion();
      } else {
        console.log('Still no questions found, waiting for events...');
      }
    }, 2000);
  }

  extractQuestions() {
    // First check if we have a fhir form widget
    const fhirForm = this.fhirFormWidget || this.querySelector('fhir-form');
    if (!fhirForm) {
      console.error('No FHIR form widget found');
      return;
    }

    console.log('FHIR form element found, extracting questions...');
    console.log('FHIR form HTML structure (first 1000 chars):', fhirForm.innerHTML.substring(0, 1000));

    // Strategy: Look for FHIR item widgets that are created by the FHIR system
    // These will have names like: date-item, boolean-item, choice-item, string-item, etc.
    let questionContainers = [];
    
    // 1. Look for FHIR item widgets (the proper way)
    const fhirItemSelectors = [
      'date-item', 'boolean-item', 'choice-item', 'string-item', 
      'integer-item', 'decimal-item', 'text-item', 'group-item',
      'attachment-item', 'display-item', 'open-choice-item'
    ];
    
    fhirItemSelectors.forEach(selector => {
      const items = fhirForm.querySelectorAll(selector);
      if (items.length > 0) {
        console.log(`Found ${items.length} ${selector} widgets`);
        items.forEach(item => {
          // Only include items that have interactive content or are not display-only
          if (selector !== 'display-item' || this.shouldIncludeDisplayItem(item)) {
            questionContainers.push(item);
          }
        });
      }
    });
    
    console.log(`Found ${questionContainers.length} FHIR item widgets`);
    
    // 2. If no FHIR item widgets found, look for elements with linkid
    if (questionContainers.length === 0) {
      console.log('No FHIR item widgets found, looking for linkid elements...');
      
      const fhirItems = fhirForm.querySelectorAll('[linkid]');
      console.log(`Found ${fhirItems.length} elements with linkid attribute`);
      
      fhirItems.forEach((item, index) => {
        const linkId = item.getAttribute('linkid');
        const hasInputs = item.querySelector('input, select, textarea');
        console.log(`FHIR item ${index + 1}: linkId="${linkId}", hasInputs=${!!hasInputs}, tagName=${item.tagName}`);
        
        if (hasInputs) {
          questionContainers.push(item);
        }
      });
    }
    
    // 3. Fallback: group raw inputs if no structured items found
    if (questionContainers.length === 0) {
      console.log('No structured FHIR items found, falling back to input grouping...');
      questionContainers = this.fallbackInputGrouping(fhirForm);
    }
    
    console.log(`Total question containers found: ${questionContainers.length}`);

    // Filter out non-interactive widgets and display-only items
    this.questions = questionContainers.filter((widget) => {
      const tagName = widget.tagName.toLowerCase();
      const linkId = widget.getAttribute('linkid') || widget.getAttribute('data-linkid');
      
      // Skip obvious non-question elements
      if (tagName === 'display-item' || widget.hasAttribute('data-display-only')) {
        console.log(`Skipping display-only element: ${linkId}`);
        return false;
      }
      
      // If this is an input element itself, keep it
      if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
        return true;
      }
      
      // Check if the element has any interactive content (including nested)
      const hasInteractiveContent = widget.querySelector && widget.querySelector('input, select, textarea');
      if (!hasInteractiveContent) {
        console.log(`Skipping non-interactive element: ${linkId || tagName}`);
        return false;
      }
      
      // For group items, only skip if they truly don't have inputs anywhere
      if (tagName === 'group-item' || tagName.includes('group')) {
        const hasAnyInputs = widget.querySelectorAll('input, select, textarea').length > 0;
        if (!hasAnyInputs) {
          console.log(`Skipping group without any inputs: ${linkId}`);
          return false;
        }
      }
      
      return true;
    });

    console.log(`Found ${this.questions.length} questions after filtering`);
    
    // Log the found questions for debugging
    this.questions.forEach((q, index) => {
      const linkId = q.getAttribute('linkid') || q.getAttribute('data-linkid') || 'null';
      const label = q.querySelector('label, .label')?.textContent?.trim() || 'No label';
      const inputType = q.querySelector('input, select, textarea')?.type || 'unknown';
      console.log(`Question ${index + 1}: linkId="${linkId}", type="${inputType}", label="${label.substring(0, 50)}..."`);
    });

    // If still no questions, try to find form inputs directly
    if (this.questions.length === 0) {
      console.log('Trying to find form inputs directly...');
      const inputs = Array.from(fhirForm.querySelectorAll('input, select, textarea'))
        .filter((el) => el.type !== 'hidden' && el.name);

      if (inputs.length > 0) {
        // Group inputs by their container
        this.questions = inputs
          .map((input) => {
            // Find the closest question container
            return input.closest('.form-group, .question, .field, fieldset, [data-question]') || 
                   input.parentElement;
          })
          .filter((el, index, self) => {
            // Remove duplicates
            return self.indexOf(el) === index;
          });
        console.log(`Found ${this.questions.length} questions via input grouping`);
      }
    }

    // Log structure for debugging
    if (this.questions.length === 0) {
      console.log('No questions found. FHIR form structure:', fhirForm.innerHTML.substring(0, 500));
    }
  }

  shouldIncludeDisplayItem(item) {
    // Display items might contain important informational content
    // Include them if they have substantial text content
    const textContent = item.textContent?.trim() || '';
    return textContent.length > 20;
  }

  fallbackInputGrouping(fhirForm) {
    console.log('Using fallback input grouping strategy...');
    
    // Find input containers that seem like logical question groups
    const containers = [];
    const potentialContainers = fhirForm.querySelectorAll('div, section, fieldset');
    
    potentialContainers.forEach(container => {
      const inputs = container.querySelectorAll('input, select, textarea');
      
      // Look for containers with 1-10 inputs (reasonable question size)
      if (inputs.length >= 1 && inputs.length <= 10) {
        const hasLabel = container.querySelector('label') || 
                        container.textContent.trim().length > 10;
        
        if (hasLabel) {
          containers.push(container);
          console.log(`Added fallback container: ${container.tagName}, inputs: ${inputs.length}`);
        }
      }
    });
    
    return containers;
  }

  // Dynamic extraction methods that work with any FHIR XML structure
  
  extractLabelFromFhirWidget(widget) {
    // Strategy 1: Look for standard label elements
    const labelElement = widget.querySelector('label');
    if (labelElement && labelElement.textContent.trim()) {
      return labelElement.textContent.trim();
    }
    
    // Strategy 2: Look for FHIR text attribute content
    const textAttr = widget.getAttribute('text');
    if (textAttr) {
      return textAttr;
    }
    
    // Strategy 3: Look for text content in specific FHIR classes
    const textElements = widget.querySelectorAll('.item-text, .question-text, [class*="text"]');
    for (const textEl of textElements) {
      const text = textEl.textContent.trim();
      if (text && text.length > 5 && !text.includes('input') && !text.includes('button')) {
        return text;
      }
    }
    
    // Strategy 4: Look for text nodes or spans with substantial content
    const allElements = widget.querySelectorAll('span, div, p');
    for (const el of allElements) {
      // Skip if it contains input elements (likely not the question text)
      if (el.querySelector('input, select, textarea')) continue;
      
      const text = el.textContent.trim();
      // Look for text that seems like a question
      if (text.length > 10 && 
          (text.includes('?') || 
           text.includes(':') || 
           text.match(/^[A-ZÄÖÜa-zäöüß].*[A-ZÄÖÜa-zäöüß]$/))) {
        return text;
      }
    }
    
    // Strategy 5: Fallback to any substantial text content
    const text = widget.textContent.trim();
    if (text.length > 10) {
      // Clean up the text (remove extra whitespace, common non-question words)
      const cleanText = text.replace(/\s+/g, ' ')
                           .replace(/^(Edit|Page|Submit|Next|Previous|Save)\s*/i, '')
                           .trim();
      if (cleanText.length > 5) {
        return cleanText.substring(0, 100); // Limit length
      }
    }
    
    return '';
  }

  findCommonParent(elements) {
    if (elements.length === 0) return null;
    if (elements.length === 1) return elements[0].parentElement;
    
    let commonParent = elements[0].parentElement;
    for (let i = 1; i < elements.length; i++) {
      while (commonParent && !commonParent.contains(elements[i])) {
        commonParent = commonParent.parentElement;
      }
      if (!commonParent) break;
    }
    
    return commonParent;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>
      <div class="typeform-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${this.getProgress()}%"></div>
        </div>
        <div class="question-wrapper">
          <div class="question-number">${this.currentQuestion + 1} → ${
      this.questions.length
    }</div>
          <div class="question-content" id="questionContent">
            <!-- Current question will be inserted here -->
          </div>
        </div>
        <div class="navigation">
          <button class="nav-button prev" id="prevBtn">
            ↑ Previous
          </button>
          <button class="nav-button next" id="nextBtn">
            OK ✓
          </button>
        </div>
        <div class="error-message" id="errorMessage" style="display: none;">
          <!-- Error messages will appear here -->
        </div>
      </div>
    `;

    // Add event listeners to navigation buttons
    this.shadowRoot
      .getElementById('prevBtn')
      .addEventListener('click', () => this.previousQuestion());
    this.shadowRoot
      .getElementById('nextBtn')
      .addEventListener('click', () => this.nextQuestion());
  }

  getStyles() {
    return `
      /* Typeform-inspired styles using shadcn/ui design tokens */
      :host {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --ring: 222.2 84% 4.9%;
        --muted-foreground: 215.4 16.3% 46.9%;
        
        display: block;
        min-height: 100vh;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      .typeform-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
      }

      .progress-bar {
        height: 4px;
        background: hsl(var(--border));
        border-radius: 2px;
        margin-bottom: 4rem;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: hsl(var(--primary));
        transition: width 0.3s ease;
      }

      .question-number {
        font-size: 0.875rem;
        color: hsl(var(--muted-foreground));
        margin-bottom: 2rem;
      }

      .question-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0;
      }

      .question-content {
        width: 100%;
      }

      /* Typeform question display styles */
      .typeform-question-display {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }

      .typeform-question-display .question-number {
        margin-bottom: 0.5rem;
      }

      .question-label {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1rem;
        line-height: 1.4;
      }

      .question-description {
        color: hsl(var(--muted-foreground));
        margin-bottom: 1.5rem;
      }

      .question-input-container {
        margin-top: 2rem;
      }

      .typeform-input,
      .typeform-select,
      .typeform-textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: 2px solid hsl(var(--border));
        border-radius: 0.375rem;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
        transition: border-color 0.2s;
      }

      .typeform-input:focus,
      .typeform-select:focus,
      .typeform-textarea:focus {
        outline: none;
        border-color: hsl(var(--primary));
      }

      .typeform-radio-label,
      .typeform-checkbox-label {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        border: 2px solid hsl(var(--border));
        border-radius: 0.375rem;
        transition: all 0.2s;
      }

      .typeform-radio-label:hover,
      .typeform-checkbox-label:hover {
        background: hsl(var(--muted));
        border-color: hsl(var(--primary));
      }

      .typeform-radio-label input,
      .typeform-checkbox-label input {
        margin-right: 0.75rem;
      }

      /* Animate questions */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .question-content > * {
        animation: fadeIn 0.5s ease;
      }

      /* Style existing FHIR widgets with Typeform aesthetics */
      ::slotted(*) {
        font-size: 1.125rem !important;
      }

      ::slotted(label) {
        font-size: 1.75rem !important;
        font-weight: 400 !important;
        line-height: 1.4 !important;
        margin-bottom: 2rem !important;
        display: block !important;
        color: hsl(var(--foreground)) !important;
      }

      ::slotted(input:not([type="radio"]):not([type="checkbox"])),
      ::slotted(select),
      ::slotted(textarea) {
        width: 100% !important;
        padding: 0.75rem 0 !important;
        font-size: 1.25rem !important;
        border: none !important;
        border-bottom: 2px solid hsl(var(--border)) !important;
        background: transparent !important;
        transition: border-color 0.2s !important;
        outline: none !important;
        color: hsl(var(--foreground)) !important;
      }

      ::slotted(input:focus),
      ::slotted(select:focus),
      ::slotted(textarea:focus) {
        border-bottom-color: hsl(var(--primary)) !important;
      }

      /* Style radio buttons and checkboxes */
      ::slotted(input[type="radio"]),
      ::slotted(input[type="checkbox"]) {
        width: 20px !important;
        height: 20px !important;
        margin-right: 12px !important;
        cursor: pointer !important;
      }

      ::slotted(.choice-wrapper),
      ::slotted(div) label {
        display: flex !important;
        align-items: center !important;
        padding: 1rem 1.5rem !important;
        margin: 0.5rem 0 !important;
        border: 2px solid hsl(var(--border)) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
        font-size: 1.125rem !important;
      }

      ::slotted(.choice-wrapper:hover),
      ::slotted(div) label:hover {
        border-color: hsl(var(--primary)) !important;
        background: hsl(var(--primary) / 0.05) !important;
      }

      ::slotted(input[type="radio"]:checked + label),
      ::slotted(input[type="checkbox"]:checked + label) {
        border-color: hsl(var(--primary)) !important;
        background: hsl(var(--primary) / 0.1) !important;
      }

      .navigation {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        gap: 1rem;
      }

      .nav-button {
        padding: 0.75rem 2rem;
        font-size: 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
        font-weight: 500;
      }

      .nav-button.prev {
        background: transparent;
        color: hsl(var(--foreground) / 0.6);
      }

      .nav-button.prev:hover:not(:disabled) {
        color: hsl(var(--foreground));
      }

      .nav-button.next {
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        flex: 1;
        max-width: 200px;
        margin-left: auto;
      }

      .nav-button.next:hover:not(:disabled) {
        background: hsl(var(--primary) / 0.9);
        transform: translateY(-1px);
      }

      .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Completion screen */
      .completion-screen {
        text-align: center;
        animation: fadeIn 0.5s ease;
      }

      .completion-screen h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .completion-screen p {
        font-size: 1.25rem;
        color: hsl(var(--muted-foreground));
      }

      /* Smooth transitions */
      .question-transition-out {
        animation: slideOut 0.3s ease forwards;
      }

      .question-transition-in {
        animation: slideIn 0.3s ease forwards;
      }

      @keyframes slideOut {
        to {
          opacity: 0;
          transform: translateX(-50px);
        }
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* Mobile responsive */
      @media (max-width: 768px) {
        .typeform-container {
          padding: 1rem;
        }
        
        ::slotted(label) {
          font-size: 1.5rem !important;
        }
        
        ::slotted(input),
        ::slotted(select),
        ::slotted(textarea) {
          font-size: 1.125rem !important;
        }
        
        .nav-button {
          padding: 0.625rem 1.5rem;
          font-size: 0.875rem;
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        :host {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --primary: 210 40% 98%;
          --primary-foreground: 222.2 84% 4.9%;
          --border: 217.2 32.6% 17.5%;
        }
      }
    `;
  }

  showCurrentQuestion() {
    if (this.questions.length === 0) {
      this.showError('No questions found in the questionnaire.');
      return;
    }

    const questionContent = this.shadowRoot.getElementById('questionContent');
    questionContent.innerHTML = '';

    // Get the current question element
    const currentQuestion = this.questions[this.currentQuestion];
    if (!currentQuestion) {
      console.error('Current question not found');
      return;
    }

    try {
      // Extract question information without moving the element
      const questionInfo = this.extractQuestionInfo(currentQuestion);
      
      // Create a simplified question display
      const questionDisplay = document.createElement('div');
      questionDisplay.className = 'typeform-question-display';
      questionDisplay.innerHTML = `
        <div class="question-number">${this.currentQuestion + 1} of ${this.questions.length}</div>
        <h2 class="question-label">${questionInfo.label}</h2>
        ${questionInfo.description ? `<p class="question-description">${questionInfo.description}</p>` : ''}
        <div class="question-input-container">
          ${this.createInputDisplay(questionInfo)}
        </div>
      `;

      questionContent.appendChild(questionDisplay);

      // Add event listeners to sync with original inputs
      this.syncInputs(questionDisplay, currentQuestion);

      // Focus on the first input
      setTimeout(() => {
        const input = questionDisplay.querySelector(
          'input:not([type="hidden"]), select, textarea'
        );
        if (input) input.focus();
      }, 100);

    } catch (error) {
      console.error('Error displaying question:', error);
      // Fallback: show raw question text
      questionContent.innerHTML = `
        <div class="typeform-question-display">
          <div class="question-number">${this.currentQuestion + 1} of ${this.questions.length}</div>
          <h2>Question ${this.currentQuestion + 1}</h2>
          <p>Unable to display this question properly.</p>
        </div>
      `;
    }

    // Update navigation buttons
    this.updateNavigationButtons();
  }

  extractQuestionInfo(questionElement) {
    const info = {
      label: '',
      description: '',
      type: 'text',
      required: false,
      options: [],
      value: '',
      linkId: null
    };

    // Extract linkId dynamically from FHIR widget attributes
    info.linkId = this.extractLinkIdFromFhirWidget(questionElement);

    // Extract label text dynamically from FHIR widget structure
    info.label = this.extractLabelFromFhirWidget(questionElement);
    
    // If no meaningful label found, use fallback
    if (!info.label || info.label.length < 3) {
      info.label = `Question ${this.currentQuestion + 1}`;
    }

    // Extract description/help text dynamically
    info.description = this.extractDescriptionFromFhirWidget(questionElement);

    // Extract type and input configuration dynamically
    const inputInfo = this.extractInputInfoFromFhirWidget(questionElement);
    info.type = inputInfo.type;
    info.required = inputInfo.required;
    info.value = inputInfo.value;
    info.name = inputInfo.name || info.linkId;

    // Extract options for choice/select types dynamically
    if (inputInfo.hasOptions) {
      info.options = this.extractOptionsFromFhirWidget(questionElement);
    }

    return info;
  }

  // Dynamic extraction methods that work with any FHIR XML structure
  
  extractLinkIdFromFhirWidget(widget) {
    // Strategy 1: Check for FHIR widget attributes first
    let linkId = widget.getAttribute('linkid') || 
                 widget.getAttribute('data-linkid') ||
                 widget.getAttribute('id') ||
                 widget.getAttribute('name');

    // Strategy 2: Look in child elements for linkid
    if (!linkId) {
      const linkIdElement = widget.querySelector('[linkid], [data-linkid]');
      if (linkIdElement) {
        linkId = linkIdElement.getAttribute('linkid') || linkIdElement.getAttribute('data-linkid');
      }
    }

    // Strategy 3: Extract from input names as fallback
    if (!linkId) {
      const inputElement = widget.querySelector('input, select, textarea');
      if (inputElement) {
        linkId = inputElement.name || inputElement.id;
      }
    }

    // Strategy 4: Generate a fallback linkId if none found
    if (!linkId) {
      linkId = `question_${this.currentQuestion + 1}`;
    }

    return linkId;
  }

  extractDescriptionFromFhirWidget(widget) {
    // Look for description/help text in various FHIR structures
    const descSelectors = [
      '.description', '.help-text', '.tooltip', '.item-help',
      '[class*="help"]', '[class*="desc"]', '.hint'
    ];
    
    for (const selector of descSelectors) {
      const descElement = widget.querySelector(selector);
      if (descElement && descElement.textContent.trim()) {
        return descElement.textContent.trim();
      }
    }
    
    return '';
  }

  extractInputInfoFromFhirWidget(widget) {
    const inputInfo = {
      type: 'text',
      required: false,
      value: '',
      name: '',
      hasOptions: false
    };

    // Find input elements within widget (may be nested in sections)
    let input = widget.querySelector('input, select, textarea');
    if (!input) {
      // Look deeper in the structure
      const section = widget.querySelector('section');
      if (section) {
        input = section.querySelector('input, select, textarea');
      }
    }
    
    if (input) {
      inputInfo.type = input.type || input.tagName.toLowerCase();
      inputInfo.required = input.hasAttribute('required');
      inputInfo.value = input.value || '';
      inputInfo.name = input.name || input.id;
      
      // Determine if this input type has options
      inputInfo.hasOptions = (input.type === 'radio' || input.type === 'checkbox' || 
                              input.tagName.toLowerCase() === 'select');
      
      // Check for FHIR-specific type hints in widget
      const widgetType = widget.tagName.toLowerCase();
      if (widgetType === 'date-item') {
        inputInfo.type = 'date';
      } else if (widgetType === 'boolean-item') {
        inputInfo.type = 'radio';
        inputInfo.hasOptions = true;
      } else if (widgetType === 'choice-item' || widgetType === 'open-choice-item') {
        inputInfo.type = 'radio';
        inputInfo.hasOptions = true;
      } else if (widgetType === 'integer-item') {
        inputInfo.type = 'number';
        if (input.setAttribute) input.setAttribute('step', '1');
      } else if (widgetType === 'decimal-item') {
        inputInfo.type = 'number';
        if (input.setAttribute) input.setAttribute('step', 'any');
      }
      
      // Check for FHIR data attributes
      const fhirTypeElement = widget.querySelector('[data-fhir-type]');
      if (fhirTypeElement) {
        const fhirType = fhirTypeElement.getAttribute('data-fhir-type');
        if (fhirType === 'date') {
          inputInfo.type = 'date';
        } else if (fhirType === 'decimal') {
          inputInfo.type = 'number';
          if (input.setAttribute) input.setAttribute('step', 'any');
        } else if (fhirType === 'integer') {
          inputInfo.type = 'number';
          if (input.setAttribute) input.setAttribute('step', '1');
        }
      }
    } else {
      // No input found - infer from widget type
      const widgetType = widget.tagName.toLowerCase();
      if (widgetType === 'date-item') {
        inputInfo.type = 'date';
      } else if (widgetType === 'boolean-item') {
        inputInfo.type = 'radio';
        inputInfo.hasOptions = true;
      } else if (widgetType === 'choice-item' || widgetType === 'open-choice-item') {
        inputInfo.type = 'radio';
        inputInfo.hasOptions = true;
      } else if (widgetType === 'text-item') {
        inputInfo.type = 'textarea';
      }
      
      console.log('No input found in widget, inferred type from widget type:', widgetType, inputInfo.type);
    }

    return inputInfo;
  }

  extractOptionsFromFhirWidget(widget) {
    const options = [];
    
    // Strategy 1: Look for select options
    const selectElement = widget.querySelector('select');
    if (selectElement) {
      return Array.from(selectElement.options).map(opt => ({
        value: opt.value,
        text: opt.textContent.trim(),
        checked: opt.selected
      }));
    }
    
    // Strategy 2: Look for radio/checkbox inputs
    const inputs = widget.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    if (inputs.length > 0) {
      inputs.forEach(input => {
        let labelText = this.extractOptionLabelFromInput(input, widget);
        
        options.push({
          value: input.value,
          text: labelText,
          checked: input.checked
        });
      });
      
      return options;
    }
    
    // Strategy 3: Look for FHIR answerOption structures
    const answerOptions = widget.querySelectorAll('[class*="answer"], [class*="option"], [class*="choice"]');
    if (answerOptions.length > 0) {
      answerOptions.forEach((optionElement, index) => {
        const value = this.extractOptionValueFromElement(optionElement, index);
        const text = this.extractOptionTextFromElement(optionElement);
        
        if (value && text) {
          options.push({
            value: value,
            text: text,
            checked: false
          });
        }
      });
    }
    
    console.log(`Extracted ${options.length} options from widget:`, options);
    return options;
  }

  extractOptionLabelFromInput(input, widget) {
    // Try multiple strategies to find the label text for a radio/checkbox input
    
    // Strategy 1: Check parent label
    const parentLabel = input.closest('label');
    if (parentLabel) {
      const labelText = parentLabel.textContent.trim();
      // Remove the input value from the label text if it appears
      const cleanText = labelText.replace(input.value, '').trim();
      if (cleanText.length > 0) {
        return cleanText;
      }
      return labelText;
    }
    
    // Strategy 2: Check next sibling
    if (input.nextSibling && input.nextSibling.textContent) {
      const text = input.nextSibling.textContent.trim();
      if (text.length > 0) {
        return text;
      }
    }
    
    // Strategy 3: Check for label with for attribute
    if (input.id) {
      const labelFor = widget.querySelector(`label[for="${input.id}"]`);
      if (labelFor) {
        return labelFor.textContent.trim();
      }
    }
    
    // Strategy 4: Check parent element for text (excluding input)
    const parent = input.parentElement;
    if (parent) {
      const clone = parent.cloneNode(true);
      const inputClone = clone.querySelector('input');
      if (inputClone) inputClone.remove();
      const text = clone.textContent.trim();
      if (text.length > 0) {
        return text;
      }
    }
    
    // Strategy 5: Look for FHIR-specific option text elements
    const choiceElement = input.closest('[class*="choice"], [class*="option"], [class*="answer"]');
    if (choiceElement) {
      const textElements = choiceElement.querySelectorAll('.text, .display, .label, span:not(:has(input)), div:not(:has(input))');
      for (const textEl of textElements) {
        const text = textEl.textContent.trim();
        if (text && text !== input.value && !text.includes('input') && text.length > 1) {
          return text;
        }
      }
    }
    
    // Fallback: use value
    return input.value || 'Option';
  }

  extractOptionValueFromElement(optionElement, index) {
    // Look for various value attributes/elements
    const valueElement = optionElement.querySelector('[class*="value"], [data-value]');
    if (valueElement) {
      return valueElement.getAttribute('data-value') || 
             valueElement.textContent.trim() || 
             valueElement.getAttribute('value');
    }
    
    // Look for value in attributes
    const value = optionElement.getAttribute('data-value') || 
                  optionElement.getAttribute('value');
    if (value) {
      return value;
    }
    
    // Generate fallback value
    return `option_${index + 1}`;
  }

  extractOptionTextFromElement(optionElement) {
    // Look for text/display elements
    const textElement = optionElement.querySelector('.text, .display, .label');
    if (textElement) {
      return textElement.textContent.trim();
    }
    
    // Look for text content excluding nested elements that might be inputs
    const clone = optionElement.cloneNode(true);
    const inputs = clone.querySelectorAll('input, button');
    inputs.forEach(input => input.remove());
    
    const text = clone.textContent.trim();
    if (text.length > 0) {
      return text;
    }
    
    return 'Option';
  }

  createInputDisplay(questionInfo) {
    switch (questionInfo.type) {
      case 'select':
        return `
          <select class="typeform-select" name="${questionInfo.name}" ${questionInfo.required ? 'required' : ''}>
            <option value="">Choose an option...</option>
            ${questionInfo.options.map(opt => 
              `<option value="${opt.value}" ${opt.value === questionInfo.value ? 'selected' : ''}>${opt.text}</option>`
            ).join('')}
          </select>
        `;
      
      case 'radio':
        return questionInfo.options.map((opt, index) => `
          <label class="typeform-radio-label">
            <input type="radio" name="${questionInfo.name}" value="${opt.value}" ${opt.checked ? 'checked' : ''} ${questionInfo.required && index === 0 ? 'required' : ''}>
            <span>${opt.text}</span>
          </label>
        `).join('');
      
      case 'checkbox':
        return questionInfo.options.map(opt => `
          <label class="typeform-checkbox-label">
            <input type="checkbox" name="${questionInfo.name}" value="${opt.value}" ${opt.checked ? 'checked' : ''}>
            <span>${opt.text}</span>
          </label>
        `).join('');
      
      case 'textarea':
        return `
          <textarea class="typeform-textarea" name="${questionInfo.name}" rows="4" ${questionInfo.required ? 'required' : ''}>${questionInfo.value}</textarea>
        `;
      
      case 'date':
        // For date inputs, don't set a default value that could cause format errors
        return `
          <input type="date" class="typeform-input" name="${questionInfo.name}" ${questionInfo.required ? 'required' : ''}>
        `;
      
      default:
        return `
          <input type="${questionInfo.type}" class="typeform-input" name="${questionInfo.name}" value="${questionInfo.value}" ${questionInfo.required ? 'required' : ''}>
        `;
    }
  }

  syncInputs(displayElement, originalElement) {
    // Find all inputs in the display
    const displayInputs = displayElement.querySelectorAll('input, select, textarea');
    
    displayInputs.forEach(displayInput => {
      displayInput.addEventListener('change', () => {
        if (displayInput.type === 'radio') {
          // For radio buttons, need to handle all options in the group
          const allOriginalRadios = originalElement.querySelectorAll(`input[name="${displayInput.name}"]`);
          const selectedOriginal = Array.from(allOriginalRadios).find(radio => radio.value === displayInput.value);
          
          if (selectedOriginal) {
            // Uncheck all other radios
            allOriginalRadios.forEach(radio => radio.checked = false);
            // Check the selected one
            selectedOriginal.checked = true;
            selectedOriginal.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else if (displayInput.type === 'checkbox') {
          // For checkboxes, find the specific one by value
          const originalInput = originalElement.querySelector(`input[name="${displayInput.name}"][value="${displayInput.value}"]`);
          if (originalInput) {
            originalInput.checked = displayInput.checked;
            originalInput.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } else {
          // For other input types
          const originalInput = originalElement.querySelector(`[name="${displayInput.name}"]`);
          if (originalInput) {
            originalInput.value = displayInput.value;
            originalInput.dispatchEvent(new Event('change', { bubbles: true }));
            originalInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
      });
    });
  }

  enhanceWidget(widget) {
    const type = widget.tagName.toLowerCase();

    // Add specific enhancements based on widget type
    if (type === 'choice-item' || type === 'boolean-item') {
      const inputs = widget.querySelectorAll(
        'input[type="radio"], input[type="checkbox"]'
      );
      inputs.forEach((input, index) => {
        // Add keyboard shortcut
        const label = input.nextElementSibling || input.parentElement;
        if (label && label.tagName === 'LABEL') {
          const key = String.fromCharCode(65 + index); // A, B, C...
          label.innerHTML = `<span style="font-weight: bold; margin-right: 0.5rem;">${key}</span> ${label.textContent}`;
        }
      });
    }
  }

  updateNavigationButtons() {
    const prevBtn = this.shadowRoot.getElementById('prevBtn');
    const nextBtn = this.shadowRoot.getElementById('nextBtn');

    // Update previous button
    prevBtn.disabled = this.currentQuestion === 0;
    prevBtn.style.visibility =
      this.currentQuestion === 0 ? 'hidden' : 'visible';

    // Update next button
    if (this.currentQuestion === this.questions.length - 1) {
      nextBtn.textContent = 'Submit →';
      nextBtn.style.background = 'hsl(var(--primary))';
    } else {
      nextBtn.textContent = 'OK ✓';
    }
  }

  nextQuestion() {
    if (this.validateCurrentQuestion()) {
      // Save current response
      this.saveCurrentResponse();

      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.animateTransition();
      } else {
        this.submitForm();
      }
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.animateTransition();
    }
  }

  animateTransition() {
    const questionContent = this.shadowRoot.getElementById('questionContent');
    questionContent.classList.add('question-transition-out');

    // Remove old question from light DOM
    const oldQuestion = this.querySelector('[slot="current-question"]');
    if (oldQuestion) {
      setTimeout(() => oldQuestion.remove(), 300);
    }

    setTimeout(() => {
      this.showCurrentQuestion();
      this.updateProgress();
      questionContent.classList.remove('question-transition-out');
      questionContent.classList.add('question-transition-in');

      setTimeout(() => {
        questionContent.classList.remove('question-transition-in');
      }, 300);
    }, 300);
  }

  validateCurrentQuestion() {
    const currentWidget = this.questions[this.currentQuestion];

    // Check if the question is required
    const isRequired = currentWidget.hasAttribute('required');
    if (!isRequired) return true;

    // Check if there's a value
    const inputs = currentWidget.querySelectorAll(
      'input:not([type="hidden"]), select, textarea'
    );
    for (let input of inputs) {
      if (input.type === 'radio' || input.type === 'checkbox') {
        const checked = currentWidget.querySelector('input:checked');
        if (!checked) {
          this.showError('Please select an option');
          return false;
        }
      } else if (!input.value.trim()) {
        this.showError('This field is required');
        return false;
      }
    }

    return true;
  }

  showError(message) {
    const errorDiv = this.shadowRoot.getElementById('errorMessage');
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
      errorDiv.style.background = '#fef2f2';
      errorDiv.style.border = '1px solid #fecaca';
      errorDiv.style.color = '#dc2626';
      errorDiv.style.padding = '1rem';
      errorDiv.style.borderRadius = '8px';
      errorDiv.style.margin = '1rem 0';
    }
  }

  saveCurrentResponse() {
    const currentWidget = this.questions[this.currentQuestion];
    const linkId = currentWidget.getAttribute('linkid') || 
                  currentWidget.getAttribute('data-linkid') ||
                  `question_${this.currentQuestion + 1}`;

    console.log(`Saving response for linkId: ${linkId}`);

    // Initialize responses array/object for this linkId if needed
    if (!this.responses[linkId]) {
      this.responses[linkId] = null;
    }

    // Get the value based on widget type from both original and display inputs
    // Also check the typeform display inputs
    const displayInputs = this.shadowRoot.querySelectorAll(
      'input:not([type="hidden"]), select, textarea'
    );

    // Process display inputs first (these have the user's current values)
    displayInputs.forEach((input) => {
      if (input.type === 'radio' && input.checked) {
        this.responses[linkId] = input.value;
      } else if (input.type === 'checkbox') {
        if (!Array.isArray(this.responses[linkId])) {
          this.responses[linkId] = [];
        }
        if (input.checked && !this.responses[linkId].includes(input.value)) {
          this.responses[linkId].push(input.value);
        }
      } else if (input.value && input.type !== 'radio' && input.type !== 'checkbox') {
        this.responses[linkId] = input.value;
      }
    });
    
    console.log(`Saved response:`, { linkId, value: this.responses[linkId] });
  }

  getProgress() {
    if (this.questions.length === 0) return 0;
    return ((this.currentQuestion + 1) / this.questions.length) * 100;
  }

  updateProgress() {
    const progressFill = this.shadowRoot.querySelector('.progress-fill');
    progressFill.style.width = `${this.getProgress()}%`;

    const questionNumber = this.shadowRoot.querySelector('.question-number');
    questionNumber.textContent = `${this.currentQuestion + 1} → ${
      this.questions.length
    }`;
  }

  submitForm() {
    // Save the last response
    this.saveCurrentResponse();

    // Get the FHIR form response
    const fhirForm = this.fhirFormWidget || this.querySelector('fhir-form') || this.querySelector('fhir-form-widget');
    let fhirResponse = null;

    // Try to get response if method exists
    if (fhirForm && typeof fhirForm.getResponse === 'function') {
      try {
        fhirResponse = fhirForm.getResponse();
      } catch (error) {
        console.warn('Could not get FHIR response:', error);
      }
    }

    // Show completion screen
    this.showCompletionScreen();

    // Dispatch custom event with responses
    this.dispatchEvent(
      new CustomEvent('formComplete', {
        detail: {
          responses: this.responses,
          fhirResponse: fhirResponse,
        },
      })
    );
  }

  showCompletionScreen() {
    const questionContent = this.shadowRoot.getElementById('questionContent');
    questionContent.innerHTML = `
      <div class="completion-screen">
        <h1>Thank you! 🎉</h1>
        <p>Your questionnaire has been submitted successfully.</p>
      </div>
    `;

    // Hide navigation
    this.shadowRoot.querySelector('.navigation').style.display = 'none';
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Don't interfere with input typing
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'SELECT'
      ) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          this.nextQuestion();
        }
        return;
      }

      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          this.nextQuestion();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          this.nextQuestion();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          this.previousQuestion();
          break;
        default:
          // Check for letter shortcuts (A, B, C...) for choice questions
          if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
            const currentWidget = this.questions[this.currentQuestion];
            if (currentWidget) {
              const type = currentWidget.tagName.toLowerCase();
              if (type === 'choice-item' || type === 'boolean-item') {
                const index = e.key.toUpperCase().charCodeAt(0) - 65;
                const inputs = currentWidget.querySelectorAll(
                  'input[type="radio"], input[type="checkbox"]'
                );
                if (inputs[index]) {
                  inputs[index].click();
                  // Auto-advance for single choice
                  if (inputs[index].type === 'radio') {
                    setTimeout(() => this.nextQuestion(), 500);
                  }
                }
              }
            }
          }
      }
    });
  }
}

// Register the custom element
customElements.define('typeform-presenter', TypeformPresenter);
