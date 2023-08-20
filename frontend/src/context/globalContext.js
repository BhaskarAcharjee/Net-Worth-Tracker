import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [bankaccoounts, setBankAccounts] = useState([]);
  const [error, setError] = useState(null);

  //-------------------- Incomes --------------------
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //-------------------- Expenses --------------------
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 4);
  };

  //-------------------- Bank Accounts --------------------
  const addBankAccount = async (bankAccount) => {
    const response = await axios
      .post(`${BASE_URL}add-bankaccount`, bankAccount)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getBankAccounts();
  };

  const getBankAccounts = async () => {
    const response = await axios.get(`${BASE_URL}get-bankaccounts`);
    setBankAccounts(response.data);
    console.log(response.data);
  };

  const deleteBankAccount = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-bankaccount/${id}`);
    getBankAccounts();
  };

  const totalBankAccount = () => {
    let totalBankAccount = 0;
    bankaccoounts.forEach((bankAccount) => {
      totalBankAccount = totalBankAccount + bankAccount.amount;
    });

    return totalBankAccount;
  };

  // -------------------- Return GlobalContext --------------------

  return (
    <GlobalContext.Provider
      value={{
        incomes,
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        bankaccoounts,
        addBankAccount,
        getBankAccounts,
        deleteBankAccount,
        totalBankAccount,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
