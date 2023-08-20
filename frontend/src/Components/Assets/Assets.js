import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import BankAccounts from "./BankAccount";

function Assets() {
  return (
    <AssetsStyled>
      <InnerLayout>
        <h1>Assets</h1>
        
        {/* Bank Account Section */}
        <section className="asset-section">
          <h2>Bank Accounts</h2>
          <BankAccounts />
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
  h1 {
    margin-bottom: 1.5rem;
  }

  .asset-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

function CashInventory() {
  return (
    <CashInventoryStyled>
      {/* Add cash inventory management content */}
      {/* You can add forms, tables, etc. for cash inventory */}
    </CashInventoryStyled>
  );
}

const CashInventoryStyled = styled.div`
  /* Add styling for the CashInventory component */
`;

export default Assets;
