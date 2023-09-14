import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function Lends() {
  const [lends, setLends] = useState([
    { name: "Mary Johnson", amount: 75 },
    { name: "Bob Wilson", amount: 30 },
    // Add more dummy lends
  ]);

  return (
    <LendsStyled>
      <form>
        {/* Input fields for adding new lends */}
        <div className="input-group">
          <label htmlFor="lender">Lender:</label>
          <input type="text" id="lender" placeholder="Lender Name" />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" placeholder="Lent Amount" />
        </div>
        {/* <button>Add Lend</button> */}
      </form>
      <div className="submit-btn">
        <Button
          name={"Add Lend"}
          icon={plus}
          bPad={".5rem 1rem"}
          bRad={"30px"}
          bg={"var(--color-accent-green"}
          color={"#fff"}
        />
      </div>

      {/* List of lends */}
      <ul>
        {lends.map((lend, index) => (
          <li key={index}>
            {lend.name} lent ₹{lend.amount}
          </li>
        ))}
      </ul>
    </LendsStyled>
  );
}

const LendsStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
      }

      input {
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

    /* button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      cursor: pointer;
    } */
  }

  .submit-btn {
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      background-color: #f8f9fa;
      padding: 0.5rem;
      margin: 0.5rem 0;
      border-radius: 5px;
    }
  }
`;

export default Lends;
