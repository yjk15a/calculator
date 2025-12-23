# Product Requirement Document (PRD): Stitch & Zip Calculator

## 1. Project Overview
**Project Name**: Stitch & Zip Calculator
**Description**: A web-based calculator application that mimics the aesthetic of "Stitch & Zip" needlepoint kits. The interface will feature tactile textures, stitched patterns, and zipper motifs, combining a functional tool with a charming, handcrafted visual style.
**Target Audience**: Users who appreciate craft aesthetics, retro design, and playful interfaces.

## 2. Design Requirements ("Stitch & Zip" Theme)
The core design philosophy is "Digital Needlepoint". The interface should feel like a finished needlepoint project or a kit in progress.

### 2.1 Visual Language
- **Background**: 
  - A texture resembling **14-mesh needlepoint canvas** (white or cream grid).
  - Optional: A "fabric" background outside the main device area.
- **Color Palette**: 
  - Vibrant thread colors (Primary Red, Blue, Green, Yellow) often found in these kits.
  - High contrast against the white/cream mesh.
- **Typography**: 
  - A font that resembles **cross-stitch** or pixel art (e.g., "Press Start 2P" or a specific "Stitch" font).
  - Numbers should look like they are stitched into the canvas.

### 2.2 UI Components
- **Main Container (The Case)**:
  - The calculator body should look like a **zippered pouch** (a hallmark of Stitch & Zip kits).
  - **Zipper Element**: A zipper graphic running along the border (top or side).
  - **Texture**: The body has the woven mesh texture.
- **Display Screen**:
  - Framed by a "stitched" border (e.g., a satin stitch border).
  - Background: A slightly darker mesh or a "felt" patch area for contrast.
- **Buttons**:
  - **Shape**: Square or rounded buttons that look like embroidered patches.
  - **State Changes**:
    - **Default**: Raised "stitches".
    - **Hover**: Brighter thread color or slight "lift".
    - **Active (Click)**: "Pressed" fabric look or stitch depression.

### 2.3 Interactions & Animations
- **Zipper Effect**: 
  - On "Clear All" (AC), a zipper animation could "unzip" and "rezip" the display to wipe it clean.
- **Sound**: 
  - Subtle fabric rustle or zipper sound on specific actions (optional, user toggleable).

## 3. Functional Requirements
### 3.1 Core Calculation Features
- **Arithmetic**: Addition (+), Subtraction (-), Multiplication (*), Division (/).
- **Execution**: Equals (=) button to compute result.
- **Modifiers**: 
  - Clear (C): Clears current entry.
  - All Clear (AC): Resets entire calculation.
  - Percent (%): Calculates percentage.
  - Decimal Point (.): Handles floating point numbers.

### 3.2 Usability
- **Input Handling**: 
  - Keyboard support (Numpad usage).
  - Prevent multiple operators in sequence (e.g., "++").
  - Handle division by zero (Display "Error").
- **Responsiveness**: 
  - Centered layout on desktop.
  - Full-width adaptation on mobile devices.

## 4. Technical Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript.
- **Assets**: 
  - CSS patterns for mesh/grid (css-doodle or simple gradients).
  - SVG or CSS-based stitch patterns to minimize image variants.
- **Deployment**: Static hosting (e.g., GitHub Pages, Vercel).

## 5. Potential Questions / Clarifications
> [!NOTE]
> **"Stitch & Zip" Interpretation**: This PRD assumes the user is referring to the popular *Stitch & Zip* brand of needlepoint kits. If the user meant a specific person's portfolio or a different "Stitch" character (e.g., Disney's Stitch), this design direction will need adjustment.

## 6. Project Structure
```
/calculator
  /index.html      # Main structure
  /style.css       # Stitch & Zip themes, animations
  /script.js       # Calculation logic
  /assets/         # Fonts, icons (zipper SVG), textures
```
