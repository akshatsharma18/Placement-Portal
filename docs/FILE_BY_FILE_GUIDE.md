# 📂 Complete File-by-File Guide (Hinglish)

> Is guide mein project ki **har ek important file** ka exact role, purpose, inputs/outputs aur communication simple Hinglish mein explained hai.

---

## 📑 Index
1. [Backend Entry & Configuration Files](#1-backend-entry--configuration-files)
2. [Backend Database Models (`backend/models/`)](#2-backend-database-models)
3. [Backend Controllers (`backend/controllers/`)](#3-backend-controllers)
4. [Backend Routes (`backend/routes/`)](#4-backend-routes)
5. [Backend Middleware & Utils (`backend/middleware/` & `backend/utils/`)](#5-backend-middleware--utils)
6. [Frontend Entry & State Setup (`frontend/src/`)](#6-frontend-entry--state-setup)
7. [Frontend Components (`frontend/src/components/`)](#7-frontend-components)
8. [Frontend Screens (`frontend/src/screens/`)](#8-frontend-screens)
9. [Frontend Redux Actions & Reducers (`frontend/src/actions/` & `reducers/`)](#9-frontend-redux-actions--reducers)

---

## 1. Backend Entry & Configuration Files

### 📄 `backend/server.js`
- **Location:** `backend/server.js`
- **Purpose:** Yeh backend ka main driver/entry-point file hai.
- **Kya karta hai?**
  1. Express app initialize karta hai.
  2. Database connect karta hai (`connectDB()`).
  3. JSON body parser aur static `/uploads` directory setup karta hai.
  4. Sabhi API routes mount karta hai (`/api/users`, `/api/recruiters`, `/api/jobOpenings`, `/api/applications`, `/api/upload`).
  5. Port 5000 par HTTP server start karta hai.
- **Kab edit karna padega?** Jab naya API route add karna ho ya middleware (like CORS, logger) configure karna ho.

### 📄 `backend/config/db.js`
- **Location:** `backend/config/db.js`
- **Purpose:** MongoDB Database connection establish karta hai.
- **Kya karta hai?** `mongoose.connect(process.env.MONGO_URI)` use karke local ya cloud MongoDB se connect hota hai aur status console par print karta hai.

### 📄 `backend/seeder.js`
- **Location:** `backend/seeder.js`
- **Purpose:** Database ko test data se fill (seed) ya clear (destroy) karne ka script.
- **Functions:**
  - `importData()`: Pehle puraane collection delete karta hai fir 6 Students (Rahul, Ananya, Vikram, Priya, Amit, Hanshika), 5 Top Recruiters (Google, Microsoft, Amazon, Adobe, TCS), 5 Job Openings aur sample Applications create karta hai.
  - `destroyData()`: MongoDB ke saare records wipe out kar deta hai.
- **Command:** `npm run data:import` ya `npm run data:destroy`.

---

## 2. Backend Database Models (`backend/models/`)

### 📄 `backend/models/userModel.js`
- **Schema:** `userSchema`
- **Fields:** `name`, `email`, `collegeEmail`, `rollNumber`, `phone`, `isAdmin`, `resume`, `cgpa`, `tenthPercentage`, `twelfthPercentage`, `department`, `programme`, `lookingFor`, `dateOfBirth`, `verified`, `otpForEmail`, `otpForCollegeEmail`, `otpForPhone`.
- **Purpose:** Student aur Admin ka complete record aur academic profile define karta hai.

### 📄 `backend/models/recruiterModel.js`
- **Schema:** `recruiterSchema`
- **Fields:** `name`, `email`, `mobileNumber`, `phoneNumber`, `nameOftheCompany`, `designation`, `officeAddress`, `modeOfRecruitment`, `verified`, `verifiedByAdmin`, `otpForEmail`, `otpForMobileNumber`.
- **Purpose:** Company HR/Recruiter ka profile aur admin verification flag store karta hai.

### 📄 `backend/models/jobOpeningModel.js`
- **Schema:** `jobOpeningSchema`
- **Fields:** `recruiter` (Ref: Recruiter), `nameOftheCompany`, `jobDesignation`, `typeOfJobOpening` (FTE / Summer Internship), `tentativeJoiningDate`, `jobDescription`, `bTechCTC`, `mTechCTC`, eligibility criteria flags (`bTechIT`, `bTechECE`, `cgpa`, `tenthPercentage`, `twelfthPercentage`), selection rounds flags (`aptitudeTest`, `onlineTechnicalTest`, `technicalInterviews`, `hrInterviews`), `verifiedByAdmin`, `image`.
- **Purpose:** Har company ki job opening aur requirements store karta hai.

### 📄 `backend/models/applicationModel.js`
- **Schema:** `applicationSchema`
- **Fields:** `user` (Ref: User), `jobOpening` (Ref: JobOpening), round status integers (`aptitudeTest`, `onlineTechnicalTest`, `groupDiscussion`, `technicalInterviews`, `hrInterviews`).
- **Round Status Codes:**
  - `0`: Not taking place / Not applicable
  - `1`: Pending / Not yet taken
  - `2`: Cleared / Pass (Green check)
  - `3`: Rejected / Fail (Red cross)

---

## 3. Backend Controllers (`backend/controllers/`)

### 📄 `backend/controllers/userController.js`
- **Main Functions:**
  - `generateOTPForLogin`: Email verify karta hai aur 6-digit OTP generate karke database mein save karta hai aur terminal console par log karta hai.
  - `authUserWithOTP`: Email aur OTP verify karta hai (`otp == user.otpForEmail || otp == '123456'`), authentic hone par JWT Token return karta hai.
  - `registerUser`: Naya student account create karta hai.
  - `getUserProfile` & `updateUserProfile`: Logged-in student ka profile fetch/update karta hai.
  - `getUsers` & `deleteUser`: Admin ke liye student list aur delete functionality provide karta hai.

### 📄 `backend/controllers/recruiterController.js`
- **Main Functions:**
  - `authRecruiterWithOTP`: Recruiter ka OTP-based login handle karta hai.
  - `registerRecruiter`: Naya recruiter sign up karta hai.
  - `getRecruiterProfile` & `updateRecruiterProfile`: Recruiter profile manage karta hai.
  - `getRecruiters` & `verifyRecruiterAsAdmin`: Admin ke liye recruiter verification handle karta hai.

### 📄 `backend/controllers/jobOpeningController.js`
- **Main Functions:**
  - `getJobOpenings`: Keyword search aur pagination ke saath active job openings return karta hai.
  - `getJobOpeningById`: Specific job opening ka full details fetch karta hai.
  - `createJobOpening`: Recruiter dwara nayi job post create karta hai.
  - `updateJobOpening` & `deleteJobOpening`: Job edit aur delete karta hai.
  - `verifyJobOpening`: Admin job opening ko publicly live karne ke liye approve karta hai.

### 📄 `backend/controllers/applicationController.js`
- **Main Functions:**
  - `createApplication`: Student jab job ke liye Apply click karta hai tab application document create karta hai.
  - `getMyApplications`: Logged-in student ki sabhi applied companies aur status fetch karta hai.
  - `getApplicationById`: Single application ka complete round-by-round status aur student resume fetch karta hai.
  - `getJobOpeningApplications`: Recruiter ko uske job opening ke saare applicants ki list deta hai.
  - `updateApplication`: Recruiter jab kisi student ka round status pass/fail karta hai tab data update karta hai.

---

## 4. Backend Routes (`backend/routes/`)

- `userRoutes.js`: Maps `/api/users` endpoints (`/login`, `/register`, `/profile`, `/`).
- `recruiterRoutes.js`: Maps `/api/recruiters` endpoints (`/login`, `/register`, `/profile`, `/verify`).
- `jobOpeningRoutes.js`: Maps `/api/jobOpenings` endpoints (`/`, `/:id`, `/:id/verify`, `/:id/comments`).
- `applicationRoutes.js`: Maps `/api/applications` endpoints (`/`, `/myapplications`, `/:id`, `/jobOpening/:id`).
- `uploadRoutes.js`: Multer use karke resumes aur company logos ko `/uploads` directory mein upload karta hai.

---

## 5. Backend Middleware & Utils

### 📄 `backend/middleware/authMiddleware.js`
- `protect`: Request header se `Bearer <JWT_TOKEN>` extract karke verify karta hai. Token valid hone par `req.user` attach karta hai.
- `protectRecruiter`: Recruiter tokens verify karta hai aur `req.recruiter` attach karta hai.
- `admin`: Check karta hai ki logged-in user `isAdmin === true` hai ya nahi.

### 📄 `backend/utils/generateToken.js`
- `jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })` use karke securely signed JWT token banata hai.

### 📄 `backend/utils/otp.js`
- 6-digit random number generator (`otp-generator` package use karke).

### 📄 `backend/utils/mail.js`
- EmailJS configuration handle karta hai. Agar keys present nahi hain toh automatic fallback simulation mode mein console par OTP print karta hai taaki local testing bina rukawat ke chale.

---

## 6. Frontend Entry & State Setup (`frontend/src/`)

### 📄 `frontend/src/App.js`
- **Purpose:** React Router setup karta hai.
- **Routes Defined:**
  - `/` -> `UserDashboardScreen` (Job Feed)
  - `/login` -> `LoginScreen` (Select Role)
  - `/student/login` -> `LoginUserScreen`
  - `/recruiter/login` -> `LoginRecruiterScreen`
  - `/student/register` -> `UserRegisterScreen`
  - `/recruiter/register` -> `RecruiterRegisterScreen`
  - `/student/applications` -> `UserApplicationListScreen`
  - `/application/:id` -> `ApplicationScreen`
  - `/jobOpening/:id` -> `JobOpeningScreen`
  - `/admin/userlist` -> `UserListScreen`
  - `/admin/recruiterList` -> `RecruiterListScreen`

### 📄 `frontend/src/store.js`
- Redux Store jisme saare reducers (userLogin, jobOpeningList, applicationListMy, recruiterLogin, etc.) combine hote hain aur localStorage se initial session state load hoti hai.

---

## 7. Frontend Components (`frontend/src/components/`)

- `Header.js`: Top navigation bar jisme Logo, Role Based Menus, Sign In aur Register dropdowns hote hain.
- `Footer.js`: Bottom copyright bar (`Copyright © Placement LIET`).
- `JobOpening.js`: Card component jo job title, company name, CTC aur status display karta hai.
- `Loader.js`: Loading spinner animation jab backend se data fetch ho raha hota hai.
- `Message.js`: Bootstrap alert banner jo success ya error messages display karta hai.
- `FormContainer.js`: Centered responsive container layout form screens ke liye.
- `Paginate.js`: Multi-page navigation numbers handle karta hai.
- `FeedSearchBox.js`: Search bar jo company name ya role filter karne ke liye use hota hai.

---

## 8. Frontend Screens (`frontend/src/screens/`)

- `LoginScreen.js`: Main gateway jahan user Student / Recruiter Login aur Registration choose karta hai.
- `LoginUserScreen.js` & `LoginRecruiterScreen.js`: Email input -> OTP input -> Sign In execution.
- `UserRegisterScreen.js`: Student signup form (Roll No, CGPA, Branch, Resume upload, etc.).
- `RecruiterRegisterScreen.js`: Recruiter signup form (Company, Designation, Office Address).
- `UserDashboardScreen.js`: Students ke liye live job feed jisme search aur filters hote hain.
- `JobOpeningScreen.js`: Job ki full details, eligibility checklist, aur "Apply" button.
- `UserApplicationListScreen.js`: Student ki applied jobs ki table.
- `ApplicationScreen.js`: Single application ka live tracker (Aptitude -> Tech Test -> GD -> Tech Interview -> HR) + PDF Resume viewer.
- `RecruiterDashboardScreen.js`: Recruiter ke dwara post ki gayi job openings ki list.
- `ApplicantScreen.js`: Recruiter view jahan specific opening ke sabhi applicants ko grade aur pass/fail kiya jata hai.
- `UserListScreen.js` & `RecruiterListScreen.js`: Admin views to verify, approve, and delete users/recruiters.

---

## 9. Frontend Redux Actions & Reducers

- `userActions.js` / `userReducers.js`: Student login, register, profile update, admin user fetch handle karta hai.
- `recruiterActions.js` / `recruiterReducers.js`: Recruiter login, registration, verification, profile update manage karta hai.
- `jobOpeningActions.js` / `jobOpeningReducers.js`: Jobs list, single job details, create job, delete job, verify job handle karta hai.
- `applicationActions.js` / `applicationReducers.js`: Job apply, my applications fetch, applicant grading manage karta hai.
