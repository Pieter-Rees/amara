# Amara Hoeve - Static Build Deployment Guide

## 📦 Package Contents

This zip file contains the complete static website for Amara Hoeve:
- **File**: `amara-hoeve-static-build.zip` (4.4 MB)
- **Contents**: All HTML, CSS, JavaScript, images, and assets needed for deployment

## 🚀 Deployment Options

### 1. **Vercel** (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Drag and drop the zip file or upload the `out/` folder contents
5. Deploy automatically - your site will be live in minutes!

### 2. **Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the zip file or upload the `out/` folder contents
4. Your site will be live instantly with a custom domain

### 3. **GitHub Pages**
1. Create a new repository on GitHub
2. Extract the zip file
3. Upload the `out/` folder contents to your repository
4. Enable GitHub Pages in repository settings
5. Your site will be available at `https://username.github.io/repository-name`

### 4. **AWS S3 + CloudFront**
1. Create an S3 bucket
2. Extract the zip file
3. Upload the `out/` folder contents to S3
4. Configure the bucket for static website hosting
5. Optionally add CloudFront for global CDN

### 5. **Traditional Web Hosting**
1. Extract the zip file
2. Upload the `out/` folder contents to your web server
3. Ensure your server is configured to serve static files
4. Your site will be live on your domain

## 🌐 Custom Domain Setup

### For Vercel/Netlify:
1. Add your custom domain in the hosting platform settings
2. Update DNS records to point to the hosting platform
3. SSL certificate will be automatically provided

### For Traditional Hosting:
1. Point your domain to your web server
2. Configure SSL certificate (Let's Encrypt recommended)
3. Update DNS records

## 📋 What's Included

### ✅ **All Pages**
- Home page with hero section and overview
- Over Ons (About Us) page
- Boerencamping (Farm Camping) page
- Wonder Yurt page
- Galerij (Gallery) page
- Tarieven (Rates) page
- Contact page
- 404 error page

### ✅ **Features**
- **Mobile Navigation**: Fully functional with toggle and animations
- **Responsive Design**: Works perfectly on all devices
- **Lazy Loading**: Sections load when in viewport
- **Dynamic Footer**: Shows current year (2025)
- **Gallery**: Interactive photo gallery with modal
- **Contact Forms**: Ready for integration with backend services

### ✅ **Assets**
- All images from the gallery
- Optimized CSS and JavaScript bundles
- Web fonts and icons
- Static assets and media files

## 🔧 Technical Details

- **Framework**: Next.js 15.5.4 with static export
- **Styling**: Tailwind CSS with custom components
- **Bundle Size**: ~106 kB First Load JS
- **Total Size**: 5.4 MB (4.4 MB compressed)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📞 Support

If you need help with deployment or have questions about the website:
- **Email**: pieter@amarahoeve.nl
- **Phone**: 06-48606075

## 🎉 Ready to Deploy!

Your Amara Hoeve website is ready for production deployment. Simply choose your preferred hosting platform and follow the deployment steps above.

**Good luck with your launch!** 🚀
