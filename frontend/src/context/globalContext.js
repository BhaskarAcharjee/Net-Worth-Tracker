import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "https://net-worth-tracker.onrender.com/api/v1/";
// const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [bankaccoounts, setBankAccounts] = useState([]);
  const [denominations, setDenominations] = useState([]);
  const [error, setError] = useState(null);

  //-------------------- Authentication --------------------
  const login = async (
    email,
    password,
    setPasswordCorrect,
    setErrorMessage
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email,
        password,
      });

      if (response.data.message === "Login successful") {
        setPasswordCorrect(true);
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      setErrorMessage("Login failed. Please try again.");
    }
  };

  const signUp = async (
    fullName,
    email,
    password,
    confirmPassword,
    setPasswordCorrect,
    setErrorMessage
  ) => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}signup`, {
        fullName,
        email,
        password,
      });

      if (response.data.message === "Signup successful") {
        setPasswordCorrect(true);
      } else {
        setErrorMessage("User already exists");
      }
    } catch (error) {
      setErrorMessage("Server error");
    }
  };

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

  const updateBankAccount = async (id, updatedBankAccount) => {
    try {
      const response = await axios.put(
        `${BASE_URL}update-bankaccount/${id}`,
        updatedBankAccount
      );
      const updatedAccounts = bankaccoounts.map((account) => {
        if (account._id === id) {
          return response.data.bankAccount;
        }
        return account;
      });
      setBankAccounts(updatedAccounts);
      console.log("Update Response:", response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
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

  //-------------------- Cash Inventory Denominations --------------------
  const getDenominations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-cash-inventory`);
      setDenominations(response.data);
      return response.data; // Return fetched denominations
    } catch (error) {
      setError(error.response.data.message);
      return {}; // Return empty object in case of error
    }
  };

  const updateDenominations = async (newDenominations) => {
    try {
      const response = await axios.post(`${BASE_URL}update-cash-inventory`, {
        ...newDenominations, // Pass the entire updated denominations object
      });
      setDenominations(newDenominations); // Update the local state within the context provider
      console.log("API Response:", response.data); // Log API response
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const totalCashInventory = () => {
    return Object.keys(denominations).reduce(
      (total, denomination) =>
        total +
        (parseInt(denomination.slice(12)) || 0) *
          parseInt(denominations[denomination]),
      0
    );
  };

  const totalAssets = () => {
    return totalBankAccount() + totalCashInventory();
  };

  const totalNetWorth = () => {
    return totalAssets() - totalExpenses();
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
        updateBankAccount,
        deleteBankAccount,
        totalBankAccount,
        totalAssets,
        totalNetWorth,
        denominations,
        getDenominations,
        updateDenominations,
        error,
        setError,
        login,
        signUp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
