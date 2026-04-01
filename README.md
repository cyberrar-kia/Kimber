# Graded Interiors — Website

A premium, fully responsive one-page website for **Graded Interiors** by Kimber — transitional interior design for heritage and period homes, based in Plymouth, UK.

Built to a professional standard using **Next.js 14**, **Tailwind CSS**, and component-based architecture. Ready for instant deployment to Vercel.

---

## ✦ Project Structure

```
graded-interiors/
├── app/
│   ├── layout.js          # Root layout — fonts, metadata, SEO
│   ├── page.js            # Main page — assembles all sections
│   └── globals.css        # Global styles, animations, utility classes
├── components/
│   ├── Navbar.jsx         # Sticky nav — transparent → solid, hamburger menu
│   ├── Hero.jsx           # Fullscreen hero — Ken Burns image, staggered animation
│   ├── About.jsx          # Kimber intro — two-column, scroll reveal
│   ├── Services.jsx       # 6-card service grid — dark background, hover lift
│   ├── Portfolio.jsx      # Masonry gallery — zoom + overlay on hover
│   ├── Testimonials.jsx   # Auto-play slider — dots, arrows, 4 testimonials
│   ├── LoreBuilt.jsx      # The House That Lore Built feature banner
│   ├── Contact.jsx        # Full booking form — success state animation
│   ├── Footer.jsx         # Logo, links, social icons, copyright
│   └── ScrollReveal.jsx   # Intersection Observer — triggers .visible class
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── vercel.json
└── package.json
```

---

## 🚀 Deploy to Vercel — Step by Step

### 1. Prerequisites
- [Node.js 18+](https://nodejs.org/) installed locally
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier works perfectly)

---

### 2. Set Up Locally

```bash
# Clone or extract this project folder, then:
cd graded-interiors

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the full site.

---

### 3. Push to GitHub

> **Critical:** You must be INSIDE the project folder (where `package.json` lives) when you run these commands — NOT in a parent folder. If `ls` shows `app/`, `components/`, and `package.json` you're in the right place.

```bash
# Make sure you're inside the project folder — you should see app/, components/, package.json
ls
# Expected output: app  components  jsconfig.json  next.config.js  package.json  ...

# Initialise a git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit — Graded Interiors website"

# Create a new repo on GitHub (go to github.com → New repository → name it 'graded-interiors')
# Then connect and push — replace YOUR_USERNAME:
git remote add origin https://github.com/YOUR_USERNAME/graded-interiors.git
git branch -M main
git push -u origin main
```

After pushing, verify on GitHub that `app/`, `components/`, and `package.json` appear **directly** in the repo root — not inside a subfolder. If you see a folder called `graded-interiors` at the root, you pushed from the wrong directory. Delete the repo, `cd graded-interiors`, and push again.

---

### 4. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New → Project"**
3. Select **"Import Git Repository"** and find `graded-interiors`
4. Vercel will auto-detect Next.js — no configuration needed
5. Click **"Deploy"**

Your site will be live at `https://graded-interiors.vercel.app` in ~60 seconds.

---

### 5. Connect a Custom Domain (e.g. gradedinteriors.co.uk)

1. In Vercel → Project → **Domains** → Add `gradedinteriors.co.uk`
2. Vercel will show you DNS records to add
3. Log into your domain registrar (e.g. Hostinger)
4. Add the provided **A record** and **CNAME** in your DNS settings
5. Wait up to 24–48 hours for propagation (usually much faster)

---

## ✦ Switching to next/font (Recommended for Production)

The layout currently uses CSS `@import` for Google Fonts so it builds in offline environments. On Vercel, for optimal performance, switch to `next/font`:

In `app/layout.js`, replace the current font setup with:

```js
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});
```

And remove the `@import` line at the top of `globals.css`.

---

## ✦ Setting Up the Contact Form

The contact form currently shows a success state after a simulated delay. To make it actually send emails, integrate with one of these:

### Option A — Formspree (Easiest, free tier available)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your form endpoint URL
3. In `components/Contact.jsx`, replace the `setTimeout` mock with:

```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState),
});
if (response.ok) setSubmitted(true);
```

### Option B — Resend (Developer-friendly)
1. Sign up at [resend.com](https://resend.com)
2. Create an API route at `app/api/contact/route.js`
3. Use `@resend/node` to send emails from the form

---

## ✦ Customisation Guide

| What to change | Where |
|---|---|
| Portfolio images | Replace `picsum.photos` seeds in `Portfolio.jsx` with real project photos |
| Testimonials | Edit the `testimonials` array in `Testimonials.jsx` |
| Services copy | Edit the `services` array in `Services.jsx` |
| About text | Edit `About.jsx` paragraph content |
| Hero headline | Edit `Hero.jsx` h1 content |
| Brand colours | Update CSS variables in `globals.css` and `tailwind.config.js` |
| Social links | Update `href` values in `Contact.jsx` and `Footer.jsx` |
| SEO metadata | Update the `metadata` object in `app/layout.js` |

---

## ✦ Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS
- **Fonts** — Cormorant Garamond (serif) + DM Sans (body)
- **Images** — `next/image` with Picsum Photos placeholders
- **Animations** — CSS keyframes + Intersection Observer API
- **Deployment** — Vercel (zero-config)

---

*Built with soul. Made for heritage. — Kimber ✦*
