# BRIDGE - Supported Employment Project

A world-class, accessibility-compliant institutional website for the BRIDGE supported employment project. Built with Next.js, featuring multilingual support (Portuguese, English, French) and comprehensive accessibility features.

## Features

### Accessibility Compliance
- **WCAG 2.1 Level AA** compliant
- **Semantic HTML** for better screen reader navigation
- **Keyboard navigation** support throughout
- **Color contrast ratios** meeting WCAG standards (minimum 4.5:1)
- **Skip to main content** link
- **Focus indicators** for all interactive elements
- **Reduced motion** support for users with vestibular disorders
- **ARIA labels** and proper form labeling
- Dedicated **Accessibility Statement** page

### Multilingual Support
- **Portuguese (PT)** - Default language
- **English (GB)**
- **French (FR)**
- Easy language switching with persistent state

### Design Features
- **Modern, engaging UI** with smooth animations
- **Responsive design** for all devices
- **Custom color palette** based on your brand colors:
  - Burgundy (#7d5563)
  - Rose (#b87b7f)
  - Coral (#e87f6f)
  - Peach (#f5ad6f)
- **Gradient backgrounds** and decorative elements
- **Hover effects** and micro-interactions
- **Card-based layouts** for content organization

### Content Sections
1. **Hero** - Eye-catching introduction with CTAs
2. **Objectives** - Mission and goals
3. **Target Groups** - Who the project serves
4. **Activities** - What the project does
5. **Results** - Impact statistics
6. **Partners** - Collaborating organizations
7. **News** - Latest updates
8. **Contacts** - Contact form and information

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
bridge/
├── app/
│   ├── acessibilidade/      # Accessibility statement page
│   │   └── page.js
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Main homepage
├── components/
│   ├── Navigation.js        # Accessible navigation component
│   └── Footer.js            # Footer component
├── lib/
│   └── i18n.js             # Internationalization translations
└── public/                  # Static assets
```

## Color Palette

The website uses a carefully selected color palette with accessibility-compliant contrast ratios:

- **Primary (Burgundy)**: `#7d5563` - Main brand color
- **Secondary (Coral)**: `#e87f6f` - Accent and CTAs
- **Accent (Peach)**: `#f5ad6f` - Highlights
- **Rose**: `#b87b7f` - Supporting color
- **Text**: `#2d1f23` - High contrast for readability
- **Text Light**: `#5a4a4e` - Secondary text

All color combinations meet WCAG 2.1 Level AA contrast requirements.

## Accessibility Features

### Keyboard Navigation
- **Tab** - Navigate to next element
- **Shift + Tab** - Navigate to previous element
- **Enter** - Activate links and buttons
- **Esc** - Close modals and menus

### Screen Reader Support
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels for all interactive elements
- Proper heading hierarchy (h1-h6)
- Alternative text for all images
- Form labels properly associated with inputs

### Visual Accessibility
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Focus indicators with 3px outline
- No information conveyed by color alone
- Supports browser zoom up to 200%

## Adding/Editing Translations

Edit the `lib/i18n.js` file to add or modify translations:

```javascript
export const translations = {
  pt: { /* Portuguese translations */ },
  gb: { /* English translations */ },
  fr: { /* French translations */ },
};
```

## Customization

### Updating Colors
Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-primary: #7d5563;
  --color-secondary: #e87f6f;
  /* ... other colors */
}
```

### Adding New Sections
1. Add translations to `lib/i18n.js`
2. Create section component in `app/page.js`
3. Add navigation link in `components/Navigation.js`

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Testing

### Accessibility Testing
- Use browser DevTools Lighthouse for accessibility audit
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation
- Check color contrast with tools like WebAIM Contrast Checker

### Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

 2024 BRIDGE Project. All rights reserved.

## Support

For questions or support, contact: info@bridge-project.eu

---

Built with  using Next.js 16, React 19, and Tailwind CSS 4
