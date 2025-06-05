# XML to Web Component Rendering Process

## 🎯 **Production Build Runtime Flow**

Even though this is a **compiled production build** without source code, the XML-to-component rendering happens **entirely at runtime** in the browser. Here's how it works:

## 🔄 **Step-by-Step Rendering Process**

### **1. 📥 XML Loading & Parsing**

When you import a FHIR XML sample:

```javascript
// Inside the compiled app.js/index.js bundles
const fhirWidget = document.createElement('fhir-form-widget');
fhirWidget.setAttribute('src', 'samples/RD17_cs-DE_FHIR-Questionnaire.xml');
document.body.appendChild(fhirWidget);
```

**What happens internally:**

1. **XMLHttpRequest** fetches the XML file
2. **DOMParser** parses XML into DOM tree
3. **FHIR parser** extracts questionnaire structure

### **2. 🏗️ Widget Factory System**

The compiled JavaScript contains a **widget factory** that maps FHIR types to Web Components:

```javascript
// Compiled logic (simplified representation)
class FhirFormWidgetsFactory {
  createWidget(fhirItem) {
    switch (fhirItem.type) {
      case 'date':
        return new DateItemWidget();
      case 'boolean':
        return new BooleanItemWidget();
      case 'choice':
        return new ChoiceItemWidget();
      case 'group':
        return new GroupItemWidget();
      // ... more types
    }
  }
}
```

### **3. 🎨 Dynamic Web Component Registration**

All widget classes are **pre-registered** as Custom Elements:

```javascript
// These registrations happen when app.js loads
customElements.define('fhir-form-widget', FhirFormWidget);
customElements.define('date-item', DateItemWidget);
customElements.define('boolean-item', BooleanItemWidget);
customElements.define('choice-item', ChoiceItemWidget);
customElements.define('group-item', GroupItemWidget);
// ... more widgets
```

### **4. 🔗 XML-to-Widget Mapping**

Here's how FHIR XML elements become Web Components:

```xml
<!-- FHIR XML Input -->
<item>
    <linkId value="dateOfBirth"/>
    <text value="Please fill in your date of birth."/>
    <type value="date"/>
    <required value="true"/>
</item>
```

**↓ Transforms into ↓**

```html
<!-- Rendered Web Component -->
<date-item
  linkid="dateOfBirth"
  text="Please fill in your date of birth."
  required="true"
>
  <label>Please fill in your date of birth.</label>
  <input type="date" required />
</date-item>
```

## 🧩 **Runtime Component Architecture**

### **Main Form Widget: `<fhir-form-widget>`**

The root component that orchestrates everything:

```javascript
class FhirFormWidget extends HTMLElement {
  // Compiled methods handle:
  // - XML parsing
  // - Widget creation
  // - Event handling
  // - Response building
}
```

### **Individual Item Widgets**

Each question type has its own widget class:

| FHIR Type | Web Component    | What It Renders             |
| --------- | ---------------- | --------------------------- |
| `date`    | `<date-item>`    | Date picker input           |
| `boolean` | `<boolean-item>` | Yes/No radio buttons        |
| `choice`  | `<choice-item>`  | Radio buttons or dropdown   |
| `string`  | `<string-item>`  | Text input                  |
| `integer` | `<integer-item>` | Number input                |
| `group`   | `<group-item>`   | Container for sub-questions |
| `text`    | `<text-item>`    | Textarea                    |

## 🎪 **Live Example: Loading a Sample**

### **When you load `RD17_cs-DE_FHIR-Questionnaire.xml`:**

1. **XML Structure:**

```xml
<Questionnaire>
  <item>
    <linkId value="dateOfBirth"/>
    <type value="date"/>
    <text value="Uveďte své datum narození."/>
  </item>
  <item>
    <linkId value="baseDataDecimalGender"/>
    <type value="choice"/>
    <text value="Pohlaví:"/>
    <answerOption id="female">
      <valueString value="ženské"/>
    </answerOption>
    <answerOption id="male">
      <valueString value="mužské"/>
    </answerOption>
  </item>
</Questionnaire>
```

2. **Rendered HTML Output:**

```html
<fhir-form-widget>
  <date-item linkid="dateOfBirth">
    <label>Uveďte své datum narození.</label>
    <input type="date" />
  </date-item>

  <choice-item linkid="baseDataDecimalGender">
    <label>Pohlaví:</label>
    <div class="options">
      <input type="radio" name="gender" value="ženské" />
      <label>ženské</label>
      <input type="radio" name="gender" value="mužské" />
      <label>mužské</label>
    </div>
  </choice-item>
</fhir-form-widget>
```

## ⚡ **Runtime Features**

### **Conditional Logic Processing**

```xml
<!-- XML with conditional logic -->
<enableWhen>
    <question value="baseDataDecimalGender"/>
    <operator value="="/>
    <answerString value="ženské"/>
</enableWhen>
```

**↓ Runtime JavaScript handles ↓**

```javascript
// Compiled event handlers watch for changes
genderWidget.addEventListener('change', (event) => {
  if (event.target.value === 'ženské') {
    pregnancyQuestions.style.display = 'block';
  } else {
    pregnancyQuestions.style.display = 'none';
  }
});
```

### **Data Validation**

```javascript
// Built-in validation for each widget type
class DateItemWidget extends AbstractFhirItemWidget {
  validate() {
    const input = this.querySelector('input');
    const isValid = input.value && !isNaN(Date.parse(input.value));
    this.setCustomValidity(isValid ? '' : 'Invalid date');
  }
}
```

### **Response Generation**

When form is submitted:

```javascript
// Compiled response builder
fhirWidget.getResponse()
// Returns:
{
  "resourceType": "QuestionnaireResponse",
  "item": [
    {
      "linkId": "dateOfBirth",
      "answer": [{"valueDate": "1990-01-01"}]
    },
    {
      "linkId": "baseDataDecimalGender",
      "answer": [{"valueString": "ženské"}]
    }
  ]
}
```

## 🎮 **How to Use in Your Browser**

### **Option 1: Direct HTML Usage**

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="./app.js"></script>
  </head>
  <body>
    <fhir-form-widget src="samples/RD17_cs-DE_FHIR-Questionnaire.xml">
    </fhir-form-widget>
  </body>
</html>
```

### **Option 2: JavaScript API**

```javascript
// Create widget programmatically
const widget = document.createElement('fhir-form-widget');
widget.setAttribute('src', 'samples/SystA_en-GB_FHIR-Questionnaire.xml');
document.body.appendChild(widget);

// Listen for events
widget.addEventListener('contentReady', () => {
  console.log('Form loaded and rendered!');
});

widget.addEventListener('change', () => {
  console.log('User answered a question');
});
```

## 🔧 **Pre-compiled Widget System**

The beauty of this production build is that all the complex TypeScript logic for:

- ✅ **FHIR parsing**
- ✅ **Widget creation**
- ✅ **Event handling**
- ✅ **Validation**
- ✅ **Response building**

Is **already compiled and optimized** in the JavaScript bundles. You just need to:

1. **Load the JavaScript** (`app.js`)
2. **Create the form widget** (`<fhir-form-widget>`)
3. **Point it to XML** (`src="path/to/questionnaire.xml"`)
4. **The magic happens automatically** ✨

This is why it's a **production-ready distribution** - all the complex build processes, TypeScript compilation, and optimization have already been done for you!
