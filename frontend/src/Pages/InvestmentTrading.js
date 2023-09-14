import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Stocks from "../Components/Trading/Stocks";
import MutualFunds from "../Components/Trading/MutualFunds";
import Bonds from "../Components/Trading/Bonds";
import Crypto from "../Components/Trading/Crypto";
import { useGlobalContext } from "../context/globalContext";

function InvestmentTrading() {
  const { totalExpenses } = useGlobalContext();
  return (
    <InvestmentTradingStyled>
      <InnerLayout>
        <h1>Investment & Trading</h1>
        <h2 className="total-income">
          Total Investment: <span>₹{totalExpenses()}</span>
        </h2>
        {/* Stocks Section */}
        <section className="investment-section">
          {/* <h2>Stocks</h2> */}
          <Stocks />
        </section>

        {/* Mutual Funds Section */}
        <section className="investment-section">
          {/* <h2>Mutual Funds</h2> */}
          <MutualFunds />
        </section>

        {/* Bonds Section */}
        <section className="investment-section">
          {/* <h2>Bonds</h2> */}
          <Bonds />
        </section>

        {/* Crypto Section */}
        <section className="investment-section">
          {/* <h2>Crypto</h2> */}
          <Crypto />
        </section>
      </InnerLayout>
    </InvestmentTradingStyled>
  );
}

const InvestmentTradingStyled = styled.div`
  h1 {
    margin-bottom: 1.5rem;
  }
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

  .investment-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export default InvestmentTrading;
