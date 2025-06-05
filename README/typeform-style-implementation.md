# Typeform-Style FHIR Questionnaire Implementation

## 🎯 **Goal: Transform FHIR Forms into Typeform-Style Experience**

Transform the current all-questions-on-one-page layout into an elegant, conversational, one-question-at-a-time interface while maintaining FHIR compliance and working with the existing Web Components architecture.

## 🏗️ **Implementation Strategy**

### **Option 1: CSS + JavaScript Enhancement (Recommended)**

Keep the existing Web Components but add a **presentation layer** that creates the Typeform experience.

## 📐 **Architecture Overview**

```
FHIR XML → Web Components → Typeform Presenter → User Experience
                  ↑                    ↑
            (Existing)          (New Layer)
```

## 🎨 **Step-by-Step Implementation**

### **Step 1: Create Typeform Presenter Component**

Create a new wrapper component that handles the Typeform-style presentation:

```javascript
// typeform-presenter.js
class TypeformPresenter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentQuestion = 0;
    this.questions = [];
  }

  connectedCallback() {
    this.initializePresenter();
  }

  initializePresenter() {
    // Wait for FHIR form to load
    const fhirForm = this.querySelector('fhir-form-widget');
    fhirForm.addEventListener('contentReady', () => {
      this.extractQuestions();
      this.render();
    });
  }

  extractQuestions() {
    // Get all question widgets from the FHIR form
    const widgets = this.querySelectorAll('[linkid]');
    this.questions = Array.from(widgets);

    // Hide all questions initially
    this.questions.forEach((q) => (q.style.display = 'none'));
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
          <div class="question-content" id="questionContent">
            <!-- Current question will be inserted here -->
          </div>
        </div>
        <div class="navigation">
          <button class="nav-button prev" onclick="this.previousQuestion()">
            ↑ Previous
          </button>
          <button class="nav-button next" onclick="this.nextQuestion()">
            OK ✓
          </button>
        </div>
      </div>
    `;

    this.showCurrentQuestion();
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
        
        display: block;
        min-height: 100vh;
        background: hsl(var(--background));
        color: hsl(var(--foreground));
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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

      .question-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
      }

      .question-content {
        width: 100%;
        animation: fadeIn 0.5s ease;
      }

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

      /* Style existing FHIR widgets with Typeform aesthetics */
      ::slotted(*) {
        font-size: 1.5rem !important;
      }

      ::slotted(label) {
        font-size: 2rem !important;
        font-weight: 400 !important;
        line-height: 1.4 !important;
        margin-bottom: 2rem !important;
        display: block !important;
      }

      ::slotted(input:not([type="radio"]):not([type="checkbox"])),
      ::slotted(select),
      ::slotted(textarea) {
        width: 100% !important;
        padding: 1rem 0 !important;
        font-size: 1.5rem !important;
        border: none !important;
        border-bottom: 2px solid hsl(var(--border)) !important;
        background: transparent !important;
        transition: border-color 0.2s !important;
        outline: none !important;
      }

      ::slotted(input:focus),
      ::slotted(select:focus),
      ::slotted(textarea:focus) {
        border-bottom-color: hsl(var(--primary)) !important;
      }

      /* Radio and checkbox styling */
      ::slotted(.choice-option) {
        display: block !important;
        margin: 1rem 0 !important;
        padding: 1rem 1.5rem !important;
        border: 2px solid hsl(var(--border)) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
      }

      ::slotted(.choice-option:hover) {
        border-color: hsl(var(--primary)) !important;
        background: hsl(var(--primary) / 0.05) !important;
      }

      ::slotted(.choice-option.selected) {
        border-color: hsl(var(--primary)) !important;
        background: hsl(var(--primary) / 0.1) !important;
      }

      .navigation {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
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

      .nav-button.prev:hover {
        color: hsl(var(--foreground));
      }

      .nav-button.next {
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
      }

      .nav-button.next:hover {
        background: hsl(var(--primary) / 0.9);
        transform: translateY(-1px);
      }

      .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
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
    `;
  }

  showCurrentQuestion() {
    const questionContent = this.shadowRoot.getElementById('questionContent');
    questionContent.innerHTML = '';

    if (this.questions[this.currentQuestion]) {
      const question = this.questions[this.currentQuestion].cloneNode(true);
      question.style.display = 'block';
      questionContent.appendChild(question);

      // Focus on the first input
      setTimeout(() => {
        const input = question.querySelector('input, select, textarea');
        if (input) input.focus();
      }, 100);
    }
  }

  nextQuestion() {
    if (
      this.validateCurrentQuestion() &&
      this.currentQuestion < this.questions.length - 1
    ) {
      this.currentQuestion++;
      this.animateTransition('next');
    } else if (this.currentQuestion === this.questions.length - 1) {
      this.submitForm();
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.animateTransition('prev');
    }
  }

  animateTransition(direction) {
    const questionContent = this.shadowRoot.getElementById('questionContent');
    questionContent.classList.add('question-transition-out');

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
    // Use the existing validation from FHIR widgets
    if (currentWidget.validate) {
      return currentWidget.validate();
    }
    return true;
  }

  getProgress() {
    return ((this.currentQuestion + 1) / this.questions.length) * 100;
  }

  updateProgress() {
    const progressFill = this.shadowRoot.querySelector('.progress-fill');
    progressFill.style.width = `${this.getProgress()}%`;
  }

  submitForm() {
    // Get the FHIR form response
    const fhirForm = this.querySelector('fhir-form-widget');
    const response = fhirForm.getResponse();

    // Show completion screen
    this.showCompletionScreen();

    // Dispatch custom event with response
    this.dispatchEvent(
      new CustomEvent('formComplete', {
        detail: response,
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
  }
}

// Register the custom element
customElements.define('typeform-presenter', TypeformPresenter);
```

### **Step 2: Integration with Existing FHIR System**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="./app.js"></script>
    <script src="./typeform-presenter.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          sans-serif;
      }
    </style>
  </head>
  <body>
    <typeform-presenter>
      <fhir-form-widget src="samples/RD17_cs-DE_FHIR-Questionnaire.xml">
      </fhir-form-widget>
    </typeform-presenter>
  </body>
