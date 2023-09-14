import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dollar, trash } from "../../utils/Icons";
import Button from "../Button/Button";
import BankLogo from "../../Images/bank-logo.png";
import { useGlobalContext } from "../../context/globalContext";
import BankAccountForm from "./BankAccountForm";

function BankAccounts() {
  const {
    bankaccoounts,
    getBankAccounts,
    updateBankAccount,
    deleteBankAccount,
    totalBankAccount,
  } = useGlobalContext();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [CashInventoryError, setCashInventoryError] = useState("");

  useEffect(() => {
    getBankAccounts();
  }, []);

  const handleDelete = (id) => {
    deleteBankAccount(id);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleUpdateAmount = async (id, updatedAmount) => {
    if (updatedAmount < 0) {
      setCashInventoryError("Negative amounts are not allowed");
      return;
    }

    setCashInventoryError(""); // Clear the error message if the input is valid

    const updatedBankAccount = {
      ...bankaccoounts.find((account) => account._id === id),
      amount: updatedAmount,
    };

    await updateBankAccount(id, updatedBankAccount);
  };

  return (
    <BankAccountsStyled>
      <h2 className="total-income">
        Total Account Balance: <span>₹{totalBankAccount()}</span>
      </h2>
      {CashInventoryError && <p className="error">{CashInventoryError}</p>}
      {bankaccoounts.length === 0 ? ( // Check if there are no bank accounts
        <p className="no-accounts-message">
          No Bank account details to display.
        </p>
      ) : (
        <div className="bank-account-list">
          {bankaccoounts.map((account) => (
            <div className="bank-account-item" key={account._id}>
              <div className="bank-icon">
                <img src={BankLogo} alt="Bank Icon" />
              </div>
              <div className="bank-details">
                <h3>{account.name}</h3>
                <p>Account Number: {account.account}</p>
                <p>IFSC Code: {account.ifsc}</p>
              </div>
              <div className="amount">
                <span className="rupee-symbol">{dollar}</span>
                <input
                  type="text"
                  value={account.amount}
                  onChange={(e) => {
                    handleUpdateAmount(account._id, e.target.value); // Call the update function on input change
                  }}
                />
              </div>
              <div className="buttons">
                <Button
                  icon={trash}
                  bPad={"1rem"}
                  bRad={"50%"}
                  bg={"var(--primary-color"}
                  color={"#fff"}
                  iColor={"#fff"}
                  hColor={"var(--color-green)"}
                  onClick={() => handleDelete(account._id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
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
  .bank-account-list {
    /* Styling for the bank account list */
    .bank-account-item {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      .bank-icon {
        margin-right: 1rem;
        img {
          width: 65px;
          height: 60px;
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
  .no-accounts-message {
    font-size: 1.5rem;
    color: gray;
    text-align: center;
  }
`;

export default BankAccounts;
