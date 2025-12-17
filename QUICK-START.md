# Quick Start Guide

Get your portfolio live in 30 minutes or less!

## ⚡ 5-Minute Local Preview

1. **Open the website locally**
   ```bash
   # Navigate to the directory
   cd "/Users/mmuthuk/Documents/AI Engineer/meyyappan-muthu.github.io"
   
   # Open in your default browser
   open index.html
   ```

2. **Test it out**
   - Scroll through all sections
   - Click all navigation links
   - Test the mobile menu (resize browser)
   - Click contact links (they should work)

That's it! If it looks good, proceed to deployment.

## 🚀 15-Minute Deployment to GitHub Pages

### Step 1: Add Your Photo (5 min)
```bash
# Add your professional headshot as profile-photo.jpg
# Make sure it's in the same directory as index.html
```

### Step 2: Create GitHub Repository (3 min)
1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Name it exactly: `meyyappan-muthu.github.io`
4. Make it **Public**
5. Don't initialize with README
6. Click **"Create repository"**

### Step 3: Deploy (7 min)
```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio website"

# Rename branch to main
git branch -M main

# Add remote (replace with your actual URL)
git remote add origin https://github.com/meyyappan-muthu/meyyappan-muthu.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages (2 min)
1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** (in left sidebar)
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes

### Step 5: Visit Your Live Site!
```
https://meyyappan-muthu.github.io
```

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] Professional photo added as `profile-photo.jpg`
- [ ] All contact links updated (email, LinkedIn, GitHub)
- [ ] Resume PDF is the latest version
- [ ] Tested on mobile (resize browser to check)
- [ ] Tested navigation menu
- [ ] Checked for typos

## 🛠️ Common Issues & Quick Fixes

### "Site Not Loading After Deploy"
**Solution**: Wait 2-3 minutes, then hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### "Profile Photo Not Showing"
**Solution**: 
- Verify filename is exactly `profile-photo.jpg` (case-sensitive)
- Make sure file is in the same directory as `index.html`
- Hard refresh browser

### "Mobile Menu Not Working"
**Solution**: 
- Verify `script.js` file is in the same directory
- Check browser console for errors (F12)
- Make sure `<script src="script.js"></script>` is in `index.html`

### "Changes Not Showing After Push"
**Solution**:
```bash
# Wait 1-2 minutes after push
# Then hard refresh browser
# Or try incognito/private mode
```

## 📝 After Deployment

### Share Your Portfolio
1. **Update LinkedIn**
   - Add URL to "Contact Info" section
   - Post announcement sharing your portfolio

2. **Update Resume**
   - Add website URL at top
   - Include in contact information

3. **Email Signature**
   ```
   Meyyappan Muthu
   Staff Software Engineer
   https://meyyappan-muthu.github.io
   ```

### Test on Real Devices
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad
- [ ] Different desktop browsers

## 🎨 Quick Customizations

### Change Primary Color
Open `styles.css`, find line 6, and change:
```css
--color-primary: #2563eb;  /* Change this hex code */
```

### Update Contact Info
Open `index.html`, search for:
- `mailto:` - Update email
- `linkedin.com` - Update LinkedIn URL
- `github.com` - Update GitHub URL

### Modify Hero Text
Open `index.html`, find the `.hero-content` section and update:
- `<h1>` - Your name
- `<p class="hero-subtitle">` - Your role
- `<p class="hero-description">` - Your summary

## 📊 Track Your Success

### Add Google Analytics (Optional)
1. Create GA4 account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (starts with G-)
3. Add before `</head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔄 Making Updates

### Content Updates
1. Edit `index.html` locally
2. Test by opening file in browser
3. Commit and push:
```bash
git add .
git commit -m "Update experience section"
git push
```

### Design Updates
1. Edit `styles.css` locally
2. Test changes in browser
3. Commit and push:
```bash
git add .
git commit -m "Update color scheme"
git push
```

## 📚 Need More Help?

- **Setup details**: Read `SETUP-CHECKLIST.md`
- **Deployment issues**: Read `DEPLOYMENT.md`
- **Customization**: Read `CUSTOMIZATION-GUIDE.md`
- **Photo help**: Read `PHOTO-GUIDE.md`
- **Full overview**: Read `README.md`

## 💡 Pro Tips

1. **Test Locally First**: Always open `index.html` in browser before deploying
2. **Commit Often**: Small commits are easier to debug
3. **Use Descriptive Messages**: Makes finding changes easier
4. **Keep Documentation**: Don't delete the guide files
5. **Backup**: Keep a copy before major changes

## 🎯 Your Roadmap

**Today** (30 min):
- [ ] Add profile photo
- [ ] Test locally
- [ ] Deploy to GitHub Pages

**This Week**:
- [ ] Share on LinkedIn
- [ ] Add URL to resume
- [ ] Test on mobile devices
- [ ] Get feedback from colleagues

**This Month**:
- [ ] Monitor site analytics
- [ ] Apply to positions
- [ ] Update with any new achievements
- [ ] Consider custom domain

## 🚨 Important Notes

### Don't Skip These
1. **Add real profile photo** - Don't deploy with placeholder
2. **Update ALL links** - Verify email, LinkedIn, GitHub
3. **Test mobile** - Most recruiters use mobile
4. **Check typos** - Use spell checker
5. **Latest resume** - Ensure PDF is current

### GitHub Repository Name
Must be exactly: `[your-username].github.io`

For you: `meyyappan-muthu.github.io`

Wrong names won't work for GitHub Pages automatic deployment.

## ✨ You're Almost There!

Your professional portfolio is ready. Just:
1. Add your photo
2. Deploy to GitHub
3. Share with the world

**Good luck with your job search in Australia!** 🇦🇺🚀

---

**Questions?** Check the detailed guides in this directory.

**Ready to deploy?** Follow the 15-minute guide above!

