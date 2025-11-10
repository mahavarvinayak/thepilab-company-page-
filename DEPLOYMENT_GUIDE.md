# Deployment Guide - The Π Lab

This project is configured for deployment on **Vercel**, **Netlify**, or **Render**. Choose based on your preference!

---

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repository
4. Vercel will auto-detect the Next.js app
5. Click "Deploy"

**Configuration:** `vercel.json` (auto-handled by Vercel)

**Deployment URL:** Will be provided by Vercel (e.g., `https://the-pi-lab.vercel.app`)

---

### Option 2: Netlify

**Steps:**
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git" → Connect GitHub
4. Select your repository
5. Build settings will auto-detect (configured in `netlify.toml`)
6. Click "Deploy"

**Configuration:** `netlify.toml` (includes build and deploy settings)

**Deployment URL:** Will be provided by Netlify (e.g., `https://the-pi-lab.netlify.app`)

---

### Option 3: Render

**Steps:**
1. Push your code to GitHub
2. Visit [render.com](https://render.com)
3. Click "New +" → Web Service
4. Connect your GitHub account and select repository
5. Fill in the settings:
   - **Name:** the-pi-lab
   - **Environment:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
6. Click "Create Web Service"

**Configuration:** `render.yaml` (auto-detected deployment config)

**Deployment URL:** Will be provided by Render (e.g., `https://the-pi-lab.onrender.com`)

---

## 🔧 Pre-Deployment Checklist

- [ ] All environment variables are set up (copy `.env.example` to `.env.local`)
- [ ] Test locally: `npm run dev`
- [ ] Build test: `npm run build`
- [ ] No console errors or TypeScript issues
- [ ] All API endpoints are working
- [ ] Images and assets load correctly
- [ ] Favicon displays properly
- [ ] All buttons redirect correctly

---

## 📝 Environment Variables

1. Copy `.env.example` to `.env.local` (for local development)
2. On deployment platform, set the same variables in their environment settings
3. For this app, at minimum:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_APP_URL=your-deployment-url`

---

## 🐛 Troubleshooting Deployment

### Build Fails
- Clear cache and rebuild
- Check Node version (should be 18+ or 20+)
- Ensure all dependencies are listed in `package.json`

### Pages Not Loading
- Check if redirects are properly configured (Next.js handles this automatically)
- Verify environment variables are set

### Images Not Showing
- Check that image URLs are publicly accessible
- External URLs from postimg.cc should work fine
- For local images in `public/`, they're already deployed

### Favicon Missing
- Vercel, Netlify, and Render all support `public/favicon.svg`
- Ensure `favicon.svg` exists in the `public/` folder

---

## 📊 Deployment Comparison

| Feature | Vercel | Netlify | Render |
|---------|--------|---------|--------|
| Next.js Optimized | ✅ Best | ✅ Good | ✅ Good |
| Free Tier | ✅ Yes | ✅ Yes | ✅ Yes (limited) |
| Auto-deploy on Git Push | ✅ Yes | ✅ Yes | ✅ Yes |
| Preview Deployments | ✅ Yes | ✅ Yes | ✅ Yes |
| Environment Variables | ✅ Easy | ✅ Easy | ✅ Easy |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Ease of Setup | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 Recommended Next Steps

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Π Lab website"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/the-pi-lab.git
   git branch -M main
   git push -u origin main
   ```

3. **Choose Your Platform** and follow the deployment steps above

4. **Monitor Deployment**:
   - Check build logs for any errors
   - Test all features on the live URL
   - Share your deployed site! 🎉

---

## 📞 Support

For platform-specific help:
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Render:** https://render.com/docs

---

**Last Updated:** November 10, 2025

Good luck with your deployment! 🚀
