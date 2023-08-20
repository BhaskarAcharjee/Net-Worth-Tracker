import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";

function InvestmentTrading() {
  return (
    <InvestmentTradingStyled>
      <InnerLayout>
        <h1>Investment & Trading</h1>
        
        {/* Stocks Section */}
        <section className="investment-section">
          <h2>Stocks</h2>
          <Stocks />
        </section>

        {/* Mutual Funds Section */}
        <section className="investment-section">
          <h2>Mutual Funds</h2>
          <MutualFunds />
        </section>

        {/* Bonds Section */}
        <section className="investment-section">
          <h2>Bonds</h2>
          <Bonds />
        </section>

        {/* Crypto Section */}
        <section className="investment-section">
          <h2>Crypto</h2>
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

  .investment-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

function Stocks() {
  return (
    <StocksStyled>
      {/* Add stocks investment content */}
      {/* You can add forms, tables, etc. for stocks */}
    </StocksStyled>
  );
}

const StocksStyled = styled.div`
  /* Add styling for the Stocks component */
`;

function MutualFunds() {
  return (
    <MutualFundsStyled>
      {/* Add mutual funds investment content */}
      {/* You can add forms, tables, etc. for mutual funds */}
    </MutualFundsStyled>
  );
}

const MutualFundsStyled = styled.div`
  /* Add styling for the MutualFunds component */
`;

function Bonds() {
  return (
    <BondsStyled>
      {/* Add bonds investment content */}
      {/* You can add forms, tables, etc. for bonds */}
    </BondsStyled>
  );
}

const BondsStyled = styled.div`
  /* Add styling for the Bonds component */
`;

function Crypto() {
  return (
    <CryptoStyled>
      {/* Add crypto investment content */}
      {/* You can add forms, tables, etc. for crypto */}
    </CryptoStyled>
  );
}

const CryptoStyled = styled.div`
  /* Add styling for the Crypto component */
`;

export default InvestmentTrading;
