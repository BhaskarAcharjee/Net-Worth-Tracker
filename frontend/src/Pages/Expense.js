import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { InnerLayout } from "../styles/Layouts";
import IncomeItem from "../Components/Transactions/IncomeItem";
import Button from "../Components/Button/Button";
import ExpenseForm from "../Components/Expense/ExpenseForm";

function Expenses() {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  const [showAllExpenses, setShowAllExpenses] = useState(false);
  const displayExpenses = showAllExpenses ? expenses : expenses.slice(0, 4);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>₹{totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {displayExpenses.length === 0 ? ( // Check if there are no expenses
              <p className="no-expenses-message">No expenses to display.</p>
            ) : (
              displayExpenses.map((income) => {
                const { _id, title, amount, date, category, description, type } =
                  income;
                console.log(income);
                return (
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="red"
                    deleteItem={deleteExpense}
                  />
                );
              })
            )}
            {!showAllExpenses && expenses.length > 4 && (
              <Button
                name="Show More"
                onClick={() => setShowAllExpenses(true)}
                bg="red"
                bPad="0.5rem 1rem"
                color="white"
                bRad="10px"
              />
            )}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  margin-top: -15px;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
  .no-expenses-message {
    font-size: 1.5rem;
    color: gray;
    text-align: center;
  }
`;

export default Expenses;
