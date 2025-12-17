# Professional Portfolio Website

A clean, minimal, and professional portfolio website for a Staff/Lead Software Engineer. Built with semantic HTML5, modern CSS, and vanilla JavaScript.

## 🎯 Overview

This portfolio site is designed for senior engineering professionals seeking to communicate:
- Technical depth and architectural thinking
- Platform engineering and distributed systems experience
- Practical AI integration in production systems
- Business impact and leadership scope

## 📁 Project Structure

```
meyyappan-muthu.github.io/
├── index.html                          # Main HTML structure
├── styles.css                          # All styling and responsive design
├── script.js                           # Interactive features and animations
├── Meyyappan_Resume - 2025 - AU Format -4.pdf   # Resume PDF
├── profile-photo.jpg                   # Your professional photo (add this)
└── README.md                           # This file
```

## 🚀 Quick Start

1. **Add Your Professional Photo**
   - Replace `profile-photo.jpg` with your actual photo
   - Recommended: Square image, at least 400x400px
   - High quality, professional headshot with clean background
   - Format: JPG or PNG

2. **Review and Customize Content**
   - Open `index.html`
   - Update any content sections as needed
   - Verify all links (LinkedIn, GitHub, email, resume)

3. **Test Locally**
   - Open `index.html` in a web browser
   - Test responsive behavior by resizing the browser
   - Check all navigation links and buttons
   - Verify mobile menu functionality

4. **Deploy**
   - Push to GitHub repository named `[your-username].github.io`
   - Enable GitHub Pages in repository settings
   - Your site will be live at `https://[your-username].github.io`

## 🎨 Customization Guide

### Colors
All colors are defined as CSS variables in `styles.css` (lines 6-13):

```css
--color-primary: #2563eb;          /* Main brand color */
--color-primary-dark: #1e40af;     /* Hover states */
--color-secondary: #64748b;        /* Supporting text */
--color-text: #1e293b;             /* Body text */
--color-text-light: #475569;       /* Muted text */
--color-background: #ffffff;       /* Main background */
--color-background-alt: #f8fafc;   /* Alternate sections */
--color-border: #e2e8f0;          /* Borders and dividers */
--color-accent: #0ea5e9;          /* Accent highlights */
```

### Typography
Font settings are in `styles.css` (lines 15-21):

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
--font-size-base: 16px;
--font-size-small: 0.875rem;
--font-size-large: 1.125rem;
```

To use a custom font:
1. Add Google Fonts link in `<head>` of `index.html`
2. Update `--font-primary` variable

### Spacing & Layout
Adjust spacing scale in `styles.css` (lines 23-28):

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
```

### Content Sections

#### Update Hero Section
In `index.html`, find the `.hero-content` section:
- Update `hero-title` with your name
- Update `hero-subtitle` with your role
- Update `hero-description` with your summary

#### Update Expertise Cards
In the `.expertise-grid` section:
- Modify card titles and descriptions
- Add or remove cards as needed
- Update SVG icons if desired

#### Update Experience Timeline
In the `.timeline` section:
- Update dates, titles, companies
- Modify challenge/approach/outcome narratives
- Update technology tags
- Add or remove timeline items

#### Update Contact Links
Update all contact URLs:
- Email: `mailto:your-email@example.com`
- LinkedIn: Your LinkedIn profile URL
- GitHub: Your GitHub profile URL
- Resume: Path to your resume PDF

## 🎭 Hero Image Customization

The hero image has a subtle animated glow effect. To customize:

### Option 1: Keep Current Gradient Ring
Current design has a pulsing gradient ring around the photo. No changes needed.

### Option 2: Solid Color Ring
In `styles.css`, find `.hero-image-wrapper::before` (around line 184):

```css
background: #2563eb;  /* Solid color instead of gradient */
opacity: 0.2;
```

### Option 3: Remove Glow Effect
Remove or comment out the entire `.hero-image-wrapper::before` rule block.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: > 768px (full navigation, 2-4 column grids)
- **Tablet**: 481px - 768px (hamburger menu, 2 column grids)
- **Mobile**: ≤ 480px (single column, optimized spacing)

Test responsive behavior:
1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test various screen sizes
4. Verify touch interactions on mobile

## ⚡ Performance Optimization

### Current Optimizations
- No external dependencies or frameworks
- Minimal JavaScript (vanilla, no libraries)
- CSS-only animations
- Debounced scroll handlers
- Intersection Observer for lazy animations

### Additional Improvements
1. **Optimize Images**
   - Compress profile photo (use tools like TinyPNG)
   - Consider WebP format for better compression
   - Add `loading="lazy"` attribute

2. **Add Meta Tags**
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Additional SEO meta tags

3. **Enable Caching**
   - Add `.htaccess` for Apache servers
   - Configure cache headers

## 🔒 Security

- External links have `rel="noopener noreferrer"`
- No third-party scripts or analytics (add as needed)
- Static site = minimal attack surface

## ♿ Accessibility

Built-in accessibility features:
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h4)
- ARIA labels on interactive elements
- Focus-visible states for keyboard navigation
- Color contrast meets WCAG AA standards
- Reduced motion support for animations

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your GA4 tracking ID
2. Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Create repository: `[username].github.io`
2. Push all files to `main` branch
3. Enable Pages in Settings → Pages
4. Select `main` branch as source
5. Save and wait 2-3 minutes
6. Visit `https://[username].github.io`

### Custom Domain
1. Add `CNAME` file with your domain
2. Configure DNS at your domain registrar
3. Add A records pointing to GitHub's IPs
4. Enable HTTPS in GitHub Pages settings

### Other Hosting Options
- **Netlify**: Drag and drop folder, instant deploy
- **Vercel**: Connect GitHub repo, auto-deploy on push
- **AWS S3 + CloudFront**: Static site hosting with CDN
- **Traditional hosting**: Upload via FTP/SFTP

## 🐛 Troubleshooting

### Profile Photo Not Showing
- Verify filename matches exactly: `profile-photo.jpg`
- Check file is in same directory as `index.html`
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Mobile Menu Not Working
- Check browser console for JavaScript errors
- Verify `script.js` is in the same directory
- Ensure script tag is before `</body>`

### Styling Issues
- Clear browser cache
- Check `styles.css` path in HTML
- Verify no CSS syntax errors

### Links Not Working
- Update all placeholder URLs
- Check for typos in href attributes
- Test in incognito/private mode

## 📝 Content Writing Tips

### Senior-Level Language
✅ **Do:**
- "Led the architecture and implementation of..."
- "Designed deployment strategies that..."
- "Enabled incremental migration with zero downtime..."
- Focus on decisions, trade-offs, outcomes

❌ **Avoid:**
- "Passionate about coding since childhood"
- "Always learning new technologies"
- Long lists of technologies without context
- Junior phrases like "helped with" or "assisted in"

### Quantify Impact
- Include metrics where possible
- Mention scale (users, requests, data volume)
- Reference business outcomes
- Describe architectural decisions

## 🔄 Regular Updates

Keep your portfolio current:
- [ ] Update experience section quarterly
- [ ] Add new projects or achievements
- [ ] Refresh resume PDF
- [ ] Update contact information if changed
- [ ] Review and update technology mentions

## 📧 Support

For questions or issues:
- Review this README
- Check browser console for errors
- Test in multiple browsers
- Verify all file paths are correct

## 📄 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Designed for**: Staff/Lead Software Engineers
