# STTP HTML - Raw HTML/CSS/JS Version

This folder contains the complete conversion of the SIDPRESS React website into raw HTML, CSS, and vanilla JavaScript.

## File Structure

```
STTP_HTML/
├── index.html              # Home page
├── blog.html               # Blog page
├── privacy-policy.html     # Privacy Policy page
├── terms.html              # Terms & Conditions page
├── 404.html                # 404 Error page
├── styles.css              # All styles (longhand CSS only)
├── script.js               # Vanilla JavaScript for interactivity
├── assets/                 # All images and assets
│   ├── logo.png
│   ├── hero-product-box.png
│   ├── hero-badge.png
│   ├── morpheus-choice.png
│   ├── bitcoin-accepted.png
│   └── feature-*.png/jpg
└── fonts/                  # Custom fonts
    └── Huile_de_Jacinthe.ttf
```

## Technical Specifications

### HTML
- All markup uses `div class="sttp-wrapper"` as the root container
- Semantic HTML5 structure
- Data attributes for JavaScript interactivity (e.g., `data-action="toggle-menu"`)
- No framework dependencies

### CSS (styles.css)
- **Longhand properties only** - No shorthand like `margin: 0 auto`
- **No pseudo-elements** - No `::before`, `::after`, etc.
- **No descendant selectors** - Each element has explicit class
- All colors use HSL format
- Mobile-first responsive design
- Custom font: Huile de Jacinthe

### JavaScript (script.js)
- Pure vanilla JavaScript (ES5 compatible)
- Uses data-* attributes for element targeting
- Features:
  - Mobile menu toggle
  - Logo ticker animation
  - Dynamic copyright year
  - No external dependencies

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with potential minor visual differences)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Usage

Simply open `index.html` in a web browser. No build process or server required.

For local development:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Color Scheme

The design uses a HSL color system:
- Primary (Yellow): `hsl(45, 93%, 47%)`
- Text: `hsl(0, 0%, 9%)`
- Background: `hsl(0, 0%, 100%)`
- Secondary Background: `hsl(0, 0%, 96%)`
- Accent (Red): `hsl(0, 84%, 60%)`
- Success (Green): `hsl(142, 71%, 45%)`

## Breakpoints

- Mobile: 479px
- Mobile Large: 767px
- Tablet: 991px
- Desktop: 1024px
- XL: 1280px
- 2XL: 1536px

## Features

✅ Fully responsive design
✅ Mobile menu with overlay
✅ Animated logo ticker
✅ SEO optimized meta tags
✅ Accessible markup
✅ No external dependencies
✅ Pure HTML/CSS/JS

## Notes

- All images are loaded from the `assets/` folder
- Custom font loaded from `fonts/` folder
- External payment links point to: `https://sidpress.sell.app/product/straight-to-the-point-course`
- Contact email: `SidPressOrg@Gmail.com`

## Differences from React Version

1. No client-side routing (separate HTML files for each page)
2. No React hooks or state management
3. Simplified animations (CSS-only where possible)
4. Manual DOM manipulation instead of virtual DOM
5. All interactions use vanilla JavaScript

## License

© 2025 SIDPRESS. All rights reserved.