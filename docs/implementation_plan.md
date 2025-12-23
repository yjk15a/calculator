# Implementation Plan - Stitch & Zip Calculator

# Goal Description
Build a web-based calculator with a "Stitch & Zip" needlepoint aesthetic, including a zipper animation feature. The project will be deployed to GitHub Pages via GitHub Actions.

## User Review Required
> [!IMPORTANT]
> **Assets**: I will use CSS-based textures and SVGs for the zipper to keep the project lightweight. I will generate a placeholder "zipper-pull.svg" using code or ask for one if needed, but for now, I will create a simple SVG representation.

## Proposed Changes

### Project Setup
#### [NEW] [index.html](file:///C:/Users/kimjo/.antigravity/calculator/index.html)
- Basic HTML5 boilerplate with semantic structure for the calculator case and screen.

#### [NEW] [style.css](file:///C:/Users/kimjo/.antigravity/calculator/css/style.css)
- CSS variables for colors (thread colors), fonts ('Press Start 2P'), and textures.
- Grid layout for the calculator buttons.

#### [NEW] [calculator.js](file:///C:/Users/kimjo/.antigravity/calculator/js/calculator.js)
- Core `Calculator` class logic (implemented via TDD).

#### [NEW] [calculator.test.js](file:///C:/Users/kimjo/.antigravity/calculator/tests/calculator.test.js)
- Unit tests for Calculator class.

#### [NEW] [deploy.yml](file:///C:/Users/kimjo/.antigravity/calculator/.github/workflows/deploy.yml)
- GitHub Actions workflow to build (if necessary) and deploy to `gh-pages` branch.

### Feature Implementation

#### Component: The Case & Texture
- Implement the mesh background using CSS `repeating-linear-gradient`.
- Create the "stitched" border effect for the screen.

#### Component: The Zipper
- Add `assets/icons/zipper-pull.svg`.
- Implement CSS/JS logic to animate the zipper moving across the screen on "AC" (All Clear) press.

#### Component: Core Logic (TDD & SOLID)
- **Setup**: Initialize Jest environment (`npm init -y`, `npm i -D jest`).
- **Cycle 1 (Basic Operations)**:
  - Write failing test for `add`, `subtract`.
  - Implement basic methods.
  - Refactor for SRP.
- **Cycle 2 (Complex Logic)**:
  - Write failing tests for `compute()` sequence.
  - Implement state management.
- **Cycle 3 (Edge Cases)**:
  - Test division by zero, floating point precision.
  - Implement fixes.

#### Component: Interaction Integration
- Bind UI buttons to `Calculator` class methods.

## Verification Plan

### Automated Tests
- **Unit Tests**: Run `npm test` to verify `Calculator` logic coverage (target > 90%).
- **CI**: Verify tests pass in GitHub Actions.

### Manual Verification
- **Visual**: Check if the "stitch" texture looks correct on different screen sizes.
- **Functional**:
  - Test all arithmetic operations (+, -, *, /).
  - Test "Clear" and "Delete" functionality.
  - **Zipper**: Confirm zipper animation triggers on "AC" and resets the screen.
- **Deployment**: Verify the site is accessible via the GitHub Pages URL after push.
