# Agent Guidelines for Portfolio Project

## Commands
- **Development**: `npm start` - Starts http-server on port 3000 and opens /home
- **No tests configured** - Tests not implemented yet

## Architecture
- **Type**: Static portfolio website with client-side JavaScript
- **Structure**: Multi-page HTML with shared CSS/JS (home/, contact/, experience/, projects/, skills/)
- **Key Files**: index.html (entry), script.js (DOM manipulation), animations.js (scroll/cursor effects), particles.js, style.css
- **No backend** - Fully client-side, no server or database dependencies

## Code Style
- **JavaScript**: ES6+ class-based architecture, camelCase naming, DOMContentLoaded wrapper pattern
- **CSS**: CSS custom properties (variables) in :root, BEM-like naming for modular components
- **Formatting**: 4-space indentation in JS, consistent spacing in CSS
- **Selectors**: Use getElementById for single elements, querySelectorAll for collections
- **Animations**: Intersection Observer pattern for scroll animations, requestAnimationFrame for smooth effects
- **Comments**: Descriptive section comments in CSS, class/method purpose comments in JS
- **Null Safety**: Always check element existence before manipulation (e.g., `if (element) element.textContent = ...`)
- **Color Scheme**: Dark theme with CSS variables (--primary-color, --accent-color, etc.)
