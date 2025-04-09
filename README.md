# 🚗 CarGo – Car Explorer Web App

CarGo is a React-based car browsing platform that allows users to explore, filter, wishlist, and simulate buying cars using mock data based on Indian car models and pricing.

---

## 🔧 Tech Stack

- React + Vite
- Tailwind CSS
- React Router DOM
- Lucide Icons
- Framer Motion (scroll animations)
- LocalStorage for Wishlist

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cargo-website.git
cd cargo-website

2. Install Dependencies
npm install
3. Start the Development Server
npm run dev
Open http://localhost:5173 in your browser to view the app.

Image Setup

Place your images in:
public/images/
Use this path format in mockData.js:
image: "/images/carname.jpg"


Available Pages

/ → Car listing and filters

/car/:id → Car detail page

/wishlist → View wishlisted cars

/buy/:id → Simulated purchase page

/auth → Login / Signup


