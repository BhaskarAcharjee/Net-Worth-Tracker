import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Lends from "../Components/DebtsLends/Lends";
import Debts from "../Components/DebtsLends/Debts";
import { useGlobalContext } from "../context/globalContext";

function DebtsLends() {
  const { totalExpenses } = useGlobalContext();
  return (
    <DebtsLendsStyled>
      <InnerLayout>
        <h1>Debts & Lends</h1>
        <h2 className="total-income">
          Total Debts & Lends: <span>₹{totalExpenses()}</span>
        </h2>
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
      /* color: var(--color-delete); */
    }
  }
  .debts-lends-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export default DebtsLends;
