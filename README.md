# 🎓 LIET Training & Placement Cell Portal (MERN Stack)

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-v18-blue.svg)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Local%2FAtlas-brightgreen.svg)](https://www.mongodb.com)
[![Express](https://img.shields.io/badge/Express-REST%20API-lightgrey.svg)](https://expressjs.com)

A full-stack modern MERN placement portal that connects students, recruiters, and placement coordinators for smooth, transparent campus recruitment drives.

---

## 📚 Complete Beginner-Friendly Documentation Suite

Is project ko easily samajhne aur demonstrate karne ke liye dedicated guides banayi gayi hain:

| Guide | Description |
|---|---|
| 📖 **[Project Explained (Hinglish)](docs/PROJECT_EXPLAINED.md)** | Project kya hai, problem kya solve karta hai, real-life analogies, diagrams. |
| 🗂️ **[File-by-File Guide](docs/FILE_BY_FILE_GUIDE.md)** | Har backend aur frontend file ka deep explanation in simple terms. |
| 🚀 **[Quick Setup Guide](docs/SETUP_GUIDE.md)** | Zero-to-hero installation, environment config, and seeder guide. |
| 🛠️ **[Troubleshooting Guide](docs/TROUBLESHOOTING.md)** | Common errors (Port 5000 in use, Invalid OTP, Mongo connection) and solutions. |
| 🎯 **[Demo & Viva Guide](docs/DEMO_GUIDE.md)** | 5-minute presentation script and top viva questions with answers. |

---

## ⚡ Quick Start (3 Steps)

### 1. Configure Environment
Copy `.env.example` to `.env` in the root folder:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/placementportal
JWT_SECRET=placementportal_jwt_secret_key_2026
```

### 2. Install & Seed Data
```bash
# Install dependencies
npm install
npm install --prefix frontend --legacy-peer-deps

# Seed dummy students, companies, job openings & applications
npm run data:import
```

### 3. Start Application
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔑 Quick Login Credentials (OTP: `123456`)

- **Student:** `hanshika.tyagi@liet.ac.in` (or `student@liet.ac.in`)
- **Recruiter:** `recruiter@google.com` (or `recruiter@microsoft.com`)
- **Admin:** `admin@liet.ac.in`
