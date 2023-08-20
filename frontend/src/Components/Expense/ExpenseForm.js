import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  // Use a separate error state for the bank account form
  const [ExpenseFormError, setExpenseFormError] = useState("");

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (input) => (e) => {
    setInputState({ ...inputState, [input]: e.target.value });
    setExpenseFormError(""); // Clear validation errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (!title || !amount || !category || !date) {
      setExpenseFormError("Mandatory fields are required!"); // Show validation error
      return; // Don't proceed with submission
    }

    // Check for valid amount
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setExpenseFormError("Amount must be a positive number!"); // Show validation error
      return; // Don't proceed with submission
    }

    // If validation passes, add expense
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {ExpenseFormError && <p className="error">{ExpenseFormError}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Expense Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Expense Amount"}
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter the Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          className="custom-datepicker"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Utilities & Groceries</option>
          <option value="health">Health & Fitness</option>
          <option value="recharge">Recharge & Bill Payments</option>
          <option value="transfer">Money Transfer</option>
          <option value="subscriptions">Entertainment & Subscriptions</option>
          <option value="takeaways">Food & Drink</option>
          <option value="clothing">Shopping</option>
          <option value="travelling">Travel & Transport</option>
          <option value="other">Uncategorized</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add a Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Expense"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </ExpenseFormStyled>
  );
}

const ExpenseFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
    .custom-datepicker {
      width: 365px;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-delete) !important;
      }
    }
  }
`;
export default ExpenseForm;
