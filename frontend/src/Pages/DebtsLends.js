import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";

function DebtsLends() {
  return (
    <DebtsLendsStyled>
      <InnerLayout>
        <h1>Debts & Lends</h1>

        {/* Debts Section */}
        <section className="debts-lends-section">
          <h2>Debts</h2>
          <Debts />
        </section>

        {/* Lends Section */}
        <section className="debts-lends-section">
          <h2>Lends</h2>
          <Lends />
        </section>
      </InnerLayout>
    </DebtsLendsStyled>
  );
}

const DebtsLendsStyled = styled.div`
  h1 {
    margin-bottom: 1.5rem;
  }

  .debts-lends-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

function Debts() {
  return (
    <DebtsStyled>
      {/* Add debts content */}
      {/* You can add forms, tables, etc. for debts */}
    </DebtsStyled>
  );
}

const DebtsStyled = styled.div`
  /* Add styling for the Debts component */
`;

function Lends() {
  return (
    <LendsStyled>
      {/* Add lends content */}
      {/* You can add forms, tables, etc. for lends */}
    </LendsStyled>
  );
}

const LendsStyled = styled.div`
  /* Add styling for the Lends component */
`;

export default DebtsLends;
