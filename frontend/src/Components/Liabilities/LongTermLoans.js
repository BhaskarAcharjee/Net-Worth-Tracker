import React from "react";
import styled from "styled-components";
import { plus } from "../../utils/Icons";
import Button from "../Button/Button";

function LongTermLoans() {
  // Dummy data for long term loans
  const longTermLoansData = [
    {
      id: 1,
      loanType: "Home Loan",
      loanAmount: 50000,
      interestRate: 5.5,
      loanTerm: "20 years",
    },
    {
      id: 2,
      loanType: "Student Loan",
      loanAmount: 20000,
      interestRate: 4.0,
      loanTerm: "10 years",
    },
    // Add more dummy data
  ];

  return (
    <LongTermLoansStyled>
      <h3>Long Term Loans</h3>
      <h2 className="total-income">
        Total Long Term Loans Amount: <span>₹{0}</span>
      </h2>
      {/* Display dummy long term loans */}
      <ul className="loan-list">
        {longTermLoansData.map((loan) => (
          <li key={loan.id}>
            <span>
              <b>Loan Type:</b> {loan.loanType}
            </span>
            <span>
              <b>Loan Amount:</b> ₹{loan.loanAmount}
            </span>
            <span>
              <b>Interest Rate:</b> {loan.interestRate}%
            </span>
            <span>
              <b>Loan Term:</b> {loan.loanTerm}
            </span>
          </li>
        ))}
      </ul>

      {/* Form for adding new long term loans */}
      <form>
        <div className="input-group">
          <label htmlFor="loanType">Loan Type:</label>
          <input type="text" id="loanType" placeholder="Enter loan type" />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Loan Amount:</label>
          <input type="number" id="amount" placeholder="Enter loan amount" />
        </div>
        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate:</label>
          <input
            type="number"
            id="interestRate"
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <label htmlFor="loanTerm">Loan Term:</label>
          <input type="text" id="loanTerm" placeholder="Enter loan term" />
        </div>
        <div className="submit-btn">
          <Button
            name={"Add Long Term Loan"}
            icon={plus}
            bPad={".5rem 1rem"}
            bRad={"30px"}
            bg={"var(--color-delete"}
            color={"#fff"}
          />
        </div>
      </form>
    </LongTermLoansStyled>
  );
}

const LongTermLoansStyled = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
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
  .loan-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      background-color: #f8f9fa;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      span {
        flex: 1;
      }
    }
  }

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

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default LongTermLoans;
