import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";

function Transactions() {
  const {
    incomes,
    expenses,
    getIncomes,
    getExpenses,
    deleteIncome,
    deleteExpense,
  } = useGlobalContext();
  const [sortType, setSortType] = useState("date");
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  // Combine all transactions and sort them according to the selected sort type
  const allTransactions = [...incomes, ...expenses];
  allTransactions.sort((a, b) => {
    if (sortType === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortType === "amount") {
      return b.amount - a.amount;
    }
  });

  const filteredTransactions =
    filterType === "all"
      ? allTransactions
      : allTransactions.filter((item) => item.type === filterType);

  const searchFilteredTransactions = searchAndFilter(
    searchTerm,
    filteredTransactions
  );

  function searchAndFilter(searchTerm, data) {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toString().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <TransactionsStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="transactions-content">
          <div className="sorting">
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="transactions">
            {searchFilteredTransactions.map((transaction) => (
              <IncomeItem
                key={transaction._id}
                id={transaction._id}
                title={transaction.title}
                description={transaction.description}
                amount={transaction.amount}
                date={transaction.date}
                type={transaction.type}
                category={transaction.category}
                // Indicator color based on type
                indicatorColor={
                  transaction.type === "income" ? "var(--color-green)" : "red"
                }
                // Delete function based on type
                deleteItem={
                  transaction.type === "income" ? deleteIncome : deleteExpense
                }
              />
            ))}
          </div>
        </div>
      </InnerLayout>
    </TransactionsStyled>
  );
}

const TransactionsStyled = styled.div`
  .transactions-content {
    display: flex;
    flex-direction: column;
    margin-top : 1rem;
    gap: 0.5rem;
  }

  .sorting {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .sorting select,
  .sorting input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid #fff;
    font-family: inherit;
    font-size: inherit;
    color: rgba(34, 34, 96, 0.9);
  }
`;

export default Transactions;
