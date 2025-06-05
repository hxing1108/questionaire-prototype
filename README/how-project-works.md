# How the FHIR Questionnaires Project Works

## 📋 **Project Overview**

This is a **FHIR-compliant digital medical questionnaire system** that transforms complex medical forms into interactive web applications for patients. The system renders standardized healthcare questionnaires that patients can complete digitally, improving efficiency and data quality in medical settings.

## 🏥 **FHIR Standard Compliance**

### ✅ **Yes, all XML files in `/samples` are FHIR standard compliant**

The sample files follow the **HL7 FHIR R4 standard** for healthcare questionnaires:

```xml
<Questionnaire xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns="http://hl7.org/fhir"
               xmlns:h="http://www.w3.org/1999/xhtml"
               xsi:schemaLocation="../XSD_4.0.1/questionnaire.xsd">
```

**Key FHIR elements present:**

- `<Questionnaire>` - Root FHIR resource
- `<meta>` - Metadata with profile references
- `<item>` - Individual questions/groups
- `<answerOption>` - Multiple choice options
- `<enableWhen>` - Conditional logic
- Standard FHIR data types: `boolean`, `choice`, `date`, `text`, `integer`, `decimal`

## 📁 **Sample Files Analysis**

The `/samples` directory contains various medical questionnaires:

### **Medical Forms:**

- **`RD17_cs-DE_FHIR-Questionnaire.xml`** - X-ray examination form (Czech/German)
- **`SystA_en-GB_FHIR-Questionnaire.xml`** - Adult patient history (English)
- **`D-An1A.xml`** - Anesthesia questionnaire
- **`D-IP7-02-2020.xml`** - Medical procedure form

### **Specialized Extensions:**

- **`with-acro.xml`** - Forms with Acrofield integration (PDF form fields)
- **`with-gdt-extension.xml`** - GDT (German medical data) integration
- **`Form-with-GDT.xml`** - Medical data transfer format

## 🔄 **How the Project Works for Patients**

### **1. 📥 Form Loading Process**

```mermaid
graph LR
    A[FHIR XML File] --> B[JavaScript Parser]
    B --> C[Web Components]
    C --> D[Interactive Form]
    D --> E[Patient Response]
    E --> F[FHIR Response JSON]
```

1. **Medical staff** loads a FHIR questionnaire XML file
2. **JavaScript engine** parses the FHIR structure
3. **Web Components** render appropriate UI widgets
4. **Patient** interacts with the form
5. **System** captures responses in FHIR format

### **2. 🖥️ Patient Experience**

#### **Step 1: Form Presentation**

- Patient opens the questionnaire in a web browser
- Form displays with **medical-grade UI components**:
  - Date pickers for birth dates
  - Radio buttons for yes/no questions
  - Dropdown menus for multiple choices
  - Text areas for detailed responses
  - Signature fields for consent

#### **Step 2: Smart Form Behavior**

```typescript
// Example: Conditional questions for women
<enableWhen>
    <question value="baseDataDecimalGender"/>
    <operator value="="/>
    <answerString value="ženské"/> <!-- "female" in Czech -->
</enableWhen>
```

- **Conditional Logic**: Questions appear/hide based on previous answers
- **Validation**: Required fields and data format checking
- **Multi-language**: Forms support multiple languages (German, Czech, English)

#### **Step 3: Form Completion**

- **Real-time validation** ensures data quality
- **Progress tracking** shows completion status
- **Error prevention** with input masks and constraints

### **3. 🔧 Technical Implementation**

#### **Widget System**

Each question type maps to a specialized widget:

```
Date of Birth → DateItemWidget
Gender Selection → ChoiceItemWidget
Yes/No Questions → BooleanItemWidget
Height/Weight → IntegerItemWidget/DecimalItemWidget
Free Text → StringItemWidget/TextItemWidget
```

#### **Example Question Processing**

```xml
<!-- FHIR XML Input -->
<item>
    <linkId value="dateOfBirth"/>
    <text value="Please fill in your date of birth."/>
    <type value="date"/>
    <required value="true"/>
</item>

<!-- Renders as HTML -->
<date-item linkid="dateOfBirth" required="true">
    <label>Please fill in your date of birth.</label>
    <input type="date" required />
</date-item>
```

### **4. 📊 Medical Use Cases**

#### **Pre-procedure Questionnaires**

- **X-ray examinations** - Pregnancy screening, previous exposure
- **Anesthesia assessment** - Allergies, medical history
- **Surgical preparation** - Risk factors, medications

#### **Patient History Collection**

- **Demographics** - Age, gender, contact information
- **Medical history** - Previous conditions, surgeries
- **Lifestyle factors** - Smoking, alcohol consumption, exercise

#### **Compliance and Documentation**

- **Informed consent** with digital signatures
- **Risk assessment** based on patient responses
- **Automated report generation** for medical records

### **5. 🔒 Data Flow and Security**

```
Patient Input → Widget Validation → FHIR Response → Medical System
    ↓              ↓                    ↓              ↓
  Web Form → JavaScript Logic → JSON Format → EMR Integration
```

- **Input validation** at the widget level
- **FHIR-compliant output** for healthcare systems
- **Digital signatures** for legal compliance
- **Multi-format export** (JSON, PDF, XML)

## 🌟 **Key Benefits**

### **For Patients:**

- ✅ **User-friendly** digital forms instead of paper
- ✅ **Multi-language** support
- ✅ **Smart forms** that adapt based on answers
- ✅ **Error prevention** with real-time validation

### **For Healthcare Providers:**

- ✅ **Standardized data** in FHIR format
- ✅ **Automated processing** reduces manual entry
- ✅ **Better data quality** through validation
- ✅ **Integration ready** for existing EMR systems

### **For Healthcare Systems:**

- ✅ **FHIR compliance** ensures interoperability
- ✅ **Extensible** with custom medical extensions
- ✅ **Scalable** web-based architecture
- ✅ **Audit trails** for regulatory compliance

## 🎯 **Real-World Example**

**Scenario**: Patient visiting for X-ray examination

1. **Reception** loads `RD17_cs-DE_FHIR-Questionnaire.xml`
2. **Patient** completes digital form on tablet/computer:
   - Enters birth date and demographics
   - Answers pregnancy-related questions (if female)
   - Provides previous X-ray history
3. **System** validates responses and generates FHIR response
4. **Medical staff** reviews completed questionnaire
5. **Data** integrates into patient's electronic health record

This streamlines the patient intake process while ensuring complete, accurate, and standardized medical information collection.
