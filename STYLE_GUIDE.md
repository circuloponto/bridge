# BRIDGE Project - Style Guide & Design System

## 📐 Design Philosophy

A modern, accessible, and elegant design system inspired by world-class institutions (MIT, Stanford, Gates Foundation). Focus on clarity, sophistication, and user experience.

---

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #7d4e5c        /* Muted Mauve/Dusty Rose - Main brand color */
--color-primary-light: #9d6e7c  /* Light Mauve - Lighter variant */
--color-primary-dark: #5d3e4c   /* Dark Mauve - Darker variant */
--color-secondary: #d97757      /* Coral Orange - Warm accent */
--color-accent: #e8a05d         /* Golden Orange - Secondary accent */
```

### Background Colors
```css
--color-bg: #ffffff             /* Pure White - Main background */
--color-bg-light: #f8f9fa       /* Off White - Subtle backgrounds */
--color-cream: #faf6f1          /* Warm Cream - Soft sections */
```

### Text Colors
```css
--color-text: #1a1a1a           /* Almost Black - Primary text */
--color-text-secondary: #666666 /* Medium Gray - Secondary text */
--color-text-light: #999999     /* Light Gray - Tertiary text */
```

### Border Colors
```css
--color-border: #e0e0e0         /* Light Gray - Standard borders */
--color-border-light: #f0f0f0   /* Very Light Gray - Subtle borders */
```

### Usage Guidelines
- **Primary Mauve**: Navigation, CTAs, important buttons, brand elements, text links
- **Coral Orange**: Hover states, icons, progress indicators, warm accents
- **Golden Orange**: Badges, pills, secondary highlights, decorative elements
- **Cream**: Section backgrounds, card backgrounds, subtle highlights
- **Text hierarchy**: Use text-secondary for descriptions, text-light for metadata

---

## 🔤 Typography

### Font Pairing
```css
--font-heading: 'Space Grotesk'  /* Headings - Modern, geometric, bold */
--font-body: 'Inter'             /* Body - Clean, readable, professional */
```

### Font Weights
- **400**: Regular text
- **500**: Medium emphasis
- **600**: Semi-bold for UI elements
- **700**: Bold for headings

### Type Scale
```css
--text-xs: 0.75rem      /* 12px - Tiny labels */
--text-sm: 0.875rem     /* 14px - Small text, captions */
--text-base: 1rem       /* 16px - Body text */
--text-lg: 1.125rem     /* 18px - Large body */
--text-xl: 1.25rem      /* 20px - Subheadings */
--text-2xl: 1.5rem      /* 24px - Section titles */
--text-3xl: 1.875rem    /* 30px - Page titles */
--text-4xl: 2.25rem     /* 36px - Large titles */
--text-5xl: 3rem        /* 48px - Hero titles */
--text-6xl: 3.75rem     /* 60px - Extra large */
--text-7xl: 4.5rem      /* 72px - Massive */
```

### Heading Styles
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
```

### Responsive Typography
Use `clamp()` for fluid typography:
```css
font-size: clamp(48px, 8vw, 96px);  /* Hero titles */
font-size: clamp(36px, 5vw, 56px);  /* Section titles */
font-size: clamp(18px, 2vw, 24px);  /* Large descriptions */
```

---

## 📏 Spacing System

### Space Scale (8px base)
```css
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-5: 1.5rem     /* 24px */
--space-6: 2rem       /* 32px */
--space-8: 3rem       /* 48px */
--space-10: 4rem      /* 64px */
--space-12: 6rem      /* 96px */
--space-16: 8rem      /* 128px */
--space-20: 10rem     /* 160px */
```

### Usage Guidelines
- **Micro spacing** (1-3): Component internal spacing
- **Component spacing** (4-6): Padding, gaps between elements
- **Section spacing** (8-12): Between major sections
- **Page spacing** (16-20): Top/bottom page padding

---

## 🔲 Border Radius

```css
--radius-sm: 0.375rem   /* 6px - Small elements */
--radius-md: 0.5rem     /* 8px - Buttons, inputs */
--radius-lg: 0.75rem    /* 12px - Cards */
--radius-xl: 1rem       /* 16px - Large cards */
--radius-2xl: 1.5rem    /* 24px - Feature cards */
--radius-3xl: 2rem      /* 32px - Hero sections */
```

### Special Radii
- **Pills/Badges**: `100px` or `9999px`
- **Circles**: `50%`

---

## 🎭 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15)
```

### Usage
- **sm**: Subtle elevation (badges, pills)
- **md**: Cards, buttons
- **lg**: Hover states, modals
- **xl**: Floating elements
- **2xl**: Major overlays

---

## ⚡ Transitions & Animations

### Timing Functions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Standard Easing
```css
cubic-bezier(0.4, 0, 0.2, 1)  /* Smooth, natural motion */
```

### Scroll Reveal Animation
- **Opacity**: 0.4 → 1
- **Filter**: grayscale(0.8) → grayscale(0)
- **Transform**: translateY(20px) → translateY(0)
- **Duration**: 800ms
- **Trigger**: 50px before viewport entry
- **Stagger delay**: 80-150ms between items

### Mobile Menu Animation
- **Type**: Slide in from left
- **Transform**: translateX(-30px) → translateX(0)
- **Opacity**: 0 → 1
- **Duration**: 400ms
- **Stagger**: 50ms per item

---

## 🧩 Component Patterns

### Cards
```css
.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  transition: var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Buttons
```css
button, .btn {
  font-weight: 600;
  border-radius: var(--radius-xl);
  padding: 14px-20px 24px-40px;
  transition: var(--transition-base);
}
```

