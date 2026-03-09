const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();    // Load .env variables
connectDB();        // Connect to MongoDB

const app = express();

app.use(cors());            // Allow cross-origin requests
app.use(express.json());    // Parse incoming JSON

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'SpendWise API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
