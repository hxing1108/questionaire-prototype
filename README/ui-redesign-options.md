# UI Redesign Options for FHIR Questionnaires

## 🚫 **Current Challenge: Framework Incompatibility**

### **Your Current Architecture:**

- **Native Web Components** (Custom Elements)
- **No React/Vue/Angular** - pure JavaScript
- **TypeScript compiled** to vanilla JS
- **Custom widget system** (`<date-item>`, `<boolean-item>`, etc.)

### **shadcn/ui Requirements:**

- **React-based** component library
- **Tailwind CSS** for styling
- **Radix UI primitives** for accessibility
- **JSX/TSX** syntax

**❌ Direct incompatibility:** You cannot directly use shadcn/ui components with Web Components.

## ✅ **Viable Solutions for Modern UI**

### **Option 1: Extract shadcn/ui Design System (Recommended)**

Use shadcn/ui's **design tokens and styles** without the React components:

```css
/* Apply shadcn/ui design tokens to your Web Components */
date-item {
  @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background;
}

boolean-item input[type='radio'] {
  @apply h-4 w-4 rounded-sm border border-primary text-primary;
}

choice-item select {
  @apply flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm;
}
```

**Implementation Steps:**

1. **Install Tailwind CSS** in your project
2. **Copy shadcn/ui CSS variables** and design tokens
3. **Apply Tailwind classes** to your existing Web Components
4. **Use shadcn/ui patterns** for layout and interactions

### **Option 2: React Wrapper (Hybrid Approach)**

Create a **React shell** that wraps your existing Web Components:

```typescript
// React wrapper component
import { useEffect, useRef } from 'react';

interface FhirQuestionnaireProps {
  xmlSource: string;
}

export function FhirQuestionnaire({ xmlSource }: FhirQuestionnaireProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize your existing FHIR widget system
    const fhirWidget = document.createElement('fhir-form-widget');
    fhirWidget.setAttribute('src', xmlSource);

    if (containerRef.current) {
      containerRef.current.appendChild(fhirWidget);
    }

    return () => {
      fhirWidget.remove();
    };
  }, [xmlSource]);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div
        ref={containerRef}
        className="space-y-6 rounded-lg border bg-card p-6"
      />
    </div>
  );
}
```

### **Option 3: Web Components + Modern CSS Framework**

Use a **Web Components compatible** modern UI framework:

#### **Shoelace (Recommended for Web Components)**

```html
<!-- Replace your current inputs with Shoelace components -->
<sl-input label="Date of Birth" type="date" required class="mb-4"></sl-input>

<sl-radio-group label="Gender" required>
  <sl-radio value="female">Female</sl-radio>
  <sl-radio value="male">Male</sl-radio>
</sl-radio-group>
```

#### **Lit (Google's Web Components Library)**

```typescript
// Modernize your existing widgets with Lit
import { LitElement, html, css } from 'lit';

class ModernDateItemWidget extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 1rem;
    }

    .input-wrapper {
      @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2;
    }
  `;

  render() {
    return html`
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          ${this.text}
        </label>
        <div class="input-wrapper">
          <input type="date" @change=${this.handleChange} />
        </div>
      </div>
    `;
  }
}
```

### **Option 4: Complete React Migration**

**Full rewrite** to React + shadcn/ui (most work, best long-term result):

```typescript
// New React-based widget system
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FhirFormProps {
  questionnaire: FhirQuestionnaire;
}

export function FhirForm({ questionnaire }: FhirFormProps) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {questionnaire.items.map((item) => (
        <FormField key={item.linkId} item={item} register={register} />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## 🎯 **Recommended Approach**

### **Phase 1: Quick Win (Option 1)**

1. **Add Tailwind CSS** to your project
2. **Extract shadcn/ui design tokens**
3. **Apply modern styling** to existing Web Components
4. **Minimal code changes** required

### **Phase 2: Enhanced Components (Option 3)**

1. **Integrate Shoelace** for modern Web Components
2. **Replace custom inputs** with Shoelace equivalents
3. **Maintain FHIR compatibility**
4. **Improve accessibility** and user experience

### **Phase 3: Future Migration (Option 4)**

1. **Plan React migration** for long-term modernization
2. **Keep FHIR parsing logic**
3. **Use shadcn/ui fully**
4. **Best developer experience**

## 🛠️ **Implementation Example: Quick Win**

Here's how to start with **Option 1** (shadcn/ui styles + existing Web Components):

### **1. Install Dependencies**

```bash
npm install tailwindcss @tailwindcss/forms
npm install class-variance-authority clsx tailwind-merge
```

### **2. Create Design System**

```css
/* styles/design-system.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    /* ... more shadcn/ui CSS variables */
  }
}

@layer components {
  /* Style your existing Web Components */
  fhir-form-widget {
    @apply mx-auto max-w-4xl p-6;
  }

  .fhir-question {
    @apply space-y-2 rounded-lg border p-4 bg-card;
  }

  .fhir-input {
    @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm;
  }

  .fhir-label {
    @apply text-sm font-medium leading-none;
  }
}
```

### **3. Update Your Web Components**

```typescript
// Modify your existing widget classes
class DateItemWidget extends AbstractFhirItemWidget {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('fhir-question');

    const input = this.querySelector('input');
    input?.classList.add('fhir-input');

    const label = this.querySelector('label');
    label?.classList.add('fhir-label');
  }
}
```

## 📊 **Comparison Matrix**

| Approach                | Effort    | Modern UI    | Compatibility       | Future-Proof |
| ----------------------- | --------- | ------------ | ------------------- | ------------ |
| Option 1: shadcn styles | 🟢 Low    | 🟡 Good      | 🟢 Perfect          | 🟡 Medium    |
| Option 2: React wrapper | 🟡 Medium | 🟢 Excellent | 🟢 Good             | 🟢 High      |
| Option 3: Shoelace      | 🟡 Medium | 🟢 Excellent | 🟢 Perfect          | 🟢 High      |
| Option 4: Full React    | 🔴 High   | 🟢 Excellent | 🟡 Requires rewrite | 🟢 Excellent |

## 🚀 **Next Steps**

1. **Start with Option 1** for immediate visual improvement
2. **Test with a sample questionnaire** to validate approach
3. **Plan gradual migration** to Option 3 or 4 for long-term benefits
4. **Maintain FHIR compliance** throughout the process

Would you like me to help implement any of these approaches?
