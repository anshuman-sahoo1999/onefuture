# Netlify CMS Setup Guide

## 🎉 Congratulations! Netlify CMS is Installed

Your website now has a powerful Content Management System that allows you to manage advisors, gallery images, and downloads without editing code.

---

## 📋 What Was Set Up

### ✅ Files Created

1. **`admin/index.html`** - CMS admin interface
2. **`admin/config.yml`** - CMS configuration
3. **`js/cms-loader.js`** - JavaScript library to load CMS content
4. **`content/advisors/`** - Advisor markdown files
5. **`content/settings/contact.json`** - Site settings

### ✅ Content Collections

- **Advisors** - Manage advisor profiles with photos and biographies
- **Gallery** - Upload and organize images with categories
- **Downloads** - Manage downloadable files and documents
- **Site Settings** - Update contact info and social media links

---

## 🚀 Deployment Steps

### Step 1: Push to Git

```bash
cd "c:\Users\Lenovo\OneDrive\Desktop\OFF Final Website - Copy"
git add .
git commit -m "Add Netlify CMS"
git push
```

### Step 2: Enable Netlify Identity

1. Go to your **Netlify Dashboard**
2. Select your site
3. Click **"Identity"** in the left sidebar
4. Click **"Enable Identity"**
5. Under **"Registration preferences"**:
   - Select **"Invite only"**
6. Under **"Services"**:
   - Click **"Enable Git Gateway"**

### Step 3: Invite Yourself as Admin

1. In the Identity tab, click **"Invite users"**
2. Enter your email address
3. Click **"Send"**
4. Check your email for the invitation
5. Click the link and set your password

### Step 4: Access the CMS

1. Go to: `https://yoursite.netlify.app/admin`
2. Log in with your credentials
3. Start managing content!

---

## 📝 How to Use the CMS

### Adding a New Advisor

1. Go to `/admin`
2. Click **"Advisors"** in the left menu
3. Click **"New Advisors"**
4. Fill in the form:
   - **Name**: Full name
   - **Title**: Professional title
   - **Photo**: Upload image (click to upload)
   - **Biography**: Full bio (supports markdown)
   - **Display Order**: Number (1, 2, 3, etc.)
   - **Active**: Toggle on/off
5. Click **"Publish"**
6. Your site will automatically rebuild!

### Adding Gallery Images

1. Click **"Gallery"** in the left menu
2. Click **"New Gallery"**
3. Fill in:
   - **Title**: Image title
   - **Image**: Upload image
   - **Caption**: Optional description
   - **Category**: Select category
   - **Date**: When photo was taken
   - **Featured**: Mark as featured
4. Click **"Publish"**

### Adding Downloads

1. Click **"Downloads"** in the left menu
2. Click **"New Downloads"**
3. Fill in:
   - **Title**: Document name
   - **Description**: What it's about
   - **File**: Upload PDF/document
   - **Category**: Select category
   - **Date**: Upload date
   - **File Size**: e.g., "2.5 MB"
4. Click **"Publish"**

### Updating Site Settings

1. Click **"Site Settings"** in the left menu
2. Click **"Contact & Social"**
3. Update:
   - Contact email
   - Phone number
   - Address
   - Social media links
   - Footer text
4. Click **"Publish"**

---

## 🔧 Local Development (Optional)

To test the CMS locally before deploying:

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Run Local Server

```bash
cd "c:\Users\Lenovo\OneDrive\Desktop\OFF Final Website - Copy"
netlify dev
```

### Access Local CMS

Open: `http://localhost:8888/admin`

---

## 💡 Tips & Best Practices

### Image Optimization

- **Advisors**: Use portrait photos (faces visible)
- **Gallery**: Recommended size: 1920x1080px
- **File size**: Keep under 500KB for fast loading

### Content Organization

- Use **Display Order** to control advisor sequence
- Use **Categories** to organize gallery and downloads
- Mark important items as **Featured**

### Workflow

1. **Draft**: Save as draft while editing
2. **Review**: Preview changes
3. **Publish**: Make live on website
4. **Update**: Edit anytime and republish

---

## 🔐 Security

- ✅ Only invited users can access `/admin`
- ✅ All changes are tracked in Git
- ✅ You can revert any change via Git history
- ✅ No database to hack - everything is files

---

## 📱 Mobile Access

You can manage content from your phone!

1. Go to `yoursite.netlify.app/admin` on mobile
2. Log in with your credentials
3. Add/edit content on the go

---

## ⚠️ Important Notes

### Job Postings

- **Job postings still use Google Sheets** (as requested)
- CMS manages everything else
- No changes to your existing GAS setup

### Automatic Deployment

- Every time you publish in CMS, Netlify rebuilds your site
- Changes appear live in 1-2 minutes
- You'll get email notifications for each deploy

### Backup

- All content is stored in your Git repository
- Netlify keeps deployment history
- You can always roll back to previous versions

---

## 🆘 Troubleshooting

### Can't access `/admin`

- Make sure you've enabled Netlify Identity
- Check that Git Gateway is enabled
- Verify you've accepted the email invitation

### Changes not appearing

- Wait 1-2 minutes for rebuild
- Check Netlify deploy log for errors
- Clear browser cache

### Upload fails

- Check file size (max 10MB)
- Ensure file format is supported
- Try a different browser

---

## 📞 Need Help?

If you encounter any issues:

1. Check the Netlify deploy log
2. Review the CMS configuration in `admin/config.yml`
3. Verify Git Gateway is enabled
4. Contact Netlify support (they're very helpful!)

---

## 🎯 Next Steps

1. ✅ Deploy to Netlify
2. ✅ Enable Identity & Git Gateway
3. ✅ Invite yourself as admin
4. ✅ Log in to `/admin`
5. ✅ Start managing content!

**Your CMS is ready to use!** 🚀
