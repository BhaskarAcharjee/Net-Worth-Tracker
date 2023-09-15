import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import BankAccounts from "../Components/Assets/BankAccount";
import CashInventory from "../Components/Assets/CashInventory";
import { useGlobalContext } from "../context/globalContext";
import WalletAccounts from "../Components/Assets/WalletAccount";

function Assets() {
  const { totalAssets } = useGlobalContext();

  return (
    <AssetsStyled>
      <InnerLayout>
        <h1>Assets</h1>
        <h2 className="total-income">
          Total Assets: <span>₹{totalAssets()}</span>
        </h2>
        {/* Bank Account Section */}
        <section className="asset-section">
          <h2>Bank Accounts</h2>
          <BankAccounts />
        </section>
        {/* Bank Account Section */}
        <section className="asset-section">
          <h2>Wallet Accounts</h2>
          <WalletAccounts />
        </section>

        {/* Cash Inventory Section */}
        <section className="asset-section">
          <h2>Cash Inventory</h2>
          <CashInventory />
        </section>
      </InnerLayout>
    </AssetsStyled>
  );
}

const AssetsStyled = styled.div`
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
      color: var(--color-green);
    }
  }

  .asset-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Assets;
