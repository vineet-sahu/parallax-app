
# 🌌 Parallax Scroll — Full Landing Page Showcase

A **Next.js + Strapi** powered full landing page experience featuring **smooth parallax scrolling animations** using **Framer Motion**.  
This project demonstrates modern front-end animation techniques combined with a headless CMS backend — perfect for creative agencies, portfolios, or showcase websites.

---

## 🧩 Tech Stack

### Frontend — [`parallax-showcase`](./parallax-app/parallax-showcase)
- **Next.js 14** (React 18, App Router)
- **Framer Motion** for parallax and scroll animations  
- **Tailwind CSS** for styling  
- **TypeScript** for maintainable code  
- **Deployed easily on Vercel**

### Backend — [`parallax-cms`](./parallax-app/parallax-cms)
- **Strapi v5** (Headless CMS)
- **REST API** for content delivery
- **SQLite / PostgreSQL** support  
- Ideal for managing showcase content (hero, sections, images, testimonials, etc.)

---

## 🗂️ Project Structure

```
Parallax-Scroll--Full-Landing-Page-Showcase/
│
├── parallax-app/
│   ├── parallax-showcase/     # Next.js frontend
│   └── parallax-cms/          # Strapi backend
│
└── README.md
```

---

## ⚙️ Requirements

- **Node.js** ≥ 20  
- **npm** ≥ 9  
- **Strapi CLI** (optional, for admin control)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vineet-sahu/parallax-app.git
cd parallax-app
```

### 2️⃣ Install dependencies

#### Frontend
```bash
cd parallax-showcase
npm install
```

#### Backend
```bash
cd ../parallax-cms
npm install
```

---

## ▶️ Running the Application

You’ll need **both servers** running simultaneously.

### Start the Backend (Strapi)
```bash
cd parallax-cms
npm run dev
```
> Strapi will start at **http://localhost:1337**

### Start the Frontend (Next.js)
```bash
cd ../parallax-showcase
npm run dev
```
> Next.js app will start at **http://localhost:3000**

Make sure the frontend `.env` file points to the backend API URL:
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

---

## 🧠 Features

✅ **Framer Motion Parallax Animations**  
✅ **CMS-driven Content via Strapi**  
✅ **SEO-friendly Next.js pages**  
✅ **Fully responsive Tailwind UI**  
✅ **Easily extendable section structure**

---

## 🧱 Folder Highlights

| Directory | Description |
|------------|--------------|
| `parallax-showcase/src/components` | Reusable UI + animated components |
| `parallax-showcase/src/sections` | Page sections (Hero, About, Work, etc.) |
| `parallax-cms/src/api` | Strapi collection types and controllers |
| `parallax-cms/config` | Server & database configuration |

---

## 🧰 Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### Backend (`.env`)
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
```

---

## 📜 License

MIT License © 2025 — Open for personal and educational use.
