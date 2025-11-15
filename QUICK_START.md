# 🚀 QUICK START GUIDE

## Your Website is Ready! Here's What to Do Next

### ⚡ Super Quick Start (5 Minutes)

1. **View Your Website Locally**
   ```bash
   # The dev server is already running!
   # Open: http://localhost:5173/tatva_website/
   ```

2. **Add Your Logo** (Critical!)
   - Place your logo file in the `/logo` folder
   - Name it: `logo.png` or `logo.svg`
   - Size: 200x200px recommended

3. **Add Your Photos** (Important!)
   - Place yoga photos in the `/pictures` folder  
   - Name them: `image1.jpg`, `image2.jpg`, `image3.jpg`, etc.
   - Add at least 10 images
   - Size: 1200x800px, under 500KB each

### 📝 Essential Edits (15 Minutes)

1. **Update Contact Info**
   - Press `Ctrl+Shift+F` in VS Code
   - Search and replace:
     - `9000544195` → Your phone number
     - `info@tatvayoga.com` → Your email

2. **Update Social Media Links**
   - Files: `src/components/Header.jsx` and `Footer.jsx`
   - Replace Instagram, Facebook URLs with yours

3. **Update Google Maps**
   - File: `src/pages/Contact.jsx`
   - Replace the iframe src with your Google Maps embed link

### 🚀 Deploy to GitHub Pages (30 Minutes)

#### BEFORE You Deploy - Update This:

**File: `package.json`** (Line 8)
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/tatva_website"
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!

#### Deployment Steps:

**1. Create GitHub Repository**
- Go to: https://github.com/new
- Repository name: `tatva_website`
- Make it **Public**
- DON'T check "Initialize with README"
- Click "Create repository"

**2. Run Git Setup**
```powershell
# In VS Code terminal (or PowerShell):
./setup-git.ps1
```

**3. Connect to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/tatva_website.git
git branch -M main
git push -u origin main
```

**4. Deploy!**
```bash
npm run deploy
```

**5. Enable GitHub Pages**
- Go to: https://github.com/YOUR_USERNAME/tatva_website/settings/pages
- Source: Select `gh-pages` branch
- Click Save
- Wait 2-3 minutes

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/tatva_website
```

### ✅ Pre-Launch Checklist

Before sharing your website:

- [ ] Added real logo
- [ ] Added at least 10 yoga photos
- [ ] Updated phone number everywhere
- [ ] Updated email address
- [ ] Updated social media links
- [ ] Tested Google Maps link
- [ ] Edited About page with your story
- [ ] Checked website on phone
- [ ] All links work

### 📱 Test Your Website

**On Desktop:**
- Open http://localhost:5173/tatva_website/
- Click every menu item
- Test all buttons
- Check contact form

**On Mobile:**
- Press F12 in browser
- Click mobile icon (toggle device toolbar)
- Test navigation menu
- Check image gallery
- Verify WhatsApp button

### 🔄 Making Changes After Deployment

```bash
# 1. Make your edits in VS Code

# 2. Test locally
npm run dev

# 3. Save and deploy
git add .
git commit -m "Updated content"
git push
npm run deploy
```

### 📚 Need More Help?

Read these files in order:
1. **PROJECT_SUMMARY.md** - Overview of everything
2. **EDITING_GUIDE.md** - How to edit content
3. **DEPLOYMENT.md** - Detailed deployment steps
4. **README.md** - Complete documentation

### 🎯 Common First-Time Issues

**Issue: Blank page after deployment**
- Solution: Make sure `homepage` in package.json is correct

**Issue: Images not showing**
- Solution: Check images are in `/logo` and `/pictures` folders
- Check filenames: `image1.jpg`, `image2.jpg`, etc.

**Issue: WhatsApp button not working**
- Solution: Update phone number in `src/components/WhatsAppWidget.jsx`

### 💡 Pro Tips

1. **Always test locally first** before deploying
2. **Make small changes** and deploy frequently
3. **Take screenshots** of your local version before deploying
4. **Keep original files backed up** somewhere safe

### 🎉 You're All Set!

Your professional yoga website is ready to go live!

**Questions?** Check the documentation files or search online for "React deployment to GitHub Pages"

---

**Current Status:**
- ✅ React app created
- ✅ All pages built
- ✅ Responsive design
- ✅ Build successful
- ⏳ Waiting for your content & deployment

**Time to launch:** ~30 minutes (after adding your content)
