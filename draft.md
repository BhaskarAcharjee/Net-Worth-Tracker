
# TO-DO :
[*] Expense & Income first 4 items show then show more transactions (clicking that will show others Tranactions)
[*] In Transactions tab all transactions will show (with filter and search)
[ ] Implement Edit option for transactions
[ ] Added User Authentication & Login-Signup
[*] Setup Asset & Libilities frontend & Backend
[ ] Create a actual dashboard of net worth (assets-liabilities) & savings (income-expense)
[ ] Create a Invesment (Stock, Crypto, other invesment) tab
[ ] Implement Profile Settings & Customizations
[ ] Deploy in Production Server

# Issues :
[ ] Handle Error message (backend error validations not showing)
[ ] Cash Inventory Notes negative value & number validations not set

# Income-Expense Json Format :
{
    "title" : "Mangos",
    "amount" : "450",
    "category" : "Salary",
    "description" : "My income",
    "date" : "10-10-2023"
}

# Expense categories:
Travel & Transport
Recharge & Bill Payments
Education
Entertainment
Food & Drink
Health & Fitness
Investment & Trading
Rent/Debt
Shopping
Home & Utilities
Money Transfer
Uncategorized

# Income categories:
Money Recieved
Investment Profit
Cashback
Gift/Vouchers
Game Money
Freelancing
Uncategorized












# CashInventory.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import Rs2000 from "../../img/Rs2000.png";
import Rs500 from "../../img/Rs500.jpg";
import Rs200 from "../../img/Rs200.jpeg";
import Rs100 from "../../img/Rs100.jpg";
import Rs50 from "../../img/Rs50.jpg";
import Rs20 from "../../img/Rs20.jpg";
import Rs10 from "../../img/Rs10.jpg";

function CashInventory() {
  const { totalBankAccount, getDenominations, updateDenominations} =
    useGlobalContext();
  const [denominations, setDenominations] = useState({
    "denomination2000": 0,
    "denomination500": 0,
    "denomination200": 0,
    "denomination100": 0,
    "denomination50": 0,
    "denomination20": 0,
    "denomination10": 0,
    "denomination5": 100,
  });

  useEffect(() => {
    getDenominations().then((data) => {
      setDenominations(data);
    });
  }, []);

  const handleDenominationChange = (denomination, value) => {
    setDenominations({ ...denominations, [denomination]: value });
  };

  const updateDenominationValues = () => {
    updateDenominations(denominations);
  };

  const calculateTotal = () => {
    return Object.keys(denominations).reduce(
      (total, denomination) =>
        total +
        (parseInt(denomination.slice(12)) || 0) *
          parseInt(denominations[denomination]),
      0
    );
  };

  return (
    <CashInventoryStyled>
      <h2 className="total-income">
        Total Cash Balance: <span>₹{totalBankAccount()}</span>
      </h2>
      <DenominationContainer>
        {Object.keys(denominations).map(
          (denomination) =>
            // Show only keys starting with denomination
            denomination.startsWith("denomination") && (
              <DenominationItem key={denomination}>
                <img
                  src={
                    denomination == "denomination2000"
                      ? Rs2000
                      : denomination == "denomination500"
                      ? Rs500
                      : denomination == "denomination200"
                      ? Rs200
                      : denomination == "denomination100"
                      ? Rs100
                      : denomination == "denomination50"
                      ? Rs50
                      : denomination == "denomination20"
                      ? Rs20
                      : denomination == "denomination10"
                      ? Rs10
                      : denomination == "denomination5"
                      ? Rs10
                      : ""
                  }
                  alt={`${denomination} Note`}
                />
                <div>
                  <span>Rs. {denomination.slice(12)} Note</span>
                  <input
                    type="number"
                    value={denominations[denomination]}
                    onChange={(e) =>
                      handleDenominationChange(denomination, e.target.value)
                    }
                  />
                  <span>Total: ₹{calculateTotal()}</span>
                </div>
              </DenominationItem>
            )
        )}
      </DenominationContainer>
      <Button
        name="Update"
        onClick={updateDenominationValues}
        bg="var(--color-green)"
        bPad="0.5rem 1rem"
        color="white"
        bRad="10px"
      />
    </CashInventoryStyled>
  );
}

const CashInventoryStyled = styled.div`
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 0.2rem !important;
    margin: 1rem 0;
    font-size: 1.5rem !important;
    gap: 0.5rem;
    span {
      font-size: 2rem !important;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  Button {
    margin-top: 0.5rem;
  }
`;

const DenominationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const DenominationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  img {
    width: 100px; /* Adjust image size as needed */
    height: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    width: 10rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
  }
  span {
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
  }
`;

export default CashInventory;




# globalcontext.js
import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [bankaccoounts, setBankAccounts] = useState([]);
  const [denominations, setDenominations] = useState([]);
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

  const totalAssets = () => {
    return totalBankAccount() + totalBalance();
  };

  const totalNetWorth = () => {
    return totalAssets() - totalExpenses();
  };

  //-------------------- Cash Inventory Denominations --------------------
  const getDenominations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-cash-inventory`);
      return response.data; // Return fetched denominations
    } catch (error) {
      setError(error.response.data.message);
      return {}; // Return empty object in case of error
    }
  };

  const updateDenominations = async (newDenominations) => {
    try {
      const response = await axios.post(`${BASE_URL}update-cash-inventory`, {
        denominations: newDenominations, // Send the updated denominations to the API
      });
      setDenominations(newDenominations); // Update the local state within the context provider
      console.log(response.data); // Log API response
    } catch (error) {
      setError(error.response.data.message);
    }
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
        totalAssets,
        totalNetWorth,
        denominations,
        getDenominations,
        updateDenominations,
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




# cashInventory.js
const CashInventorySchema = require("../models/CashInventoryModel");

exports.updateCashInventory = async (req, res) => {
  const {
    denomination2000,
    denomination500,
    denomination200,
    denomination100,
    denomination50,
    denomination20,
    denomination10,
    denomination5,
  } = req.body;

  try {
    // Update or create cash inventory entry
    const inventory = await CashInventorySchema.findOneAndUpdate(
      {},
      {
        $set: {
          denomination2000,
          denomination500,
          denomination200,
          denomination100,
          denomination50,
          denomination20,
          denomination10,
          denomination5,
        },
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Cash Inventory Updated", inventory });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getCashInventory = async (req, res) => {
  try {
    const inventory = await CashInventorySchema.findOne();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
