import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ShortTermLoans from "../Components/Liabilities/ShortTermLoans";
import LongTermLoans from "../Components/Liabilities/LongTermLoans";
import { useGlobalContext } from "../context/globalContext";

function Liabilities() {
  const { totalExpenses } = useGlobalContext();

  return (
    <LiabilitiesStyled>
      <InnerLayout>
        <h1>Liabilities</h1>
        <h2 className="total-income">
          Total Liabilities: <span>₹{totalExpenses()}</span>
        </h2>
        {/* Short Term Loans / EMIs Section */}
        <section className="liabilities-section">
          {/* <h2>Short Term Loans / EMIs</h2> */}
          <ShortTermLoans />
        </section>

        {/* Long Term Loans Section */}
        <section className="liabilities-section">
          {/* <h2>Long Term Loans</h2> */}
          <LongTermLoans />
        </section>
      </InnerLayout>
    </LiabilitiesStyled>
  );
}

const LiabilitiesStyled = styled.div`
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
      color: var(--color-delete);
    }
  }

  .liabilities-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Liabilities;
