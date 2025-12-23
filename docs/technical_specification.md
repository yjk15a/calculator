# Technical Specification: Stitch & Zip Calculator

## 1. Architecture Overview
This is a client-side only web application. The core logic handles arithmetic operations, while the presentation layer focuses on the "Digital Needlepoint" aesthetic using CSS3 and SVGs.

### 1.1 Tech Stack
- **Languages**: 
  - HTML5 (Semantic structure)
  - CSS3 (Styling, Grid/Flexbox, Animations)
  - JavaScript (ES6+ for logic)
- **Testing**: Jest (for TDD of core logic).
- **Libraries**: None for runtime (Vanilla JS implementation).
- **Fonts**: 'Press Start 2P' (Google Fonts) for the retro/stitched text look.
- **Assets**: minimal SVGs for zipper elements.

## 2. Frontend Implementation

### 2.1 File Structure
```
/project-root
├── index.html          # Main application entry
├── css/
│   ├── style.css       # Main styles (reset, variables, utilities)
│   ├── themes.css      # Specific Stitch & Zip color themes
│   └── components.css  # Button, Display, Zipper styles
├── js/
│   ├── calculator.js   # Core Calculator Class
│   └── ui.js           # UI interaction handlers (zipper animation, sounds)
├── assets/
│   ├── icons/          # zipper-pull.svg
│   └── sounds/         # zip.mp3 (optional)
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions CI/CD configuration
```

### 2.2 Component Specifications

#### **A. The Case (Container)**
- **CSS Implementation**: 
  - Use `background-image: repeating-linear-gradient` to create a mesh/grid texture without large images.
  - Border radius to simulate a soft pouch.
  - `box-shadow` to create depth (floating on table).

#### **B. The Display**
- **Structure**: `div.display-screen`
- **Styling**: 
  - Inner shadow to look recessed.
  - Monospace pixel font.
  - "Stitched" border using dashed CSS borders with custom spacing.

#### **C. Keypad & Buttons**
- **Layout**: CSS Grid (`grid-template-columns: repeat(4, 1fr)`).
- **Button styling**:
  - `box-shadow` (inset and outset) to simulate raised embroidery.
  - `:active` state inverts shadows to simulate being pressed.
  - Different classes for types: `.btn-num`, `.btn-op`, `.btn-action`.

#### **D. The Zipper**
- **Visuals**: A decorative strip along the top or side.
- **Animation**: 
  - CSS transition on the zipper pull position.
  - On 'Clear' action, the zipper pull translates across the screen, revealing a "fresh" canvas layer underneath (simulated via `overflow: hidden` and a sliding div).

### 2.3 JavaScript Logic (Calculator Class)
```javascript
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() { ... }
  delete() { ... }
  appendNumber(number) { ... }
  chooseOperation(operation) { ... }
  compute() { ... }
  updateDisplay() { ... }
}
```

## 3. Asset Requirements
- **Zipper SVG**: deeply customizable definition for the zipper teeth and pull.
- **Textures**: Pure CSS preferred, but a small noise PNG pattern might be used for fabric realism if CSS yields poor results.
- **Favicon**: Small stitched calculator icon.

## 4. Performance & Compatibility
- **Browser Support**: Chrome, Firefox, Safari, Edge (Latest 2 versions).
- **Mobile**: Touch event listeners for better response than `click` on mobile. Prevent pinch-zoom.
- **Accessibility**: 
  - ARIA labels on all buttons.
  - Keyboard navigation support.

## 5. Development Standards
- **Methodology**: TDD (Test Driven Development) for all core logic (calculator operations).
- **Architecture**: SOLID principles must be observed.
  - *Single Responsibility*: UI handling separated from Calculation logic.
  - *Open/Closed*: Calculator class extensible for new operations without modifying core.
  
## 6. Security & Deployment
- **Security**: No user data collection. Input sanitation not strictly necessary as there is no backend, but display limit handling prevents overflow.
- **CI/CD**: GitHub Actions workflow to automatically build and deploy on push to `main`.
- **Hosting**: GitHub Pages serving the static content.
