# 🛠️ Troubleshooting & Common Errors Guide (Hinglish)

> **Agar kabhi koi error aaye, toh ghabraiye mat! Niche diye gaye solutions ko follow karein:**

---

## 1. Error: `listen EADDRINUSE: address already in use :::5000` ya `Port 3000`

### 🔍 Problem Kyun Aati Hai?
Pehle se chal raha Node process background mein port 5000 ya 3000 ko hold karke baitha hota hai.

### 💡 Solution (Windows PowerShell):
1. Port 5000 par chal rahe process ko dhoondein aur kill karein:
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force
```
2. Port 3000 ke liye:
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```
3. Fir se run karein: `npm run dev`

---

## 2. Error: `Invalid OTP`

### 🔍 Problem Kyun Aati Hai?
Student ya Recruiter login screen par "Get OTP" click karne par system ek naya dynamic OTP generate karta hai, jabki user puraana code type kar raha hota hai.

### 💡 Solution:
- Development mode mein **`123456`** master OTP permanently configured hai! Aap hamesha **`123456`** enter karke login kar sakte hain.
- Ya fir apne backend terminal console par dekhein, wahan live OTP print hota hai:
  ```text
  ========================================
  [DEV OTP] Login OTP for Student (email): 514261
  ========================================
  ```

---

## 3. Error: `Unable to send OTP`

### 🔍 Problem Kyun Aati Hai?
EmailJS API keys `.env` mein absent hone par pehle error throw hota tha.

### 💡 Solution:
Humne `backend/utils/mail.js` ko auto-fallback mode mein configure kar diya hai. Agar EmailJS keys missing hon, toh system console par simulated email print karta hai aur application bina rukawat ke normal proceed karti hai.

---

## 4. Error: `MongooseServerSelectionError / MongoDB connection failed`

### 🔍 Problem Kyun Aati Hai?
MongoDB local service start nahi hui hai.

### 💡 Solution:
1. Windows search bar mein type karein `Services`.
2. List mein **MongoDB Server** dhoondein aur Right-click karke **Start** par click karein.
3. Ya PowerShell (Run as Administrator) mein run karein:
   ```powershell
   Start-Service -Name MongoDB
   ```

---

## 5. Error: `npm ERR! peer dep missing` (During Frontend Install)

### 🔍 Problem Kyun Aati Hai?
React 18 ke saath kuch older packages (like bootstrap tables) strict peer checks karte hain.

### 💡 Solution:
Hamesha `--legacy-peer-deps` flag ke saath install karein:
```bash
npm install --prefix frontend --legacy-peer-deps
```

---

## 6. Error: Missing Image / PDF 404

### 🔍 Problem Kyun Aati Hai?
`uploads/` folder mein company image ya sample resume missing hone par.

### 💡 Solution:
`uploads/sample_company.png` aur `uploads/sample_resume.pdf` repository ke `uploads/` folder mein present hone chahiye. Yeh files already configure kar di gayi hain!
