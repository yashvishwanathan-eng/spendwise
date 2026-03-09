const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getTransactions, createTransaction,
  updateTransaction, deleteTransaction,
} = require('../controllers/transactionController');

// GET + POST /api/transactions  (both require token)
router.route('/')
  .get(protect, getTransactions)
  .post(protect, createTransaction);

// PUT + DELETE /api/transactions/:id  (both require token)
router.route('/:id')
  .put(protect, updateTransaction)
  .delete(protect, deleteTransaction);

module.exports = router;