</html>
```

### **Step 3: Enhanced Features**

#### **Keyboard Navigation**

```javascript
// Add to TypeformPresenter class
connectedCallback() {
    super.connectedCallback();
    this.initializePresenter();
    this.setupKeyboardNavigation();
}

setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'Enter':
                if (!e.shiftKey) {
                    e.preventDefault();
                    this.nextQuestion();
                }
                break;
            case 'Tab':
                if (e.shiftKey) {
                    e.preventDefault();
                    this.previousQuestion();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.previousQuestion();
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.nextQuestion();
                break;
        }
    });
}
```

#### **Question Types Enhancement**

```javascript
// Enhance specific widget types for better Typeform experience
enhanceWidget(widget) {
    const type = widget.tagName.toLowerCase();

    switch(type) {
        case 'choice-item':
            this.enhanceChoiceWidget(widget);
            break;
        case 'boolean-item':
            this.enhanceBooleanWidget(widget);
            break;
        case 'date-item':
            this.enhanceDateWidget(widget);
            break;
    }
}

enhanceChoiceWidget(widget) {
    // Transform radio buttons into Typeform-style cards
    const options = widget.querySelectorAll('input[type="radio"]');
    options.forEach((option, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'choice-option';
        wrapper.innerHTML = `
            <span class="option-key">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option.nextElementSibling.textContent}</span>
        `;

        wrapper.addEventListener('click', () => {
            option.click();
            setTimeout(() => this.nextQuestion(), 500);
        });

        option.parentElement.replaceChild(wrapper, option);
    });
}
```

### **Step 4: Responsive Design**

```css
/* Add to getStyles() method */
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
    font-size: 1.2rem !important;
  }

  .nav-button {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Touch-friendly interactions */
@media (hover: none) {
  ::slotted(.choice-option) {
    padding: 1.5rem !important;
  }
}
```

### **Step 5: Conditional Logic Support**

```javascript
// Handle FHIR conditional logic (enableWhen)
handleConditionalLogic() {
    const fhirForm = this.querySelector('fhir-form-widget');

    // Listen for visibility changes
    fhirForm.addEventListener('itemVisibilityChange', (e) => {
        const { linkId, visible } = e.detail;

        // Update questions array
        if (!visible) {
            this.questions = this.questions.filter(q =>
                q.getAttribute('linkid') !== linkId
            );
        }

        // Recalculate progress
        this.updateProgress();
    });
}
```

## 🎨 **Using shadcn/ui Design System**

### **Option 1: Extract Design Tokens**

```css
/* typeform-styles.css - Using shadcn/ui design system */
:root {
  /* shadcn/ui color palette */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... other dark mode tokens */
  }
}
```

### **Option 2: Tailwind Integration**

```javascript
// If you add Tailwind to the project
class TypeformPresenter extends HTMLElement {
  render() {
    this.shadowRoot.innerHTML = `
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <div class="min-h-screen bg-white dark:bg-gray-900">
                <div class="max-w-2xl mx-auto p-8">
                    <div class="h-1 bg-gray-200 rounded-full mb-12">
                        <div class="h-full bg-blue-600 rounded-full transition-all duration-300" 
                             style="width: ${this.getProgress()}%">
                        </div>
                    </div>
                    <div id="questionContent" class="animate-fade-in">
                        <!-- Question content -->
                    </div>
                    <div class="flex justify-between mt-12">
                        <button class="px-6 py-3 text-gray-600 hover:text-gray-900 transition">
                            ← Previous
                        </button>
                        <button class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            OK →
                        </button>
                    </div>
                </div>
            </div>
        `;
  }
}
```

## 🚀 **Implementation Roadmap**

### **Phase 1: Basic Typeform Experience (1-2 days)**

1. ✅ Create TypeformPresenter component
2. ✅ Implement one-question-at-a-time navigation
3. ✅ Add progress bar and basic animations
4. ✅ Style with shadcn/ui design tokens

### **Phase 2: Enhanced Interactions (2-3 days)**

1. ✅ Add keyboard navigation
2. ✅ Implement smooth transitions
3. ✅ Enhance specific widget types
4. ✅ Add completion screen

### **Phase 3: Advanced Features (3-5 days)**

1. ✅ Support conditional logic (enableWhen)
2. ✅ Add question branching
3. ✅ Implement auto-save
4. ✅ Add multi-language support

### **Phase 4: Polish & Optimization (2-3 days)**

1. ✅ Mobile responsiveness
2. ✅ Accessibility (ARIA labels)
3. ✅ Performance optimization
4. ✅ Cross-browser testing

## 📋 **Benefits of This Approach**

### **Preserves Existing Architecture**

- ✅ **No changes** to core FHIR parsing logic
- ✅ **Maintains** all FHIR compliance
- ✅ **Keeps** existing validation and data handling
- ✅ **Compatible** with all extensions

### **Easy to Implement**

- ✅ **Single wrapper component** handles presentation
- ✅ **CSS-based** styling (no framework needed)
- ✅ **Progressive enhancement** approach
- ✅ **Fallback** to standard form if needed

### **Modern User Experience**

- ✅ **Conversational** interface
- ✅ **Smooth animations** and transitions
- ✅ **Mobile-first** design
- ✅ **Keyboard navigation** support

## 🎯 **Quick Start**

1. **Copy** the TypeformPresenter class to your project
2. **Include** the script after app.js
3. **Wrap** your FHIR form widget
4. **Customize** styles to match your brand

```html
<typeform-presenter>
  <fhir-form-widget src="your-questionnaire.xml"></fhir-form-widget>
</typeform-presenter>
```

That's it! Your FHIR questionnaire now has a beautiful Typeform-style interface! 🎉
