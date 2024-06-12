import React, { useEffect } from "react";
import styled from "styled-components";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";

function DashboardHeading() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
    getBankAccounts,
    getDenominations,
    totalAssets,
    totalNetWorth,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
    getBankAccounts();
    getDenominations();
  }, []);
  return (
    <DashboardHeadingStyled>
      <div className="amount-con">
        <div className="income">
          <h2>Total Assets</h2>
          <p>
            {dollar} {totalAssets()}
          </p>
        </div>
        <div className="expense">
          <h2>Total Liabilities</h2>
          <p>
            {dollar} {totalExpenses()}
          </p>
        </div>
        <div className="balance">
          <h2>Net Worth</h2>
          <p className={totalNetWorth() >= 0 ? "positive" : "negative"}>
            {dollar} {totalNetWorth()}
          </p>
        </div>
      </div>
      <div className="amount-con">
        <div className="income">
          <h2>Total Income</h2>
          <p>
            {dollar} {totalIncome()}
          </p>
        </div>
        <div className="expense">
          <h2>Total Expense</h2>
          <p>
            {dollar} {totalExpenses()}
          </p>
        </div>
        <div className="balance">
          <h2>Total Savings</h2>
          <p className={totalBalance() >= 0 ? "positive" : "negative"}>
            {dollar} {totalBalance()}
          </p>
        </div>
      </div>
    </DashboardHeadingStyled>
  );
}

const DashboardHeadingStyled = styled.div`
  .amount-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .income,
    .expense,
    .balance {
      flex: 1;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
      padding: 1rem;
      text-align: center;

      p {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    .balance {
      p {
        opacity: 0.6;
        font-size: 2rem;
      }

      .positive {
        color: var(--color-green);
      }
      .negative {
        color: var(--color-delete);
      }
    }
  }
`;

export default DashboardHeading;
