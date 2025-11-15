# Tatva Yoga Studio Website

A professional, minimalistic website for Tatva Yoga Studio built with React.js, featuring responsive design, modern UI, and easy deployment to GitHub Pages.

![Color Palette](https://via.placeholder.com/800x100/fffbed/274543?text=Primary+%23fffbed+|+Secondary+%23274543+|+Accent+%2397a89a)

## 🎨 Features

- **Modern & Minimalistic Design** - Clean Canva-inspired layout with ample white space
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Color Palette**:
  - Primary: `#fffbed` (60% - Background, light elements)
  - Secondary: `#274543` (30% - Headers, buttons, text)
  - Accent: `#97a89a` (10% - Highlights, borders)
- **Pages**:
  - Home with hero section and service preview
  - About Us (editable placeholder content)
  - Services (In-studio, Online, Diet Plans)
  - Contact with form and Google Maps
  - Terms & Conditions (editable placeholder)
- **Components**:
  - Responsive navigation with mobile menu
  - Image gallery (1 image on mobile, 3 on desktop)
  - WhatsApp Business integration ready
  - Social media links (Instagram, Facebook, WhatsApp)
  - Footer with business information

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- GitHub account

## 🚀 Quick Start

### 1. Clone or Download the Repository

```bash
cd tatva_website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your Content

#### **Logo**
Place your logo file in the `/logo` folder:
- Recommended: PNG or SVG format
- Suggested size: 200x200px or similar
- Update the filename reference in `src/components/Header.jsx` if needed

#### **Images**
Add your yoga studio images to the `/pictures` folder:
- Name them: `image1.jpg`, `image2.jpg`, etc.
- Recommended size: 1200x800px (4:3 ratio)
- Formats: JPG, PNG, or WebP
- The gallery component will automatically load up to 20 images

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your website locally.

## 📝 Customization Guide

### Update Business Information

1. **Contact Details** - Edit in:
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`

2. **Social Media Links** - Update URLs in:
   - `src/components/Header.jsx`
   - `src/components/Footer.jsx`

3. **About Us Content** - Edit:
   - `src/pages/About.jsx` (look for `{/* EDITABLE */}` comments)

4. **Terms & Conditions** - Edit:
   - `src/pages/Terms.jsx` (replace all placeholder text)

5. **Google Maps** - Update the map embed URL in:
   - `src/pages/Contact.jsx` (line with iframe src)
   - Replace with your actual Google Maps share link

### WhatsApp Business API (AiSensy) Integration

The website is ready for AiSensy WhatsApp Business API integration:

**Location**: `src/components/WhatsAppWidget.jsx`

**Integration Options**:

1. **Script Method** (Easiest):
   ```html
   <!-- Add AiSensy script to public/index.html before </body> -->
   <script src="https://your-aisensy-widget-url.js"></script>
   ```

2. **Component Method**:
   - Replace the content in `WhatsAppWidget.jsx` with AiSensy's widget code
   - Follow AiSensy's React integration documentation

3. **Current Setup**:
   - Direct WhatsApp link with pre-filled message
   - Works immediately without additional setup
   - Floating button in bottom-right corner

**Required for AiSensy Approval**:
- ✅ Complete business description (About page)
- ✅ Clear service/product pages
- ✅ Contact information displayed
- ✅ Professional design
- ✅ Mobile-friendly
- ✅ Fast loading

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `tatva_website` (or any name you prefer)
3. Don't initialize with README (we already have one)

### Step 2: Update Configuration

Edit `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/tatva_website"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

Also update `vite.config.js` base path:

```javascript
base: '/tatva_website/',
```

And `src/main.jsx` basename:

```javascript
<BrowserRouter basename="/tatva_website">
```

### Step 3: Initialize Git & Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Tatva Yoga Website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tatva_website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your website (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select branch: `gh-pages`
4. Click **Save**

Your website will be live at: `https://YOUR_GITHUB_USERNAME.github.io/tatva_website`

## 🔄 Update & Redeploy

After making changes:

```bash
# Test locally first
npm run dev

# When ready, deploy updates
npm run deploy
```

## 📱 Testing

### Local Testing

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Performance Optimization

The website includes:
- Lazy loading for images
- Code splitting with React Router
- Optimized CSS with minimal dependencies
- Responsive images
- Efficient rendering

## 📂 Project Structure

```
tatva_website/
├── public/
├── logo/              # Your logo files
├── pictures/          # Your gallery images
├── src/
│   ├── components/    # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppWidget.jsx
│   │   └── ImageGallery.jsx
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Terms.jsx
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies & scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Design Guidelines

- **Spacing**: Consistent use of spacing variables
- **Typography**: System fonts for fast loading
- **Colors**: Stick to the defined palette
- **Accessibility**: ARIA labels, keyboard navigation
- **Mobile-First**: Responsive breakpoints at 768px and 480px

## 📞 Support

For questions or issues:
- **Email**: info@tatvayoga.com
- **Phone**: +91 9000544195
- **Location**: Beeramguda, Hyderabad

## 📄 License

© 2025 Tatva Yoga Studio. All rights reserved.

## 🔐 Security Note

Before going live:
1. Update all placeholder content
2. Add real Terms & Conditions (consult legal professional)
3. Set up proper form handling/backend if needed
4. Configure SSL/HTTPS through GitHub Pages
5. Test all links and functionality

## 🚀 Next Steps After Deployment

1. **Google Search Console**: Submit your sitemap
2. **Analytics**: Add Google Analytics or similar
3. **SEO**: Add meta descriptions and optimize content
4. **Social Media**: Share your website link
5. **AiSensy**: Complete WhatsApp Business API setup
6. **Content**: Replace all placeholder text with real content
7. **Images**: Add professional photos of your studio
8. **Testing**: Test on multiple devices and browsers

---

**Built with ❤️ for Tatva Yoga Studio**
