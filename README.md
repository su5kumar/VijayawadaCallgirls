# Velas Companions - Next.js App Router

Welcome to the premium Next.js codebase for **Velas Companions**, the elite executive companions and VIP social hosting agency in Vijayawada. This codebase is fully responsive, mobile-first, and highly optimized for Local SEO.

## 🚀 How to Run Locally

Since Node.js/NPM is not currently active in your system's PATH, you will need to install Node.js first.

### Step 1: Install Node.js
1. Download the LTS version of Node.js from [nodejs.org](https://nodejs.org/).
2. Run the installer and ensure that **"Add to PATH"** is selected.
3. Restart your terminal/command prompt to register the `node` and `npm` commands.

### Step 2: Install Dependencies
Open your terminal (PowerShell or Command Prompt), navigate to this directory, and run:
```bash
npm install
```

### Step 3: Run Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)** to preview the fully functional application!

---

## 📁 Codebase Directory Map

- **`app/layout.js`:** Root layout managing [Outfit](https://fonts.google.com/specimen/Outfit) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) Google fonts, extensive metadata SEO parameters, and Google JSON-LD schema microdata for Local Business and FAQs.
- **`app/page.js`:** Single-page assembler triggering Intersection Observer scroll animation triggers.
- **`app/globals.css`:** Premium global stylesheet managing colors (luxury dark/gold/rose-gold gradients), glassmorphism styles, form error feedback states, and full viewport breakpoints.
- **`components/`:** Fully modular React component library:
  - `Header.jsx`: Sticky navigation bar with mobile drawer toggle states.
  - `Hero.jsx`: Luxurious call-to-actions, credibility badges, and scroll wheels.
  - `About.jsx`: Discreet brand storytelling and core trust cards.
  - `Services.jsx`: Curated VIP services grids (social, travel, dinner).
  - `TrustBanner.jsx`: Discretion statistics and privacy guarantee cards.
  - `Gallery.jsx`: Portfolio profiles with client-side interactive filter controls.
  - `Testimonials.jsx`: Star rating arrays and anonymous executive endorsements.
  - `Faq.jsx`: Transition-based FAQ accordion dropdowns.
  - `BookingForm.jsx`: Secure React form validation and centered glass success modal.
  - `Footer.jsx`: Service directories, privacy disclaimers, and floating WhatsApp buttons.

---

## 📈 Local SEO & Optimization
This codebase has been optimized from the ground up:
* **Google Fonts Optimization:** Handled via `next/font` which downloads assets during build time, preventing layout shifting and font-rendering latency.
* **Semantic Schema Microdata:** Pre-configured JSON-LD structured data in layout headers to maximize local maps indexing in Benz Circle, Ring Road, and surrounding Vijayawada hubs.
* **DiscreetCopywriting:** 100% compliant with standard AI policies, presenting high-end, elite executive companionship, dinner dates, and travel hosting.

---

## 🧩 Sanity CMS Setup

This project now includes a Sanity Studio scaffold for managing the website content.

### What was added
* `studio/` — Sanity Studio configuration and schema definitions
* `lib/sanity.js` — Sanity client helper for Next.js
* `lib/queries.js` — Example GROQ queries for site settings and page content
* `.env.example` — Sanity environment variable template
* `package.json` script: `npm run studio`

### Local CMS setup
1. Install root dependencies:
```bash
npm install
```
2. Install studio dependencies:
```bash
cd studio
npm install
```
3. Copy env examples:
```bash
cp .env.example .env.local
cp studio/.env.example studio/.env
```
4. Add your Sanity project settings in `.env.local` and `studio/.env`.
5. Run the studio:
```bash
cd studio && npm run dev
```

### Next.js content integration
Use the `lib/sanity.js` client and `lib/queries.js` queries inside pages or components to fetch CMS-managed data.

### Deploying CMS and site
* Deploy the Next.js app to Vercel as usual.
* Manage Sanity Studio locally or deploy it to a separate static host if needed.
