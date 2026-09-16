# BUNNY — Personal Developer Portfolio

> **Developer:** Axmadjanov Ibroxim  
> **Nickname:** bunny  
> **Motto:** *"DREAM • CODE • CREATE"*  
> **Style:** Premium Dark Developer Portfolio (Black, Minimal, Futuristic, Cyber)

A high-performance personal developer portfolio built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed with an atmospheric black cyber aesthetic, interactive terminal entry gate, background Easter egg animations, and centralized configuration.

---

## 🚀 Quick Start

### 1. Requirements
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- npm or pnpm / yarn

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/bunny-portfolio.git
cd bunny-portfolio
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

### 4. Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled static assets will be in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ How to Edit Personal Information

All personal data, contact links, interests, skills, and projects are centralized in a single configuration file:
📁 **`src/data/portfolio.js`**

You **do not** need to search through React components. Changing this one file automatically updates the entire website.

```javascript
const portfolio = {
  name: "Axmadjanov Ibroxim",
  nickname: "bunny",
  status: "Not working",
  location: "Uzbekistan",
  age: "", // e.g., "18" or leave blank
  ...
};
```

---

## 📞 How to Update Contact & Social Details

Open `src/data/portfolio.js` and locate the `contact` object:

### 1. Change Phone Number
Update `phone`:
```javascript
contact: {
  phone: "+998941070713",
  ...
}
```
*Automatically updates the **CALL** (`tel:+998941070713`) and **SEND SMS** (`sms:+998941070713`) actions across the website.*

### 2. Change Telegram Username
Update `telegram` (without `@` symbol):
```javascript
contact: {
  telegram: "Ibroxim_akhmdjnv",
  ...
}
```
*Links to `https://t.me/Ibroxim_akhmdjnv`.*

### 3. Change Instagram Username
Update `instagram`:
```javascript
contact: {
  instagram: "uz.1broxim",
  ...
}
```
*Links to `https://instagram.com/uz.1broxim`.*

### 4. Change WhatsApp Number
Update `whatsapp`:
```javascript
contact: {
  whatsapp: "+998941070713",
  ...
}
```
*Automatically constructs the direct WhatsApp chat link `https://wa.me/998941070713`.*

### 5. Add or Update PUBG ID
Update `pubg`:
```javascript
contact: {
  pubg: "5123456789", // Enter your PUBG numeric ID or IGN
  ...
}
```
*If left empty, the website shows `PUBG ID — Add later`.*

### 6. Add or Update Email
Update `email`:
```javascript
contact: {
  email: "your.email@example.com",
  ...
}
```
*If left empty, the website displays `Add later`.*

---

## 📂 How to Add Projects

In `src/data/portfolio.js`, edit the `projects` array:

```javascript
projects: [
  {
    id: "project-01",
    title: "Robotic Arm Controller",
    tagline: "Autonomous 4-DOF Hardware System",
    description: "Firmware and circuit design controlling servo motors with real-time sensor feedback.",
    image: "", // Optional image URL or local asset path
    technology: ["Arduino", "Robotics", "C++"],
    githubUrl: "https://github.com/your-username/robotic-arm", // Or leave empty for 'Coming Soon'
    demoUrl: "" // Or leave empty for 'Coming Soon'
  }
]
```

---

## 🐙 How to Add GitHub Profile URL

In `src/data/portfolio.js`, set `github`:
```javascript
github: "your-github-username"
```
Or use the full link:
```javascript
github: "https://github.com/your-github-username"
```

---

## 🐍 Features & Easter Eggs

- **Initial Entry Gate:** A completely black screen where entering `BUNNY` (or pressing ENTER) triggers the cinematic Uzbek inquiry: `“Hosh, nega kirdingiz?”` before revealing the portfolio.
- **Subtle Background Snake:** A minimalist glowing white snake crawls across the screen randomly every 15–30 seconds with realistic undulating movement. Includes a subtle, gentle ambient sound (toggleable via the **SOUND ON / MUTED** switch in the navbar).
- **Dominant Hero Section:** 3D developer character wearing dark clothing with `bunny` clearly printed, an animated glowing halo ring, and a futuristic interactive smartphone.
- **Rotating Tech Words:** Orbiting display of your key passions (Robotics, App Inventor, Arduino, AI, Google AI Studio, Code, Create, Build).
- **Direct Hardware Protocols:** Instant `tel:` cellular calling and native `sms:` protocol buttons.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of BUNNY portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/bunny-portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/).
3. Click **Add New** → **Project**.
4. Import your `bunny-portfolio` repository.
5. Framework Preset will be automatically detected as **Vite**.
6. Click **Deploy**. Your site will be live with free SSL!

### Deploy to GitHub Pages
1. Install `gh-pages` (optional) or use GitHub Actions:
2. In `vite.config.ts`, set the base path if using project pages:
   ```typescript
   export default defineConfig({
     base: '/bunny-portfolio/', // or '/' if using custom domain or username.github.io
     ...
   });
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** → **Static HTML** or **Vite**.
   - Your site will deploy on every push to `main`.

---

## 📜 License
MIT License. Created for **Axmadjanov Ibroxim (bunny)**.
