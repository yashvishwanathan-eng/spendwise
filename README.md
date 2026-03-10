[Uploading README (2).md…]()
# 💸 SpendWise

A secure backend REST API for managing personal transactions, built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.

---

## 🚀 Features

- ✅ User Registration & Login
- ✅ JWT-based Authentication
- ✅ Protected Routes (only logged-in users can access)
- ✅ Create, Read, Update, Delete (CRUD) Transactions
- ✅ Password Hashing with bcrypt
- ✅ MongoDB Database Integration

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework & routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | User authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| cors | Cross-origin resource sharing |
| nodemon | Auto-restart during development |

---

## 📁 Folder Structure

```
spendwise/
│
├── config/
│   └── db.js                     # MongoDB connection
│
├── controllers/
│   ├── authController.js         # Register & Login logic
│   └── transactionController.js  # CRUD logic
│
├── middleware/
│   └── authMiddleware.js         # JWT token verification
│
├── models/
│   ├── User.js                   # User schema
│   └── Transaction.js            # Transaction schema
│
├── routes/
│   ├── authRoutes.js             # Auth endpoints
│   └── transactionRoutes.js      # Transaction endpoints
│
├── .env                          # Environment variables (not uploaded)
├── .gitignore
├── package.json
└── server.js                     # Main entry point
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yashvishwanathan-eng/spendwise.git
cd spendwise
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in the root folder**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/spendwise
JWT_SECRET=spendwise_secret_key_change_this
```

**4. Start MongoDB** (in a separate terminal)
```bash
mongod
```

**5. Run the server**
```bash
npm run dev
```

Server will run at: `http://localhost:5000`

---

## 📡 API Endpoints

### 🔓 Auth Routes (Public)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### 🔒 Transaction Routes (Protected — requires JWT token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Create a new transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

---

## 🧪 Testing with Postman

### 1. Register a User
```
POST http://localhost:5000/api/auth/register
Body (raw JSON):
{
  "name": "John",
  "email": "john@test.com",
  "password": "123456"
}
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Body (raw JSON):
{
  "email": "john@test.com",
  "password": "123456"
}
```
> Copy the `token` from the response — you need it for all transaction requests!

### 3. Create a Transaction
```
POST http://localhost:5000/api/transactions
Headers: Authorization: Bearer YOUR_TOKEN_HERE
Body (raw JSON):
{
  "title": "Electricity Bill",
  "description": "Monthly bill",
  "amount": 500
}
```

### 4. Get All Transactions
```
GET http://localhost:5000/api/transactions
Headers: Authorization: Bearer YOUR_TOKEN_HERE
```

### 5. Update a Transaction
```
PUT http://localhost:5000/api/transactions/TRANSACTION_ID
Headers: Authorization: Bearer YOUR_TOKEN_HERE
Body (raw JSON):
{
  "title": "Updated Bill",
  "amount": 600
}
```

### 6. Delete a Transaction
```
DELETE http://localhost:5000/api/transactions/TRANSACTION_ID
Headers: Authorization: Bearer YOUR_TOKEN_HERE
```

---


1. User registers → password is **hashed** with bcrypt before saving
2. User logs in → password is compared with hashed version
3. If correct → server sends back a **JWT token**
4. User sends token in every request header: `Authorization: Bearer <token>`
5. Middleware checks the token before allowing access to protected routes

---

## 👨‍💻 Author

**Yash Vishwanathan**  
GitHub: [@yashvishwanathan-eng](https://github.com/yashvishwanathan-eng)

---

## 📄 License

This project is for educational purposes as part of a second-year college project.
