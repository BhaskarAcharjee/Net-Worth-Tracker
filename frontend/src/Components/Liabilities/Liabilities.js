import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";

function Liabilities() {
  return (
    <LiabilitiesStyled>
      <InnerLayout>
        <h1>Liabilities</h1>
        
        {/* Short Term Loans / EMIs Section */}
        <section className="liabilities-section">
          <h2>Short Term Loans / EMIs</h2>
          <ShortTermLoans />
        </section>

        {/* Long Term Loans Section */}
        <section className="liabilities-section">
          <h2>Long Term Loans</h2>
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

  .liabilities-section {
    margin-bottom: 3rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

function ShortTermLoans() {
  return (
    <ShortTermLoansStyled>
      {/* Add short term loans / EMIs management content */}
      {/* You can add forms, tables, etc. for short term loans / EMIs */}
    </ShortTermLoansStyled>
  );
}

const ShortTermLoansStyled = styled.div`
  /* Add styling for the ShortTermLoans component */
`;

function LongTermLoans() {
  return (
    <LongTermLoansStyled>
      {/* Add long term loans management content */}
      {/* You can add forms, tables, etc. for long term loans */}
    </LongTermLoansStyled>
  );
}

const LongTermLoansStyled = styled.div`
  /* Add styling for the LongTermLoans component */
`;

export default Liabilities;
