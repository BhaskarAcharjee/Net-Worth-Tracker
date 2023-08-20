const { addBankAccount, getBankAccounts, deleteBankAccount } = require('../controllers/bankAccount');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/add-bankaccount', addBankAccount)
    .get('/get-bankaccounts', getBankAccounts)
    .delete('/delete-bankaccount/:id', deleteBankAccount)

module.exports = router