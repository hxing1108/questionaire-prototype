# FHIR Questionnaires Project Structure

This document provides a comprehensive overview of the FHIR Questionnaires project structure and its components.

## Project Overview

This is a FHIR (Fast Healthcare Interoperability Resources) Questionnaires rendering system designed to display and manage complex medical forms with support for multiple languages, digital signatures, and various UI controls.

## Directory Structure

```
FhirQuestionnaries-03-06-2025-dev/
├── app.js                          # Main application bundle (8.2MB)
├── index.js                        # Library export bundle (8.2MB)
├── fhir-extensions-manager.js      # Extensions management bundle (1.8MB)
├── index.d.ts                      # TypeScript definitions
├── index.html                      # Main HTML entry point
├── favicon.ico                     # Application icon
├── md-font-provider-config.json    # Font configuration
├── fhir-extensions/               # FHIR extension modules
├── fonts/                         # Font assets
└── samples/                       # Sample FHIR questionnaires
```

## Core Components

### Main JavaScript Files

#### app.js
- **Purpose**: Main application bundle containing the compiled application code
- **Size**: 8.2MB (includes all dependencies)
- **Key Libraries**: 
  - moment.js (date/time handling)
  - Buffer polyfills
  - acrofield-codec (PDF form fields)
  - signature-lib (digital signatures)

#### index.js
- **Purpose**: Library export bundle for external consumption
- **Size**: 8.2MB
- **Contains**: Core FHIR questionnaire rendering functionality

#### fhir-extensions-manager.js
- **Purpose**: Manages FHIR extensions for enhanced questionnaire functionality
- **Size**: 1.8MB
- **Functionality**: Dynamically loads and applies extensions to questionnaire items

### FHIR Extensions Directory

The `fhir-extensions/` folder contains modules that extend FHIR questionnaire capabilities:

| Extension | Purpose |
|-----------|---------|
| **EntryFormat.js** | Date entry formatting for locales (de-DE, en-EN, pl-PL) |
| **QuestionnaireErlaeuterung.js** | Tooltip/explanation text for questionnaire items |
| **fhir-gdt.js** | GDT (German medical data exchange) integration |
| **questionnaire-hidden.js** | Hidden questionnaire item handling |
| **questionnaire-itemControl.js** | UI control type specifications |
| **questionnaire-optionExclusive.js** | Exclusive option selection logic |
| **questionnaire-signatureRequired.js** | Digital signature requirements |
| **rendering-xhtml.js** | XHTML content rendering support |
| **sdc-questionnaire-enableWhenExpression.js** | Conditional display logic using FHIRPath |
| **sdc-questionnaire-openLabel.js** | Open-ended answer label handling |

### Font Assets

The `fonts/` directory includes carefully selected typefaces for medical forms:

- **Roboto Family**: Primary UI font (Regular, Bold, Italic, BoldItalic)
- **Courier Prime Family**: Monospace font for form fields
- **Material Icons**: Google's icon font (Regular & Outlined variants)
- **Exile-Regular**: Custom display font

### Sample Questionnaires

The `samples/` folder contains various FHIR Questionnaire XML examples:

- **German Medical Forms**:
  - D-An1A.xml
  - D-IP7-02-2020.xml
  - D-MT5-01-2018v5.xml

- **Multi-language Questionnaires**:
  - SystA_de-DE_FHIR-Questionnaire.xml (German)
  - SystA_en-GB_FHIR-Questionnaire.xml (English)

- **Specialized Forms**:
  - Form-with-GDT.xml (GDT integration example)
  - with-acro.xml / with-acro-cross-ref.xml (Acrofield examples)
  - with-gdt-extension.xml (GDT extension usage)
  - RD17_cs-DE_FHIR-Questionnaire.xml (Czech questionnaire)

## TypeScript API (index.d.ts)

The project exposes a comprehensive TypeScript API including:

### Form Widgets
- BooleanFormWidget
- ChoiceFormWidget
- DateFormWidget
- DecimalFormWidget
- IntegerFormWidget
- TextFormWidget
- TimeFormWidget
- QuantityFormWidget
- AttachmentFormWidget
- ReferenceFormWidget
- GroupFormWidget
- DisplayFormWidget

### Core Services
- **LocalizationService**: Multi-language support
- **ExtensionService**: Extension management
- **SignatureService**: Digital signature handling
- **FormStateService**: Form state management
- **GdtService**: GDT integration
- **ValidationService**: Form validation

### Key Interfaces
- `QuestionnaireData`: Main questionnaire data structure
- `QuestionnaireItem`: Individual form items
- `FormWidget`: Base widget interface
- `Extension`: FHIR extension interface

## Configuration

### md-font-provider-config.json
Configures font loading and usage across the application, ensuring consistent typography in medical forms.

## Build Artifacts

The project appears to be a pre-built distribution with:
- Minified and bundled JavaScript files
- License information embedded (.LICENSE.txt files)
- Production-ready assets

## Usage Scenarios

This system is designed for:
1. **Medical Form Rendering**: Display complex FHIR questionnaires
2. **Multi-language Support**: Handle forms in German, English, Czech, Polish
3. **Digital Signatures**: Capture and validate electronic signatures
4. **Conditional Logic**: Show/hide questions based on answers
5. **GDT Integration**: Exchange data with German medical systems
6. **PDF Form Fields**: Map to Acrofield-compatible PDF forms

## Integration Points

The system can be integrated via:
- Direct inclusion in web applications (index.html)
- As a JavaScript library (index.js)
- TypeScript projects using provided type definitions
- Extension system for custom functionality

## Standards Compliance

The project implements:
- FHIR R4 Questionnaire specification
- SDC (Structured Data Capture) extensions
- GDT (German medical data exchange) standard
- Standard web technologies (HTML5, CSS3, JavaScript ES6+)