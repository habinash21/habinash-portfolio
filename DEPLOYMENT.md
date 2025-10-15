# 🚀 Portfolio Deployment Guide

## Free Hosting Options for Your Portfolio

### 1. **Vercel (Recommended) - Easiest Option**

#### Steps:
1. **Create GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/habinash-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Node.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

#### Vercel Benefits:
- ✅ Automatic deployments on Git push
- ✅ Custom domain support
- ✅ SSL certificate included
- ✅ Global CDN
- ✅ Generous free tier

---

### 2. **Netlify - Alternative Option**

#### Steps:
1. **Prepare for Netlify:**
   - Your current setup works with Netlify
   - Netlify supports Node.js with serverless functions

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm install`
   - Publish directory: Leave empty (handled by server.js)

#### Netlify Benefits:
- ✅ Easy drag-and-drop deployment
- ✅ Form handling
- ✅ Branch previews
- ✅ Custom domains

---

### 3. **Railway - Full-Stack Option**

#### Steps:
1. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect and deploy

#### Railway Benefits:
- ✅ Full-stack support
- ✅ Database support
- ✅ Environment variables
- ✅ $5 monthly credit

---

### 4. **Render - Simple Option**

#### Steps:
1. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New Web Service"
   - Connect your repository
   - Build command: `npm install`
   - Start command: `npm start`

#### Render Benefits:
- ✅ Simple setup
- ✅ Automatic SSL
- ✅ Custom domains
- ✅ Good free tier

---

## 🎯 **Recommended Deployment Steps:**

### **Option 1: Vercel (Easiest)**

1. **Upload to GitHub:**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/habinash-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Your portfolio is live! 🎉

### **Option 2: Netlify (Alternative)**

1. **Upload to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - Build command: `npm install`
     - Publish directory: (leave empty)
   - Click "Deploy site"

---

## 🔧 **Environment Setup (if needed):**

If you need environment variables, create a `.env` file:
```env
PORT=3000
NODE_ENV=production
```

---

## 📱 **After Deployment:**

1. **Test your live site**
2. **Share your portfolio URL**
3. **Add to your resume/LinkedIn**
4. **Set up custom domain (optional)**

---

## 🆓 **Free Tier Limits:**

- **Vercel**: 100GB bandwidth, unlimited deployments
- **Netlify**: 100GB bandwidth, 300 build minutes
- **Railway**: $5 credit monthly
- **Render**: 750 hours runtime monthly

---

## 🎉 **Your Portfolio Will Be Live At:**
- Vercel: `https://habinash-portfolio.vercel.app`
- Netlify: `https://habinash-portfolio.netlify.app`
- Railway: `https://habinash-portfolio.railway.app`
- Render: `https://habinash-portfolio.onrender.com`

Choose the option that works best for you! Vercel is recommended for the easiest setup.
