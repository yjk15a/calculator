# Stitch & Zip Calculator

A web-based calculator application that mimics the aesthetic of "Stitch & Zip" needlepoint kits. The interface features tactile textures, stitched patterns, and zipper motifs, combining a functional tool with a charming, handcrafted visual style.

![Calculator Preview](https://via.placeholder.com/600x400?text=Stitch+%26+Zip+Calculator+Screenshot)
*(Note: Replace with actual screenshot after deployment)*

## 🎨 Design Philosophy

The core design philosophy is **"Digital Needlepoint"**.
- **Texture**: 14-mesh needlepoint canvas background.
- **Typography**: "Press Start 2P" font for a cross-stitch look.
- **Components**: Buttons resemble embroidered patches; the case looks like a zippered pouch.
- **Animation**: A playful CSS-based zipper animation clears the screen.

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3 (Variables, Gradients, Animations), Vanilla JavaScript (ES6+).
- **Testing**: Jest (for Core Logic TDD).
- **Architecture**:
    - **TDD**: Core logic implemented with strict Test-Driven Development.
    - **SOLID**: Adherence to SOLID principles (Single Responsibility, etc.).
    - **Universal Logic**: `Calculator` class runs in both Node.js (tests) and Browser (UI).

## 🚀 Installation & Usage

### Prerequisites
- Node.js (only for running tests)
- A modern web browser

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yjk15a/calculator.git
   ```
2. Open `index.html` in your browser.

### Running Tests
To verify the core logic:
```bash
npm install
npm test
```

## 📂 Project Structure

```
calculator/
├── core/
│   └── src/
│       ├── calculator.js      # Core logic (Universal Module)
│       └── calculator.test.js # Jest tests
├── frontend/
│   ├── style.css              # Stitch & Zip Theme
│   └── script.js              # UI Logic & DOM Integration
├── docs/                      # Documentation (PRD, Specs, Rules)
├── index.html                 # Entry point
└── package.json               # Test configuration
```

## ✨ Features

- **Basic Arithmetic**: Add, Subtract, Multiply, Divide.
- **Advanced Features**: Percentage (%), Decimal support.
- **State Management**: Clear All (AC), Delete last digit (DEL).
- **Zipper Animation**: engaging visual feedback on reset.

---
*Created as part of an Advanced Agentic Coding Session.*
