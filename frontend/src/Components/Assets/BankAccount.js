import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { dollar, bank } from "../../utils/Icons";
import Button from "../Button/Button";
import SBI from "../../img/SBI.png";
import { useGlobalContext } from "../../context/globalContext";
import BankAccountForm from "./BankAccountForm";

function BankAccounts() {
  const { bankaccoounts, getBankAccounts, deleteBankAccount} = useGlobalContext();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getBankAccounts();
  }, []);

  const handleDelete = (id) => {
    deleteBankAccount(id);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  }; 

  return (
    <BankAccountsStyled>
      <div className="bank-account-list">
        {bankaccoounts.map((account) => (
          <div className="bank-account-item" key={account._id}>
            <div className="bank-icon">
              <img src={SBI} alt="Bank Icon" />
            </div>
            <div className="bank-details">
              <h3>{account.name}</h3>
              <p>Account Number: {account.account}</p>
              <p>IFSC Code: {account.ifsc}</p>
            </div>
            <div className="amount">
              <span className="rupee-symbol">{dollar}</span>
              <input type="text" value={account.amount} readOnly />
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
                onClick={() => handleDelete(account._id)}
                className="delete-button"
                bg="var(--color-delete)"
                bPad="0.5rem 1rem"
                color="white"
                bRad="10px"
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        name="Add Bank Account"
        onClick={toggleForm}
        className="add-account-button"
        bg="var(--color-green)"
        bPad="0.5rem 1rem"
        color="white"
        bRad="10px"
      />
       {isFormOpen && <BankAccountForm toggleForm={toggleForm} />}
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
