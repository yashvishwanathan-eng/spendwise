const Transaction = require('../models/Transaction');

// GET all transactions for logged-in user
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.status(200).json(transactions);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// CREATE a new transaction
const createTransaction = async (req, res) => {
  const { title, description, amount } = req.body;
  try {
    const transaction = await Transaction.create({
      userId: req.user.id, title, description, amount,
    });
    res.status(201).json(transaction);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// UPDATE a transaction
const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Not found' });
    if (transaction.userId.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.status(200).json(updated);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// DELETE a transaction
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Not found' });
    if (transaction.userId.toString() !== req.user.id)
      return res.status(401).json({ message: 'Not authorized' });
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

module.exports = { getTransactions, createTransaction, updateTransaction, deleteTransaction };
