import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function BankAccountForm({ toggleForm }) {
  const { addBankAccount, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    name: "",
    amount: "",
    account: "",
    ifsc: "",
  });

  const { name, amount, account, ifsc } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBankAccount(inputState);
    toggleForm(); // Close form after submit
    setInputState({
      name: "",
      amount: "",
      account: "",
      ifsc: "",
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Bank Account Name"
          onChange={handleInput("name")}
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name="amount"
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <input
          value={account}
          type="text"
          name="account"
          placeholder="Account Number"
          onChange={handleInput("account")}
        />
      </div>
      <div className="input-control">
        <input
          value={ifsc}
          type="text"
          name="ifsc"
          placeholder="IFSC Code"
          onChange={handleInput("ifsc")}
        />
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Account"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent-green"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
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
        background: var(--color-green) !important;
      }
    }
  }
`;

export default BankAccountForm;