### Pills/Badges
```css
.pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px-12px 16px-24px;
  background: var(--color-cream);
  border-radius: 100px;
  font-size: var(--text-sm);
  font-weight: 600;
}
```

### Section Headers
```css
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: var(--color-cream);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 640px)   /* Mobile */
@media (max-width: 768px)   /* Tablet */
@media (max-width: 1024px)  /* Small desktop */
@media (min-width: 1280px)  /* Large desktop */
```

### Container
```css
.max-w-7xl {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}
```

### Grid System
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
}
```

---

## 🎯 Special Effects

### Glassmorphism (Navigation)
```css
background: rgba(255, 255, 255, 0.48);
backdrop-filter: blur(9.9px);
-webkit-backdrop-filter: blur(9.9px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
```

### Gradient Overlays
```css
/* Subtle color wash */
background: linear-gradient(135deg, rgba(232, 160, 93, 0.05) 0%, rgba(255, 255, 255, 1) 50%);

/* Icon backgrounds */
background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
```

### Parallax Background
- **Layers**: 15 circles
- **Sizes**: 50px - 300px
- **Opacity**: 0.03 - 0.08
- **Speed variations**: 0.5x - 2.2x (scroll), 0.3x - 1.2x (mouse)
- **Colors**: Primary green and secondary orange

### Scroll Progress Bar
- **Position**: Left side, fixed
- **Width**: 3px
- **Color**: Secondary orange
- **Margin**: 16px from left
- **Animation**: Expands from center to top/bottom

---

## ♿ Accessibility

### ARIA Labels
- All interactive elements have `aria-label`
- Navigation has `role="navigation"`
- Footer has `role="contentinfo"`
- Buttons have `aria-pressed` states

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}
```

### Color Contrast
- Primary text on white: 13.7:1 (AAA)
- Secondary text on white: 5.7:1 (AA)
- White text on primary: 11.2:1 (AAA)

---

## 🌐 Internationalization

### Supported Languages
- Portuguese (pt)
- English (gb)
- French (fr)

### Language Persistence
- Stored in `localStorage`
- Custom hook: `useLanguage()`
- Synced across all pages

---

## 🎨 Design Techniques

### 1. **Visual Hierarchy**
- Large, bold headings with Space Grotesk
- Generous whitespace (space-8 to space-20)
- Clear section separation with background colors

### 2. **Micro-interactions**
- Hover transforms: `translateY(-4px)` on cards
- Color transitions on links and buttons
- Smooth 300ms transitions

### 3. **Progressive Disclosure**
- Scroll-triggered animations
- Staggered card reveals
- Modal overlays for detailed content

### 4. **Consistency**
- Reusable component classes (`.card`, `.section-header`)
- Consistent spacing scale
- Unified color palette

### 5. **Performance**
- Next.js font optimization
- CSS variables for theming
- Efficient animations (transform/opacity only)

---

## 📦 Component Library

### Core Components
- `Navigation` - Glassmorphic nav with sliding pill indicator
- `Footer` - Multi-column footer with scroll animations
- `ScrollReveal` - Intersection Observer-based reveal animations
- `ParallaxBackground` - Animated background circles
- `ScrollProgress` - Vertical progress indicator
- `NewsModal` - Full-screen article modal
- `CursorFollower` - Custom cursor effect

### Utility Components
- `ClientWrapper` - Client-side only wrapper
- `useLanguage` - Language persistence hook

---

## 🚀 Best Practices

### Do's ✅
- Use CSS variables for colors and spacing
- Apply scroll animations to major sections
- Maintain consistent border radius across components
- Use clamp() for responsive typography
- Add hover states to interactive elements
- Provide ARIA labels for accessibility
- Use semantic HTML (nav, footer, main, section)

### Don'ts ❌
- Don't hardcode colors or spacing values
- Don't animate width/height (use transform instead)
- Don't use inline styles for reusable patterns
- Don't skip focus states
- Don't use fixed pixel values for typography
- Don't create layout shifts with animations

---

## 📝 Code Style

### CSS Custom Properties
```css
/* Always use variables */
color: var(--color-primary);        /* ✅ Good */
color: #1a4d2e;                     /* ❌ Bad */

/* Spacing */
padding: var(--space-8);            /* ✅ Good */
padding: 48px;                      /* ❌ Bad */
```

### Responsive Units
```css
/* Fluid typography */
font-size: clamp(48px, 8vw, 96px); /* ✅ Good */
font-size: 72px;                    /* ❌ Bad */

/* Spacing */
gap: var(--space-8);                /* ✅ Good */
gap: 3rem;                          /* ⚠️ Acceptable */
gap: 48px;                          /* ❌ Bad */
```

---

## 🎯 Animation Guidelines

### Performance
- Only animate `transform` and `opacity`
- Use `will-change` sparingly
- Prefer CSS transitions over JavaScript

### Timing
- **Fast**: 150ms - Micro-interactions
- **Base**: 300ms - Standard transitions
- **Slow**: 800ms - Scroll reveals

### Easing
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
- Avoid linear easing

---

## 📚 Resources

### Inspiration
- MIT OpenCourseWare
- Stanford Design System
- Gates Foundation Website

### Tools
- Next.js 14+ (App Router)
- React 18+
- Lucide Icons
- Google Fonts (Space Grotesk, Inter)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API

---

**Last Updated**: November 2024  
**Version**: 1.0  
**Maintained by**: BRIDGE Development Team
