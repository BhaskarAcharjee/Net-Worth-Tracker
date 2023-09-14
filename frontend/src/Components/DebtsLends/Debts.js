import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function Debts() {
  const [debts, setDebts] = useState([
    { name: "John Doe", amount: 100, description: "Borrowed for groceries" },
    {
      name: "Alice Smith",
      amount: 50,
      description: "Borrowed for movie tickets",
    },
    // Add more dummy debts
  ]);

  return (
    <DebtsStyled>
      <h2 className="total-income">
        Total Debts Amount: <span>₹{0}</span>
      </h2>
      {/* List of debts */}
      <ul>
        {debts.map((debt, index) => (
          <li key={index}>
            {debt.name} owes <span>₹{debt.amount}</span>
            {debt.description && (
              <p>
                <span>Description:</span> {debt.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      <form>
        {/* Input fields for adding new debts */}
        <div className="input-group">
          <label htmlFor="debtor">Debtor:</label>
          <input type="text" id="debtor" placeholder="Debtor Name" />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" placeholder="Debt Amount" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            // value={description}
            placeholder="Add a Description"
            id="description"
            cols="30"
            rows="4"
            // onChange={handleInput("description")}
          ></textarea>
        </div>
        <div className="submit-btn">
          <Button
            name={"Add Debt"}
            icon={plus}
            bPad={".5rem 1rem"}
            bRad={"30px"}
            bg={"var(--color-delete"}
            color={"#fff"}
          />
        </div>
      </form>
    </DebtsStyled>
  );
}

const DebtsStyled = styled.div`
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
      color: var(--color-delete);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    .input-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
      }

      input,
      textarea {
        /* padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px; */
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
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background-color: #f8f9fa;
      padding: 0.5rem;
      margin: 0.5rem 0;
      border-radius: 5px;
      p {
        margin-top: 0.5rem;
      }
      span {
        font-weight: bold;
      }
    }
  }
`;

export default Debts;
