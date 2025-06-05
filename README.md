# FHIR Questionnaire Typeform-style Interface

A modern web application that transforms FHIR R4 questionnaires into beautiful, Typeform-style one-question-at-a-time interfaces.

## 🚀 Live Demo

Access the demo at: [Your Netlify URL here]

## ✨ Features

- **Dynamic FHIR Extraction** - Works with any FHIR R4 XML questionnaire
- **Typeform-style UI** - One question at a time, beautiful animations
- **Multi-language Support** - Supports German, English, and other languages
- **Medical-grade Compliance** - Full FHIR R4 standard compliance
- **No Hardcoding** - Completely dynamic extraction system

## 🏥 Supported FHIR Items

- ✅ Date inputs (`date`)
- ✅ Choice questions (`choice`, `open-choice`) 
- ✅ Boolean questions (`boolean`)
- ✅ Numeric inputs (`integer`, `decimal`)
- ✅ Text inputs (`string`, `text`)
- ✅ Group containers (`group`)
- ✅ File attachments (`attachment`)

## 🛠️ How to Use

1. **Open the demo**: Visit `typeform-demo.html`
2. **Upload FHIR XML**: Drag & drop or select a FHIR questionnaire file
3. **Complete questionnaire**: Answer questions one at a time
4. **Get results**: FHIR-compliant responses are generated

## 📁 Sample Files

The `samples/` directory contains example FHIR questionnaires:

- `D-IP7-02-2020.xml` - German kidney biopsy questionnaire
- `SystA_en-GB_FHIR-Questionnaire.xml` - English systemic questionnaire  
- `RD17_cs-DE_FHIR-Questionnaire.xml` - German rare disease form

## 🏗️ Architecture

- **Core FHIR System** (`app.js`) - 8.1MB production bundle with full FHIR R4 support
- **Typeform UI** (`typeform-presenter.js`) - Modern interface wrapper
- **Dynamic Extraction** - No hardcoded mappings, works with any FHIR XML

## 🚀 Netlify Deployment

This project is ready for Netlify deployment:

1. **Import this repository** to your Netlify account
2. **Build settings**: No build command needed (static files)
3. **Publish directory**: `/` (root directory)
4. **Entry point**: `typeform-demo.html`

## 📖 Documentation

Detailed documentation is available in the `README/` directory:

- `README.md` - Complete technical guide
- `fhir-rendering-architecture.md` - FHIR system architecture
- `xml-to-component-rendering.md` - XML to component flow

## 🔧 Local Development

```bash
# Start local server
python3 server.py 8000

# Open in browser
open http://localhost:8000/typeform-demo.html
```

## 🤝 Contributing

This project follows FHIR R4 standards and uses dynamic extraction for maximum compatibility.

---

**Built with ❤️ for modern healthcare interfaces**