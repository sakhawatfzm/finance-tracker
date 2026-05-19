<img width="2854" height="1450" alt="image" src="https://github.com/user-attachments/assets/ee608308-1fd0-426a-bcf1-1b4669c442fe" /># Finance Tracker 💰

A modern full-stack Finance Tracker web application built with the MERN-style stack using **React, Node.js, Express, Prisma, PostgreSQL, and Neon DB**.

Track your:

* income
* expenses
* financial balance
* transaction history
* analytics dashboard

with a beautiful modern UI and secure authentication system.

---

# 🚀 Live Demo

## Frontend

```txt
https://your-vercel-url.vercel.app
```

## Backend API

```txt
https://your-render-url.onrender.com
```

---

# ✨ Features

- ✅ User Authentication (JWT)
- ✅ Secure Login & Registration
- ✅ Protected Routes
- ✅ Add Transactions
- ✅ Delete Transactions
- ✅ Income & Expense Tracking
- ✅ Financial Summary Dashboard
- ✅ Analytics Pie Chart
- ✅ Search & Filter Transactions
- ✅ Responsive Modern UI
- ✅ Toast Notifications
- ✅ Animated Components with Framer Motion
- ✅ PostgreSQL Database with Prisma ORM
- ✅ Full REST API Backend

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Hot Toast
* Recharts
* Framer Motion

## Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* Neon Database
* JWT Authentication
* bcrypt

---

# 📂 Project Structure

```bash
finance-tracker/
│
├── client/         # Frontend
│
├── server/         # Backend
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/finance-tracker.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside:

```bash
server/
```

Add:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 🗄️ Prisma Setup

Run migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

# ▶️ Run Project

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 📸 Screenshots
## Login Page
<img width="1640" height="1354" alt="image" src="https://github.com/user-attachments/assets/7dc056ce-7934-4dd2-a154-7a5203906457" />

## Register Page
<img width="1154" height="1290" alt="image" src="https://github.com/user-attachments/assets/20b14ad8-0094-40a9-9672-b45c2a542ffc" />


---

# 🌐 Deployment

## Frontend

Deployed on:

* Vercel

## Backend

Deployed on:

* Render

## Database

Hosted on:

* Neon PostgreSQL

---

# 🔐 Authentication Flow

```txt
User Login/Register
        ↓
JWT Token Generated
        ↓
Token Stored in LocalStorage
        ↓
Protected Routes Verified
        ↓
Secure API Access
```

---

# 📊 Database Schema

## User

* id
* name
* email
* password

## Transaction

* id
* title
* amount
* category
* type
* createdAt

---

# 🎯 Future Improvements

* Edit Transactions
* Budget Planning
* Monthly Reports
* AI Financial Insights
* Dark/Light Theme Toggle
* Recurring Transactions
* Export PDF Reports
* Advanced Analytics

---

# 👨‍💻 Author

## Md Sakhawat Hossain

Built with passion while learning full-stack development 🚀

---

# ⭐ Support

If you like this project:

⭐ Star this repository
🍴 Fork this repository
🛠️ Contribute to improvements

---

# 📜 License

This project is licensed under the MIT License.
