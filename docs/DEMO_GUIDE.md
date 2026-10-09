# 🎯 Live Demonstration & Viva Guide (Hinglish)

> **College Teachers, Evaluators ya Interviewers ko Project Demonstrate Karne Ka Step-by-Step Script**

---

## 🎬 5-Minute Perfect Demo Script

Agar teacher bolein: *"Beta, apna project chala ke dikhao aur explain karo"*, toh exactly yeh sequence follow karein:

---

### ⏱️ Act 1: Project Introduction (1 Minute)
**Kya bolna hai:**
> *"Good morning Sir/Ma'am. Hamara project **LIET Campus Placement Portal** hai jo MERN Stack (MongoDB, Express.js, React.js, Node.js) par banaya gaya hai.  
> Yeh portal college ke placement cell ko digitalize karta hai. Isme 3 primary user roles hain: **Student**, **Recruiter**, aur **Placement Admin**."*

---

### ⏱️ Act 2: Student Flow Demonstrate Karein (2 Minutes)
1. Browser mein **`http://localhost:3000`** open karein.
2. Top right mein **Sign In** click karke **Student Sign In** select karein.
3. **Email:** `hanshika.tyagi@liet.ac.in` daalein aur **Get OTP** click karein.
4. **OTP:** `123456` daalein aur **Sign In** click karein.
5. **Feed Screen:** Teacher ko dikhayein ki live company openings (Google, Microsoft, Amazon, Adobe, TCS) cards ke form mein dikh rahi hain with CTC, location and role.
6. Kisi bhi company (e.g. Microsoft) par click karke criteria checklist (CGPA, Branch, Selection Rounds) dikhayein aur **Apply** button click karke dikhayein.
7. Top menu se **My Applications** open karein:
   - Round-wise live status tracker dikhayein (Aptitude Test, Technical Test, GD, Technical Interview, HR Interview).
   - In-browser **Resume PDF Viewer** dikhayein jahan uploaded resume load hota hai bina download kiye.

---

### ⏱️ Act 3: Recruiter Flow Demonstrate Karein (1.5 Minutes)
1. Top right se **Log Out** karein.
2. **Recruiter Sign In** par jayein.
3. **Email:** `recruiter@google.com` daalein, OTP: `123456`.
4. Recruiter Dashboard mein Google ki job opening select karein aur **Applicants** view open karein.
5. Hanshika Tyagi aur Rahul Sharma ki application open karke kisi round ko `Pending` se **`Pass`** ya **`Fail`** karke **Submit** karein.
6. Teacher ko batayein ki backend par status update ho gaya hai aur student ko live reflect ho jayega.

---

### ⏱️ Act 4: Admin Controls Dikhayein (30 Seconds)
1. Log out karke **Student Sign In** mein Admin account login karein:
   - **Email:** `admin@liet.ac.in`, OTP: `123456`.
2. Header mein **Admin Controls** dropdown open karke dikhayein:
   - **Students List**: Sabhi registered students ka verified status.
   - **Recruiters List**: Companies ko approve / verify karne ke admin rights.

---

## ❓ Frequently Asked Viva Questions & Perfect Answers

#### Q1: Authentication kaise implement kiya hai?
> **Answer:** *"Sir, humne passwordless OTP authentication implement kiya hai jo stateless JWT (JSON Web Tokens) ke through secure session maintain karta hai. Token local storage mein rehta hai aur Authorization header ke through verified hota hai."*

#### Q2: Database mein relationships kaise handle hui hain?
> **Answer:** *"Sir, Mongoose Schema References (ObjectIds) use kiye hain. Jaise Application schema mein `user: ObjectId(ref: 'User')` aur `jobOpening: ObjectId(ref: 'JobOpening')` connected hain jise `.populate()` method se fetch kiya jata hai."*

#### Q3: State management ke liye kya use hua hai?
> **Answer:** *"Sir, humne Redux aur Redux Thunk middleware use kiya hai taaki async API calls handle ho sakein aur global state across components seamlessly synchronize rahe."*

#### Q4: Agar email service down ho toh kya project ruk jayega?
> **Answer:** *"No Sir, humne resilient development fallback mechanism banaya hai jisme mock email simulation console par print hoti hai aur predefined master OTP testing ko uninterrupted rakhta hai."*
