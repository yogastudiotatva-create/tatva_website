# 🚀 DEPLOY TO GITHUB - STEP BY STEP

## ✅ Configuration Already Done!

Your website is pre-configured for this repository:
- **Repository**: https://github.com/yogastudiotatva-create/tatva_website.git
- **Live URL**: https://yogastudiotatva-create.github.io/tatva_website

---

## 📋 Prerequisites

### Install Git (If Not Already Installed)

1. **Download Git**:
   - Go to: https://git-scm.com/download/win
   - Download and run the installer
   - Use default settings (just click "Next")

2. **Restart VS Code** after installation

3. **Verify Git is installed**:
   ```powershell
   git --version
   ```
   Should show: `git version 2.x.x`

---

## 🚀 Deployment Steps

### Step 1: Run the Setup Script

In VS Code terminal (PowerShell):

```powershell
./setup-git.ps1
```

This script will:
- Initialize Git repository
- Configure your name and email
- Add all files
- Create initial commit
- Connect to your GitHub repository

### Step 2: Push to GitHub

```powershell
git branch -M main
git push -u origin main
```

**Note**: You may be asked to authenticate with GitHub. Use your GitHub username and personal access token (not password).

#### Creating a Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "Tatva Website Deployment"
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this as your password when pushing

### Step 3: Deploy to GitHub Pages

```powershell
npm run deploy
```

This will:
- Build your website
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to: https://github.com/yogastudiotatva-create/tatva_website/settings/pages

2. Under "Source":
   - Branch: Select **`gh-pages`**
   - Folder: **`/ (root)`**
   - Click **Save**

3. Wait 2-3 minutes for deployment

4. Your website will be live at:
   ```
   https://yogastudiotatva-create.github.io/tatva_website
   ```

---

## 🔄 Making Updates After Initial Deployment

Whenever you make changes:

```powershell
# 1. Test locally first
npm run dev

# 2. Stop the dev server (Ctrl+C)

# 3. Save and commit changes
git add .
git commit -m "Updated content"
git push

# 4. Deploy updated version
npm run deploy
```

**Changes will be live in 2-3 minutes!**

---

## 🎯 Quick Command Reference

```powershell
# View repository status
git status

# See what remote is configured
git remote -v

# View commit history
git log --oneline

# Build for production (test build)
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## ❗ Troubleshooting

### Issue: "git: command not found"
**Solution**: Install Git (see Prerequisites above)

### Issue: Authentication failed when pushing
**Solution**: 
1. Create a Personal Access Token (see instructions above)
2. Use token as password
3. Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Issue: "gh-pages" branch not available
**Solution**: Run `npm run deploy` first, then enable GitHub Pages

### Issue: 404 error on deployed site
**Solution**: 
1. Check GitHub Pages is enabled with `gh-pages` branch
2. Verify `package.json` homepage is correct
3. Clear browser cache and try again

### Issue: Images not showing on deployed site
**Solution**: 
1. Make sure images are in `/logo` and `/pictures` folders
2. Check image filenames are correct (image1.jpg, image2.jpg, etc.)
3. Redeploy: `npm run deploy`

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Can access: https://yogastudiotatva-create.github.io/tatva_website
- [ ] All pages load (Home, About, Services, Contact, Terms)
- [ ] Navigation menu works
- [ ] Images display correctly
- [ ] WhatsApp button works
- [ ] Social media links work
- [ ] Google Maps loads
- [ ] Website is mobile-friendly (check on phone)

---

## 🎉 You're Live!

Once deployed, share your website:
- **Website URL**: https://yogastudiotatva-create.github.io/tatva_website
- **Repository**: https://github.com/yogastudiotatva-create/tatva_website

### Next Steps:
1. Test thoroughly on different devices
2. Add your actual content and images
3. Set up AiSensy WhatsApp Business API
4. Share on social media
5. Add to Instagram/Facebook bio

---

**Need help?** Check the other documentation files:
- `README.md` - Complete project documentation
- `EDITING_GUIDE.md` - How to edit content
- `QUICK_START.md` - Fast track guide
