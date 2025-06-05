# Technology Stack and Build Architecture

## Language and Framework

### Primary Language: **TypeScript/JavaScript**
- The project is written in **TypeScript** (as evidenced by the comprehensive index.d.ts type definitions)
- Compiled to JavaScript for distribution
- Target: ES6+ with polyfills for browser compatibility

### Framework: **Web Components (Custom Elements)**
- **NOT** using React, Angular, Vue, or other popular frameworks
- Built with native **Web Components** standard
- Main component: `FhirFormWidget` custom element
- Uses Shadow DOM for encapsulation
- Component-based architecture without framework overhead

## Build System

### Build Tool: **Webpack**
- All JavaScript files (app.js, index.js, fhir-extensions-manager.js) are webpack bundles
- Production builds with minification and tree-shaking
- Code splitting for the extensions manager
- License extraction (.LICENSE.txt files)

### Bundle Structure
```
app.js (8.2MB)          - Main application bundle with all UI components
index.js (8.2MB)        - Library export bundle for external consumption  
fhir-extensions-manager.js (1.8MB) - Separate bundle for extension management
```

## Component Architecture

### Custom Elements Registry
The application uses Web Components with the following structure:

```typescript
// Main widget component
FhirFormWidget extends HTMLElement

// Item widgets (all extend AbstractFhirItemWidget)
- BooleanItemWidget
- ChoiceItemWidget  
- DateItemWidget
- DecimalItemWidget
- IntegerItemWidget
- StringItemWidget
- TextItemWidget
- GroupItemWidget
- DisplayItemWidget
- AttachmentItemWidget
- SignatureItemWidget
```

### Extension System
Modular extension architecture using:
```typescript
interface IMedidokFhirExtension
class FhirExtensionManager
```

Extensions are dynamically loaded and applied to questionnaire items.

## Dependencies

### Core Libraries
- **@medidok/signature-lib** - Digital signature handling
- **@medidok/acrofield-codec** - PDF form field mapping
- **moment.js** - Date/time manipulation
- **buffer** - Node.js buffer polyfill for browsers
- **ieee754** - IEEE 754 floating point operations

### No UI Framework Dependencies
- No React, Angular, Vue, or similar
- No jQuery or other DOM manipulation libraries
- Pure Web Components with vanilla JavaScript/TypeScript

## Development Patterns

### TypeScript Architecture
```typescript
// Namespace: All exports under global scope
// Main entry point
export declare class FhirFormWidget extends HTMLElement

// Service pattern
export declare class LocaleService
export declare class FhirExtensionManager
export declare class FhirFormObserver

// Model interfaces
export interface IFhirItem
export interface IFhirFormResponse
export interface IFhirAnswerOption
```

### Event System
Custom events for component communication:
```typescript
- FhirFormEvent
- FhirFormWidgetIdChangeEvent
- FormWidgetStateChangeErrorEvent
- FhirFormLoadingErrorEvent
```

### State Management
- Component-level state management
- Observer pattern for form state changes
- No external state management library (Redux, MobX, etc.)

## Build Process (Inferred)

### Source → Distribution
1. **TypeScript Compilation**: .ts files → .js
2. **Webpack Bundling**: 
   - Entry points create separate bundles
   - Tree shaking removes unused code
   - Minification for production
3. **Asset Processing**:
   - Fonts copied to fonts/ directory
   - HTML template processing
4. **Type Definitions**: Generated index.d.ts for TypeScript consumers

### Missing from Distribution
- Source code (.ts files)
- Build configuration (webpack.config.js, tsconfig.json)
- Package.json with dependencies
- Development tools and scripts

## Deployment Model

This is a **pre-built distribution** ready for:
- Direct inclusion in web applications
- CDN hosting
- npm package distribution (though package.json not included)
- Integration into existing healthcare systems

## Browser Support

Based on the polyfills and build artifacts:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 support likely (buffer polyfills present)
- Mobile browser support
- Web Components polyfilled where needed