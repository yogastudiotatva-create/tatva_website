# 🚀 GitHub Pages Deployment Guide

## Quick Deployment Commands

### First Time Deployment

```bash
# 1. Make sure you're in the project directory
cd tatva_website

# 2. Update package.json homepage (DO THIS FIRST!)
# Edit package.json and change:
# "homepage": "https://YOUR_GITHUB_USERNAME.github.io/tatva_website"

# 3. Initialize git (if not already done)
git init

# 4. Add all files
git add .

# 5. Commit
git commit -m "Initial commit: Tatva Yoga Website"

# 6. Create GitHub repository (on github.com)
# Name: tatva_website
# Don't initialize with README

# 7. Add remote repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tatva_website.git

# 8. Push to main branch
git branch -M main
git push -u origin main

# 9. Deploy to GitHub Pages
npm run deploy
```

### After First Deployment (Updates)

```bash
# 1. Make your changes to the code

# 2. Test locally
npm run dev

# 3. Commit your changes
git add .
git commit -m "Update: describe your changes"
git push

# 4. Deploy updated version
npm run deploy
```

## ⚙️ Configuration Checklist

Before deploying, make sure you've updated these files:

### 1. package.json
```json
{
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/tatva_website"
}
```

### 2. vite.config.js
```javascript
export default defineConfig({
  base: '/tatva_website/',
})
```

### 3. src/main.jsx
```javascript
<BrowserRouter basename="/tatva_website">
```

## 📋 Pre-Deployment Checklist

- [ ] Added your logo to `/logo` folder
- [ ] Added images to `/pictures` folder (image1.jpg, image2.jpg, etc.)
- [ ] Updated business information in Footer and Contact pages
- [ ] Verified social media links
- [ ] Updated Google Maps embed in Contact page
- [ ] Replaced placeholder content in About page
- [ ] Added Terms & Conditions (consult legal professional)
- [ ] Updated homepage URL in package.json
- [ ] Tested locally with `npm run dev`
- [ ] Build succeeds with `npm run build`

## 🔧 Troubleshooting

### Issue: "homepage" not found error
**Solution**: Make sure your package.json has the "homepage" field with your GitHub Pages URL.

### Issue: Blank page after deployment
**Solution**: Check that the base path in vite.config.js matches your repository name.

### Issue: Images not loading
**Solution**: Make sure image paths are correct and images are in the public folder or imported properly.

### Issue: 404 errors on page refresh
**Solution**: GitHub Pages works with hash routing. Consider adding a 404.html that redirects to index.html.

## 📞 Need Help?

- Check the main README.md for detailed instructions
- Verify all configuration files are updated correctly
- Make sure you've committed and pushed all changes before deploying

## 🎉 After Successful Deployment

Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/tatva_website
```

It may take 5-10 minutes for GitHub Pages to build and publish your site.

### Enable HTTPS
GitHub Pages automatically provides HTTPS. Make sure to:
1. Go to repository Settings > Pages
2. Ensure "Enforce HTTPS" is checked

### Custom Domain (Optional)
If you want to use a custom domain (e.g., www.tatvayoga.com):
1. Add a CNAME file in the public folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings

---

**Quick Command Reference:**

- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy`
