# Quick Customization Guide

Fast reference for common customizations you might want to make.

## 🎨 Color Scheme

All colors are in `styles.css` at the top (lines 6-13). Change once, updates everywhere.

### Current Blue Theme
```css
--color-primary: #2563eb;          /* Main blue */
--color-primary-dark: #1e40af;     /* Darker blue for hovers */
--color-accent: #0ea5e9;           /* Light blue accent */
```

### Alternative Color Schemes

**Professional Purple**
```css
--color-primary: #7c3aed;
--color-primary-dark: #5b21b6;
--color-accent: #a78bfa;
```

**Modern Green**
```css
--color-primary: #059669;
--color-primary-dark: #047857;
--color-accent: #10b981;
```

**Bold Orange**
```css
--color-primary: #ea580c;
--color-primary-dark: #c2410c;
--color-accent: #fb923c;
```

**Classic Navy**
```css
--color-primary: #1e40af;
--color-primary-dark: #1e3a8a;
--color-accent: #3b82f6;
```

**Elegant Teal**
```css
--color-primary: #0d9488;
--color-primary-dark: #0f766e;
--color-accent: #14b8a6;
```

## 🔤 Typography Changes

### Use Google Fonts

1. **Choose font** at [fonts.google.com](https://fonts.google.com)

2. **Add to `<head>`** in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

3. **Update CSS variable** in `styles.css`:
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Recommended Font Pairings

**Modern & Clean**
```
Headings: 'Inter' or 'Work Sans'
Body: 'Inter' or 'Open Sans'
```

**Professional & Traditional**
```
Headings: 'Playfair Display' or 'Merriweather'
Body: 'Source Sans Pro' or 'Roboto'
```

**Tech & Minimal**
```
Headings: 'Space Grotesk' or 'DM Sans'
Body: 'IBM Plex Sans' or 'Manrope'
```

### Adjust Font Sizes

In `styles.css`, find these variables:
```css
--font-size-base: 16px;        /* Base body text */
--font-size-small: 0.875rem;   /* Small text */
--font-size-large: 1.125rem;   /* Large text */
```

For larger text overall:
```css
--font-size-base: 18px;
--font-size-small: 1rem;
--font-size-large: 1.25rem;
```

## 📏 Spacing Adjustments

### Increase Overall Spacing

In `styles.css`:
```css
--spacing-xs: 0.75rem;    /* was 0.5rem */
--spacing-sm: 1.25rem;    /* was 1rem */
--spacing-md: 2rem;       /* was 1.5rem */
--spacing-lg: 2.5rem;     /* was 2rem */
--spacing-xl: 4rem;       /* was 3rem */
--spacing-2xl: 5rem;      /* was 4rem */
```

### Decrease for Compact Look

```css
--spacing-xs: 0.375rem;
--spacing-sm: 0.75rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
```

## 🖼️ Hero Image Modifications

### Change Glow Effect Color

In `styles.css`, find `.hero-image-wrapper::before`:

**Single Color Glow**
```css
background: #2563eb;        /* Solid blue */
opacity: 0.25;
```

**Different Gradient**
```css
background: linear-gradient(135deg, #7c3aed, #ec4899);  /* Purple to pink */
opacity: 0.3;
```

### Remove Glow Effect Entirely

Comment out or delete the entire `.hero-image-wrapper::before` rule block (lines ~184-195 in `styles.css`).

### Make Glow More/Less Prominent

Adjust opacity:
```css
opacity: 0.5;   /* More prominent */
opacity: 0.2;   /* More subtle */
```

Adjust blur:
```css
filter: blur(30px);   /* More diffused */
filter: blur(10px);   /* Sharper */
```

### Change Border Style

In `.hero-image`:
```css
border: 6px solid var(--color-background);     /* Thicker border */
border: 2px solid var(--color-primary);        /* Colored border */
border: none;                                  /* No border */
```

## 📱 Layout Modifications

### Wider Container

In `styles.css`:
```css
--container-max-width: 1400px;   /* was 1200px */
```

### Narrower for Reading

```css
--container-max-width: 1000px;
```

### Change Expertise Grid Columns

In `.expertise-grid`:
```css
grid-template-columns: repeat(2, 1fr);           /* Always 2 columns */
grid-template-columns: repeat(3, 1fr);           /* Always 3 columns */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));  /* Larger cards */
```

## 🎭 Section Background Alternation

Currently sections alternate white/light gray. To change:

### All White Background
```css
.expertise { background-color: var(--color-background); }
.experience { background-color: var(--color-background); }
.ai-focus { background-color: var(--color-background); }
.about { background-color: var(--color-background); }
```

### Add Subtle Patterns

Using [SVG backgrounds](https://www.svgbackgrounds.com/):
```css
.hero {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    background-image: url("data:image/svg+xml,...");  /* Add pattern */
}
```

## ⚡ Animation Speed

### Slow Down Animations

In `styles.css`:
```css
--transition-speed: 0.5s;   /* was 0.3s */
```

### Speed Up
```css
--transition-speed: 0.2s;
```

### Disable Animations
```css
--transition-speed: 0s;
```

Or add at bottom of CSS:
```css
* {
    transition: none !important;
    animation: none !important;
}
```

## 📋 Content Sections

### Add New Expertise Card

In `index.html`, duplicate an `.expertise-card` div:

```html
<div class="expertise-card">
    <div class="expertise-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- Your icon SVG path -->
        </svg>
    </div>
    <h3>Your Title</h3>
    <p>Your description text here.</p>
</div>
```

**Get icons**: [Heroicons](https://heroicons.com/), [Feather Icons](https://feathericons.com/)

### Add New Timeline Item

Duplicate a `.timeline-item` block:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">2020 – 2023</span>
        <h3>Project Title</h3>
        <h4>Company Name • Your Role</h4>
        <p><strong>Challenge:</strong> Description...</p>
        <p><strong>Approach:</strong> Description...</p>
        <p><strong>Outcome:</strong> Description...</p>
        <ul class="tech-tags">
            <li>Tech 1</li>
            <li>Tech 2</li>
        </ul>
    </div>
</div>
```

### Remove a Section

Comment out or delete the entire `<section>` block. Don't forget to remove navigation link too!

## 🔗 Update Links

### LinkedIn
Find in `index.html`:
```html
<a href="https://linkedin.com/in/meyyappan-muthu" target="_blank">
```
Replace with your actual LinkedIn URL.

### GitHub
```html
<a href="https://github.com/meyyappan-muthu" target="_blank">
```
Update or remove if you don't have GitHub.

### Email
```html
<a href="mailto:meyy91@gmail.com">
```

### Resume PDF
```html
<a href="Meyyappan_Resume - 2025 - AU Format -4.pdf">
```
Update filename if changed.

## 🎨 Button Styling

### Rounded Buttons
```css
.btn {
    border-radius: 50px;   /* was 8px */
}
```

### Square Buttons
```css
.btn {
    border-radius: 0;
}
```

### Larger Buttons
```css
.btn {
    padding: var(--spacing-md) var(--spacing-xl);  /* Bigger */
    font-size: 1.125rem;
}
```

### Different Button Colors

Add new button class in CSS:
```css
.btn-success {
    background-color: #059669;
    color: white;
}

.btn-success:hover {
    background-color: #047857;
}
```

Use in HTML:
```html
<a href="#" class="btn btn-success">Click Me</a>
```

## 📊 Add Contact Form

Replace contact cards section with form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

Add CSS:
```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.contact-form input,
.contact-form textarea {
    padding: var(--spacing-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
}
```

Sign up at [Formspree](https://formspree.io/) for free form handling.

## 🌓 Add Dark Mode Toggle

This is more advanced but possible. Basic approach:

1. Add toggle button in navigation
2. Add dark theme CSS variables
3. Use JavaScript to toggle theme class
4. Store preference in localStorage

See online tutorials for full implementation.

## 📱 Mobile-Specific Changes

### Adjust Mobile Breakpoint

In `styles.css`, find `@media (max-width: 768px)`:
```css
@media (max-width: 768px)  /* Tablet and below */
@media (max-width: 480px)  /* Mobile only */
```

### Hide Element on Mobile

```css
@media (max-width: 768px) {
    .hide-on-mobile {
        display: none;
    }
}
```

## 🔍 SEO Enhancements

### Add Meta Tags

In `<head>` of `index.html`:

```html
<!-- Enhanced SEO -->
<meta name="author" content="Meyyappan Muthu">
<meta name="keywords" content="Staff Engineer, Platform Engineering, Distributed Systems, AI Engineer">
<link rel="canonical" href="https://meyyappan-muthu.github.io">

<!-- Open Graph (LinkedIn, Facebook) -->
<meta property="og:title" content="Meyyappan Muthu - Staff Software Engineer">
<meta property="og:description" content="Staff Software Engineer specializing in platform engineering and distributed systems">
<meta property="og:image" content="https://meyyappan-muthu.github.io/profile-photo.jpg">
<meta property="og:url" content="https://meyyappan-muthu.github.io">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Meyyappan Muthu - Staff Software Engineer">
<meta name="twitter:description" content="Platform engineering and distributed systems expert">
<meta name="twitter:image" content="https://meyyappan-muthu.github.io/profile-photo.jpg">
```

## 🎯 Quick Wins

Top 5 customizations most people make:

1. **Change primary color** → 2 minutes
2. **Add profile photo** → 5 minutes
3. **Update all links** → 5 minutes
4. **Adjust font sizes** → 3 minutes
5. **Modify spacing** → 3 minutes

**Total time: ~20 minutes to personalize!**

## 🆘 Common Issues & Fixes

### Colors Not Changing
- Clear browser cache (Ctrl+Shift+R)
- Check CSS variable syntax
- Verify you saved the file

### Layout Broken
- Check for missing closing tags
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Check browser console for errors

### Changes Not Showing
- Hard refresh browser
- Clear cache
- Check file was saved
- Verify correct file path

## 💡 Pro Tips

1. **Make one change at a time** - easier to debug
2. **Test on mobile after each change** - responsive issues
3. **Keep original values commented** - easy to revert
4. **Use browser DevTools** - test CSS live
5. **Commit after working changes** - Git safety net

---

**Remember**: This is your portfolio. Make it reflect YOUR style!

Experiment, iterate, and make it uniquely yours. 🎨

