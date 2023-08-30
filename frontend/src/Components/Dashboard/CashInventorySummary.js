import React from "react";
import styled from "styled-components";
import { dollar } from "../../utils/Icons";

function CashInventorySummary({ denominations }) {
  const calculateTotal = () => {
    return Object.keys(denominations).reduce(
      (total, denomination) =>
        total +
        (parseInt(denomination.slice(12)) || 0) * denominations[denomination],
      0
    );
  };

  return (
    <CashInventorySummaryStyled>
      <h2>Cash Inventory</h2>
      <DenominationContainer>
        {Object.keys(denominations).map(
          (denomination) =>
            denomination.startsWith("denomination") && (
              <DenominationItem key={denomination}>
                <div>
                  <span>Rs. {denomination.slice(12)} Note</span>
                  <p>
                    Total: ₹
                    {(denominations[denomination] || 0) *
                      (parseInt(denomination.slice(12)) || 0)}
                  </p>
                </div>
              </DenominationItem>
            )
        )}
      </DenominationContainer>
    </CashInventorySummaryStyled>
  );
}

const CashInventorySummaryStyled = styled.div`
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
`;

const DenominationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const DenominationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  span {
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
  }
  p {
    font-family: inherit;
    font-size: inherit;
    color: rgba(34, 34, 96, 0.9);
  }
`;

export default CashInventorySummary;
