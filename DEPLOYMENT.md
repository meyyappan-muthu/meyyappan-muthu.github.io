# Deployment Guide

Complete guide for deploying your portfolio website to various hosting platforms.

## 🚀 GitHub Pages (Recommended)

GitHub Pages is free, fast, and perfect for static portfolio sites.

### Prerequisites
- GitHub account
- Git installed on your computer
- All files ready in your local directory

### Step-by-Step Deployment

#### 1. Create GitHub Repository

**Important**: Repository name must be `[your-username].github.io`

For your case: `meyyappan-muthu.github.io`

```bash
# Go to GitHub.com and:
# 1. Click "New repository"
# 2. Name: meyyappan-muthu.github.io
# 3. Description: "Professional portfolio website"
# 4. Set to Public
# 5. Don't initialize with README (you already have one)
# 6. Click "Create repository"
```

#### 2. Initialize Git Locally

Open terminal in your portfolio directory:

```bash
# Navigate to your portfolio folder
cd "/Users/mmuthuk/Documents/AI Engineer/meyyappan-muthu.github.io"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio website commit"

# Rename branch to main (if needed)
git branch -M main
```

#### 3. Connect to GitHub

```bash
# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/meyyappan-muthu/meyyappan-muthu.github.io.git

# Push to GitHub
git push -u origin main
```

#### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

#### 5. Access Your Site

Your site will be live at:
```
https://meyyappan-muthu.github.io
```

### Updating Your Site

After making changes:

```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "Update experience section"

# Push to GitHub
git push

# Site will auto-update in 1-2 minutes
```

### GitHub Pages Features

✅ **Free hosting**
✅ **HTTPS enabled automatically**
✅ **Custom domain support**
✅ **Auto-deployment on push**
✅ **No server maintenance**
✅ **Reliable uptime**

## 🌐 Custom Domain Setup

Add a custom domain like `meyyappanmuthu.com` to your GitHub Pages site.

### 1. Buy a Domain
- [Namecheap](https://namecheap.com) - $10-15/year
- [Google Domains](https://domains.google) - $12/year
- [Cloudflare](https://cloudflare.com) - $10/year

### 2. Create CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```
meyyappanmuthu.com
```

Or use `www` subdomain:
```
www.meyyappanmuthu.com
```

### 3. Configure DNS

Add these records at your domain registrar:

**For apex domain (meyyappanmuthu.com):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: meyyappan-muthu.github.io
```

### 4. Enable in GitHub Settings

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `meyyappanmuthu.com`
3. Check "Enforce HTTPS" (after DNS propagates)
4. Save

### 5. Wait for DNS Propagation

- Usually takes 1-24 hours
- Check status: https://dnschecker.org
- Test your custom domain URL

## 🔥 Netlify Deployment

Alternative to GitHub Pages with extra features.

### Quick Deploy (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free account)
3. Click "Add new site" → "Deploy manually"
4. Drag your portfolio folder
5. Site deploys instantly with random URL

### Continuous Deployment (GitHub)

1. Push code to GitHub repository
2. Go to Netlify dashboard
3. Click "Add new site" → "Import from Git"
4. Connect to GitHub
5. Select your repository
6. Click "Deploy site"

**Benefits:**
- Auto-deploy on Git push
- Custom domain (free SSL)
- Form handling
- Serverless functions
- Instant cache invalidation

### Netlify Config (Optional)

Create `netlify.toml` in root:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"
```

## ⚡ Vercel Deployment

Modern hosting platform with excellent performance.

### Deploy from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy"

**Benefits:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments for branches

### Vercel Config (Optional)

Create `vercel.json`:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🗂️ Traditional Web Hosting

If you have existing web hosting (cPanel, etc.)

### Upload via FTP

1. Get FTP credentials from hosting provider
2. Use FileZilla or similar FTP client
3. Connect to your server
4. Upload all files to `public_html` or `www` directory
5. Access via your domain

### Upload via cPanel File Manager

1. Log into cPanel
2. Open "File Manager"
3. Navigate to `public_html`
4. Upload all portfolio files
5. Extract if uploaded as ZIP

## 📊 Deployment Comparison

| Platform | Free Tier | Custom Domain | SSL | Build Time | Best For |
|----------|-----------|---------------|-----|------------|----------|
| **GitHub Pages** | ✅ Yes | ✅ Yes | ✅ Auto | ~2 min | Simple static sites |
| **Netlify** | ✅ Yes (100GB) | ✅ Yes | ✅ Auto | ~1 min | Feature-rich needs |
| **Vercel** | ✅ Yes | ✅ Yes | ✅ Auto | ~30 sec | Performance-focused |
| **Traditional** | ❌ Paid | ✅ Yes | ⚠️ Depends | Instant | Legacy hosting |

## 🔒 Post-Deployment Security

### Enable HTTPS
- GitHub Pages: Automatic
- Netlify: Automatic
- Vercel: Automatic
- Traditional: Get SSL certificate (Let's Encrypt free)

### Security Headers
Consider adding to your hosting:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
```

### Content Security Policy (Optional)

Add to `<head>` in `index.html`:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               style-src 'self' 'unsafe-inline'; 
               script-src 'self'; 
               img-src 'self' data:;">
```

## 🎯 Recommended Setup

**For You (Meyyappan):**

1. **Primary**: GitHub Pages
   - Free, reliable, simple
   - Perfect for portfolio sites
   - No maintenance needed
   - Repository: `meyyappan-muthu.github.io`

2. **Custom Domain** (Optional but Professional)
   - Buy: `meyyappanmuthu.com`
   - Point to GitHub Pages
   - Professional email possible

3. **Analytics** (Optional)
   - Google Analytics 4
   - Track visitors, engagement
   - Understand traffic sources

## 🐛 Troubleshooting

### Site Not Loading
- Check GitHub Pages is enabled
- Verify repository is public
- Wait 2-3 minutes after enabling
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)

### Custom Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (up to 24 hours)
- Check CNAME file exists in repository
- Ensure domain spelling is exact

### Images Not Showing
- Verify file paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in repository
- Hard refresh browser

### CSS Not Applying
- Check `styles.css` path in HTML
- Verify file is in repository
- Clear browser cache
- Check browser console for errors

## 📱 Testing Deployed Site

After deployment, test:

✅ **Functionality**
- [ ] All navigation links work
- [ ] All buttons function correctly
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll works
- [ ] All external links open

✅ **Performance**
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Animations smooth

✅ **Responsive Design**
- [ ] Test on real mobile device
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify landscape/portrait modes

✅ **Cross-Browser**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

## 📈 Post-Deployment Steps

1. **Share Your Site**
   - Add to LinkedIn profile
   - Update resume with URL
   - Share with network
   - Add to email signature

2. **Monitor Performance**
   - Set up Google Analytics
   - Track page views
   - Monitor load times
   - Check mobile usage

3. **Regular Updates**
   - Update experience quarterly
   - Add new projects
   - Refresh resume PDF
   - Keep content current

## 🎉 You're Live!

Once deployed, your portfolio is accessible worldwide 24/7.

**Your URL**: `https://meyyappan-muthu.github.io`

Share it with confidence! 🚀

---

**Need Help?**
- GitHub Pages Docs: https://pages.github.com
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

**Questions?**
- Check repository issues
- Review deployment logs
- Test in incognito mode
- Verify file paths and names

