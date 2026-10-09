# 🚀 Step-by-Step Setup Guide (Beginner-Friendly)

> **Zero Programming Knowledge Required!**  
> Bas niche diye gaye steps ko 1-by-1 follow karein aur aapka project 2 minute mein chalne lagega.

---

## 📋 Prerequisites (System Requirements)

Pehle check karein ki aapke computer mein yeh do software installed hain:
1. **Node.js (v16 ya higher)**: Terminal mein `node -v` run karke check karein. (Agar nahi hai toh [nodejs.org](https://nodejs.org) se download karein).
2. **MongoDB**: Local MongoDB Server ya MongoDB Compass installed aur running hona chahiye (Default port: `27017`).

---

## ⚡ Quick Start (In 3 Easy Steps)

### Step 1: Environment File Setup (`.env`)
Project root folder mein `.env` file banao (ya `.env.example` ko copy karke `.env` rename karo):

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/placementportal
JWT_SECRET=placementportal_jwt_secret_key_2026
```

---

### Step 2: Install Dependencies
Agar aap pehli baar project setup kar rahe hain, terminal mein yeh commands run karein:

```bash
# 1. Backend dependencies install karein (Root directory mein)
npm install

# 2. Frontend dependencies install karein
npm install --prefix frontend --legacy-peer-deps
```

---

### Step 3: Seed Dummy Data (Students, Companies & Jobs)
Database mein ready-made demo accounts aur companies daalne ke liye:

```bash
npm run data:import
```

> **Console par output dikhai dega:**  
> `MonogoDB Connected: 127.0.0.1`  
> `Multi-Company Dummy Data Imported Successfully!`

---

### Step 4: Start the Full Project (1 Single Command)

```bash
npm run dev
```

Yeh command simultaneously 2 servers start karti hai:
- **Backend API**: `http://localhost:5000`
- **Frontend UI**: `http://localhost:3000`

---

## 🌐 Application Open Karein

Browser open karein aur type karein:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔑 Ready-Made Demo Accounts

Aapko naya account banane ki zaroorat nahi hai, yeh accounts ready hain (Har account ka OTP **`123456`** hai):

| Role | Email | Password / OTP | Description |
|---|---|---|---|
| **Student** | `hanshika.tyagi@liet.ac.in` | `123456` | B.Tech IT Student (Pre-applied to Google & Adobe) |
| **Student** | `student@liet.ac.in` | `123456` | Rahul Sharma (B.Tech IT) |
| **Recruiter** | `recruiter@google.com` | `123456` | Google Technical Hiring Lead |
| **Recruiter** | `recruiter@microsoft.com` | `123456` | Microsoft Talent Acquisition |
| **Admin** | `admin@liet.ac.in` | `123456` | T&P Cell Administrator |

---

## 🛑 Project Stop Kaise Karein?
Terminal window mein press karein:
`Ctrl + C` aur fir `Y` type karke Enter karein.
