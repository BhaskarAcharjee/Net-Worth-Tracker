import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dollar, bank } from "../../utils/Icons";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/globalContext";

function CashInventory() {
  const { totalBankAccount } = useGlobalContext();
  return (
    <CashInventoryStyled>
      <h2 className="total-income">
        Total Cash Balance: <span>₹{totalBankAccount()}</span>
      </h2>
      {/* Add cash inventory management content */}
      {/* You can add forms, tables, etc. for cash inventory */}
    </CashInventoryStyled>
  );
}

const CashInventoryStyled = styled.div`
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

  /* Add styling for the CashInventory component */
`;

export default CashInventory;
