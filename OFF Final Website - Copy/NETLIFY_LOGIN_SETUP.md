# Netlify CMS - Production Login Setup Guide

## 🔐 Setting Up Login Credentials on Netlify

Follow these steps **after deploying** your site to Netlify.

---

## Step-by-Step Instructions

### Step 1: Deploy to Netlify

#### Option A: Connect Git Repository (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**:
   ```bash
   git add .
   git commit -m "Add Netlify CMS"
   git push
   ```

2. **Go to Netlify Dashboard**:
   - Visit: https://app.netlify.com/
   - Click **"Add new site"** → **"Import an existing project"**

3. **Connect your Git provider**:
   - Choose GitHub/GitLab/Bitbucket
   - Authorize Netlify
   - Select your repository

4. **Configure build settings**:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` or `/` (root)
   - Click **"Deploy site"**

5. **Wait for deployment** (1-2 minutes)

#### Option B: Manual Deploy (Drag & Drop)

1. Go to Netlify Dashboard
2. Drag your entire project folder to the deploy area
3. Wait for deployment

---

### Step 2: Add Custom Domain (Optional)

1. In Netlify Dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `onefuture.in`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

**Your CMS will be at**: `https://yourdomain.com/admin`

---

### Step 3: Enable Netlify Identity

1. In your site dashboard, click **"Identity"** in the left sidebar
2. Click the **"Enable Identity"** button
3. Identity is now active! ✅

---

### Step 4: Configure Identity Settings

1. Still in the **Identity** section, click **"Settings and usage"**

2. **Registration preferences**:
   - Click **"Edit settings"**
   - Select **"Invite only"** (recommended for security)
   - Click **"Save"**

3. **External providers** (optional):
   - You can enable Google, GitHub, GitLab login
   - For now, skip this (email/password is fine)

4. **Enable Git Gateway**:
   - Scroll down to **"Services"** section
   - Click **"Enable Git Gateway"**
   - This allows CMS to commit to your repository
   - ✅ Git Gateway is now active!

---

### Step 5: Create Your Admin Account

1. In the **Identity** tab, click **"Invite users"**

2. Enter **your email address** (the one you want to use for login)

3. Click **"Send"**

4. **Check your email inbox**:
   - You'll receive an email from Netlify
   - Subject: "You've been invited to join [your-site]"

5. **Click the invitation link** in the email

6. You'll be taken to a page that says **"Complete your signup"**

7. **Set your password**:
   - Enter a strong password
   - Confirm the password
   - Click **"Sign up"** or **"Accept invitation"**

8. ✅ **Your account is created!**

---

### Step 6: Log In to CMS

1. Go to: `https://yourdomain.com/admin`
   - Or: `https://your-site-name.netlify.app/admin`

2. You'll see a **"Login with Netlify Identity"** button

3. Click it

4. Enter your credentials:
   - **Email**: The email you were invited with
   - **Password**: The password you just set

5. Click **"Log in"**

6. 🎉 **You're in!** You can now manage content!

---

## 👥 Adding More Users (Team Members)

To give others access to the CMS:

1. Go to Netlify Dashboard → **Identity**
2. Click **"Invite users"**
3. Enter their email address
4. They'll receive an invitation email
5. They set their own password
6. They can log in at `/admin`

**Roles**:
- All users have the same permissions by default
- Everyone can create, edit, and publish content

---

## 🔑 Managing Credentials

### Change Your Password

1. Go to `https://yourdomain.com/admin`
2. Log in
3. Click your profile icon (top right)
4. Click **"Change password"**
5. Enter old and new password
6. Save

### Reset Forgotten Password

1. Go to `https://yourdomain.com/admin`
2. Click **"Forgot password?"**
3. Enter your email
4. Check email for reset link
5. Click link and set new password

### Remove a User

1. Go to Netlify Dashboard → **Identity**
2. Find the user in the list
3. Click the **"..."** menu
4. Click **"Delete user"**

---

## 📊 Summary

| Step | What You Do | Where |
|------|-------------|-------|
| 1 | Deploy site | Netlify Dashboard |
| 2 | Enable Identity | Site Settings → Identity |
| 3 | Enable Git Gateway | Identity → Services |
| 4 | Invite yourself | Identity → Invite users |
| 5 | Check email | Your inbox |
| 6 | Set password | Invitation link |
| 7 | Log in | `yourdomain.com/admin` |

---

## ✅ Your Login Credentials

After completing the setup:

- **URL**: `https://yourdomain.com/admin`
- **Email**: The email you invited yourself with
- **Password**: The password you set when accepting the invitation

**Remember**: 
- You create the password yourself (Netlify doesn't set it)
- You can change it anytime
- You can reset it if forgotten
- Free tier supports up to 1,000 users

---

## 🆘 Troubleshooting

### "Login button doesn't appear"

- Check that Netlify Identity is enabled
- Check that Git Gateway is enabled
- Clear browser cache and try again

### "Invalid credentials"

- Make sure you accepted the invitation email
- Try resetting your password
- Check if you're using the correct email

### "Can't invite users"

- Make sure Identity is enabled
- Check your Netlify plan (free tier: 1,000 users)
- Verify email address is correct

---

## 🎯 Next Steps After Login

Once logged in, you can:

1. ✅ Add/edit advisors
2. ✅ Upload gallery images
3. ✅ Manage downloads
4. ✅ Update site settings
5. ✅ Invite team members

Every change you publish will automatically rebuild your site!

---

**That's it! Your CMS is now secure and ready for production use!** 🚀
