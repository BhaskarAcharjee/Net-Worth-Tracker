const { addBankAccount, getBankAccounts, updateBankAccount, deleteBankAccount } = require('../controllers/bankAccount');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { getCashInventory, updateCashInventory } = require('../controllers/cashInventory')

const router = require('express').Router();

router
    // Incomes
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    // Expenses
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    // bank Accounts
    .post('/add-bankaccount', addBankAccount)
    .put('/update-bankaccount/:id', updateBankAccount)
    .get('/get-bankaccounts', getBankAccounts)
    .delete('/delete-bankaccount/:id', deleteBankAccount)
    // Cash Inventory
    .post("/update-cash-inventory", updateCashInventory)
    .get("/get-cash-inventory", getCashInventory);

module.exports = router