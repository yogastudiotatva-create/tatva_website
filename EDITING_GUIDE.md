# 📝 Content Editing Guide

This guide helps you easily update the website content without technical knowledge.

## 🎯 Quick Reference: Where to Edit What

| What to Change | File Location | Line/Section |
|---------------|--------------|--------------|
| Business Name | Multiple files | Search for "Tatva Yoga" |
| Phone Number | Multiple files | Search for "9000544195" |
| Email | Multiple files | Search for "info@tatvayoga.com" |
| Address | Footer, Contact | Search for "Beeramguda" |
| Instagram Link | Header, Footer | Search for "tatvabeeramguda" |
| Facebook Link | Header, Footer | Search for "61579329730118" |
| Google Maps | Contact page | iframe src |
| About Us Content | `src/pages/About.jsx` | Look for `{/* EDITABLE */}` |
| Terms & Conditions | `src/pages/Terms.jsx` | Entire file |
| Service Descriptions | `src/pages/Services.jsx` | Service detail sections |

## 🖼️ Adding Your Images

### Logo
1. Place your logo in the `/logo` folder
2. Name it `logo.png` or `logo.svg`
3. Recommended size: 200x200px

### Gallery Images
1. Place images in the `/pictures` folder
2. Name them sequentially: `image1.jpg`, `image2.jpg`, `image3.jpg`, etc.
3. Recommended specs:
   - Format: JPG or PNG
   - Size: 1200x800px (4:3 ratio)
   - File size: Under 500KB each
   - Up to 20 images supported

## ✏️ Editing Page Content

### Home Page (`src/pages/Home.jsx`)

**Hero Section Title:**
```jsx
<h1 className="hero-title">
  Transform Your Life Through Yoga  {/* ← Edit this */}
</h1>
```

**Hero Subtitle:**
```jsx
<p className="hero-subtitle">
  Experience the perfect blend... {/* ← Edit this */}
</p>
```

### About Page (`src/pages/About.jsx`)

Look for comments like `{/* EDITABLE: ... */}` throughout the file:

```jsx
<p>
  {/* EDITABLE: Replace with your introduction */}
  Welcome to Tatva Yoga Studio...
</p>
```

**Sections to customize:**
- Our Story
- Mission Statement
- Values descriptions
- Instructor profiles
- Location details

### Services Page (`src/pages/Services.jsx`)

**Service Descriptions:**
Each service has a description block you can edit:

```jsx
<p className="service-description">
  Experience the full benefits... {/* ← Edit service description */}
</p>
```

**Pricing:**
```jsx
<p className="pricing-note">
  <strong>Pricing:</strong> Contact us for... {/* ← Edit pricing */}
</p>
```

### Contact Page (`src/pages/Contact.jsx`)

**Google Maps Embed:**
1. Get your Google Maps share link
2. Create an embed link at: https://maps.google.com/
3. Replace the iframe src (around line 120)

**Contact Information:**
```jsx
<p>Beeramguda, Hyderabad</p> {/* ← Edit address */}
<a href="tel:+919000544195">+91 9000544195</a> {/* ← Edit phone */}
```

### Terms & Conditions (`src/pages/Terms.jsx`)

Replace ALL placeholder text with your actual terms. Each section is marked with comments:

```jsx
<p>
  {/* EDITABLE: Replace with your introduction */}
  Welcome to Tatva Yoga Studio...
</p>
```

**⚠️ Important:** Consult with a legal professional for proper terms and conditions.

## 🎨 Customizing Colors

Colors are defined in `src/index.css`:

```css
:root {
  --primary: #fffbed;    /* Background, light elements */
  --secondary: #274543;  /* Headers, buttons, text */
  --accent: #97a89a;     /* Highlights, borders */
}
```

To change colors, update these hex values.

## 📱 Social Media Links

Update in **two places**:

### 1. Header (`src/components/Header.jsx`)
```jsx
<a href="https://www.instagram.com/tatvabeeramguda/">
<a href="https://www.facebook.com/profile.php?id=61579329730118">
<a href="https://wa.me/919000544195">
```

### 2. Footer (`src/components/Footer.jsx`)
Same links as above.

## 📞 WhatsApp Integration

### Current Setup
Direct WhatsApp link in `src/components/WhatsAppWidget.jsx`:

```jsx
const phoneNumber = '919000544195'  // ← Your WhatsApp number
const message = 'Hello! I would like...' // ← Default message
```

### AiSensy Integration
Replace the entire content of `WhatsAppWidget.jsx` with AiSensy's code once you have it.

## 🔄 After Making Changes

### 1. Test Locally
```bash
npm run dev
```
Open http://localhost:5173 to preview changes.

### 2. Deploy Updates
```bash
git add .
git commit -m "Updated content"
git push
npm run deploy
```

## 📋 Pre-Launch Checklist

Before making the website public:

- [ ] Replace placeholder logo with your actual logo
- [ ] Add real yoga studio photos (at least 10 images)
- [ ] Update all business contact information
- [ ] Verify social media links work
- [ ] Test Google Maps link
- [ ] Write custom About Us content
- [ ] Add instructor profiles and photos
- [ ] Get proper Terms & Conditions from legal professional
- [ ] Test contact form
- [ ] Set up AiSensy WhatsApp Business API
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Proofread all text content

## 🎯 Common Edits Step-by-Step

### Change Phone Number Everywhere

1. Open VS Code
2. Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)
3. Search for: `9000544195`
4. Replace all with your new number
5. Save all files (`Ctrl+K S`)

### Update Email Address

1. Search for: `info@tatvayoga.com`
2. Replace with your email
3. Save all files

### Change Business Name

1. Search for: `Tatva Yoga Studio`
2. Replace with your studio name
3. Save all files

## 💡 Tips

- **Always test locally** before deploying
- **Make small changes** and test incrementally
- **Keep backups** of working versions
- **Use descriptive commit messages** when saving changes
- **Check mobile view** - most users will visit on phones

## 🆘 Need Help?

If something breaks:
1. Check the browser console (F12) for errors
2. Verify your changes didn't break syntax (missing quotes, brackets)
3. Revert to last working version: `git checkout -- filename`
4. Reach out for support

---

**Remember:** Save frequently, test locally, then deploy! 🚀
