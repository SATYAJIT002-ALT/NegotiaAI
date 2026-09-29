# NegotiaAI 🚀

An AI-powered e-commerce platform where users can dynamically negotiate prices directly with intelligent seller agents. Built with React (Vite), Node.js, Express, and MongoDB.

## 🌟 Live Demo

- **Frontend (Live Website):** [https://negotia-ai.vercel.app](https://negotia-ai.vercel.app)
- **Backend (API):** [https://negotiaai.onrender.com/api](https://negotiaai.onrender.com/api)

## ✨ Features

- **AI Negotiations:** Bargain directly with our smart AI seller to find your perfect price.
- **Dynamic Dashboard:** Real-time metrics on completed deals and buyer savings.
- **Category & Price Filtering:** Interactive product catalog with 150+ seeded items.
- **Authentication & Cart:** Secure JWT-based user login, cart persistence, and wishlisting.

## 🛠 Tech Stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, Zustand, Framer Motion, Axios
**Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, Bcrypt

## 🚀 Running Locally

1. Clone the repository
2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up a `.env` file in the `backend` folder with `MONGO_URI` and `JWT_SECRET`.
4. Run the backend: `npm run dev` in the `backend` directory.
5. Run the frontend: `npm run dev` in the `frontend` directory.
