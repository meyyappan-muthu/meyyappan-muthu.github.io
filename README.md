# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Inspired by clean, professional design patterns.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- ⚡ **Fast & Lightweight**: No heavy frameworks, just vanilla HTML, CSS, and JavaScript
- 🎭 **Interactive Elements**: Smooth scrolling, hover effects, and animations
- 🌈 **Gradient Hero Section**: Eye-catching header with beautiful gradients
- 📊 **Project Showcase**: Grid layout to display your best work
- 🛠️ **Skills Display**: Organized skill categories with interactive tags
- 📧 **Contact Section**: Easy ways for people to reach you

## Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
   ```bash
   open index.html
   ```

2. **Customize the content**:
   - Edit `index.html` to update your personal information
   - Modify the projects section with your actual projects
   - Update social media links in the footer
   - Replace email addresses with your own

3. **Customize the design**:
   - Edit `styles.css` to change colors, fonts, or layout
   - Update CSS variables in `:root` for quick theme changes
   - Adjust animations and transitions to your liking

## Customization Guide

### Updating Personal Information

1. **Hero Section** (lines 16-26 in index.html):
   - Change "Your Name" to your actual name
   - Update the subtitle with your bio
   - Modify the description to match your background

2. **Projects** (lines 28-80 in index.html):
   - Replace project titles and descriptions
   - Add links to your actual projects
   - Add more project cards by copying the structure

3. **Skills** (lines 82-116 in index.html):
   - Update the skill tags with your technologies
   - Add or remove skill categories as needed

4. **Contact Information** (throughout):
   - Replace `your.email@gmail.com` with your email
   - Update social media links (LinkedIn, GitHub, Twitter)
   - Add your resume link

### Changing Colors

Edit the CSS variables in `styles.css` (lines 9-18):

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    /* ... more variables ... */
}
```

### Adding More Sections

You can add new sections by following this structure:

```html
<section class="your-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## File Structure

```
portfolio_website/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # Interactive functionality
└── README.md        # This file
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload these files
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Your site will be live instantly

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## Tips for Customization

1. **Add Your Photo**: Consider adding a profile picture in the hero section
2. **Include Testimonials**: Add a testimonials section if you have them
3. **Blog Section**: Add a blog or articles section to showcase your writing
4. **Dark Mode**: Implement a dark mode toggle for better accessibility
5. **Analytics**: Add Google Analytics to track visitors
6. **SEO**: Update meta tags for better search engine optimization

## License

Feel free to use this template for your personal portfolio. No attribution required!

## Need Help?

If you run into any issues or want to add custom features, feel free to reach out!

---

**Built with ❤️ for showcasing your amazing work!**




