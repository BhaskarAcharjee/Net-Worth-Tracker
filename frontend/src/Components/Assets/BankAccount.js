import React from "react";
import styled from "styled-components";
import { dollar } from "../../utils/Icons";
import Button from "../Button/Button";
import SBI from "../../img/SBI.png";

function BankAccounts() {
    return (
      <BankAccountsStyled>
        <div className="bank-account-list">
          <div className="bank-account-item">
            <div className="bank-icon">
              <img src={SBI} alt="Bank Icon" />
            </div>
            <div className="bank-details">
              <h3>State Bank of India</h3>
              <p>Account Number: XXXXXXXX123</p>
              <p>IFSC Code: ABCD1234567</p>
            </div>
            <div className="amount">
              <span className="rupee-symbol">{dollar}</span>
              <input type="text" />
            </div>
            <div className="buttons">
              <Button
                name="Edit"
                className="edit-button"
                bg="var(--color-green)"
                bPad="0.5rem 1rem"
                color="white"
                bRad="10px"
              />
            </div>
            <div className="buttons">
              <Button
                name="Delete"
                className="delete-button"
                bg="var(--color-delete)"
                bPad="0.5rem 1rem"
                color="white"
                bRad="10px"
              />
            </div>
          </div>
          {/* Add more bank account items here */}
        </div>
        <Button
          name="Add Bank Account"
          className="add-account-button"
          bg="var(--color-green)"
          bPad="0.5rem 1rem"
          color="white"
          bRad="10px"
        />
      </BankAccountsStyled>
    );
  }
  
  const BankAccountsStyled = styled.div`
    .bank-account-list {
      /* Styling for the bank account list */
      .bank-account-item {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
  
        .bank-icon {
          margin-right: 1rem;
          img {
            width: 40px;
            height: 40px;
          }
        }
  
        .bank-details {
          flex: 1;
  
          h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
  
          p {
            font-size: 0.9rem;
            color: rgba(34, 34, 96, 0.6);
            margin: 0.2rem 0;
          }
        }
  
        .amount {
          display: flex;
          align-items: center;
          gap: 0.5rem;
  
          .rupee-symbol {
            font-size: 1.2rem;
            color: var(--color-primary);
          }
        }
  
        .amount {
          width: 10rem;
          margin-right: 1.5rem;
          input {
            font-family: inherit;
            font-size: inherit;
            width: 100%;
            padding: 0.5rem;
            border-radius: 5px;
            border: 2px solid #fff;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            color: rgba(34, 34, 96, 0.9);
          }
        }
  
        .buttons {
          margin-right: 0.5rem;
        }
      }
    }
  `;

export default BankAccounts;
