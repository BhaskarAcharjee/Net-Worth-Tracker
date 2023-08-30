import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import RecentTransactionsHistory from "../Components/Dashboard/RecentTransactionsHistory";
import { InnerLayout } from "../styles/Layouts";
import { dollar } from "../utils/Icons";
import MinMaxSalaryExpense from "../Components/Dashboard/MinMaxSalaryExpense";
import DashboardHeading from "../Components/Dashboard/DashboardHeading";
import BankAccountSummary from "../Components/Dashboard/BankAccountSummary";
import CashInventorySummary from "../Components/Dashboard/CashInventorySummary";

function Dashboard() {
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
    bankAccounts,
    denominations,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
    getBankAccounts();
    getDenominations();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Dashboard</h1>
        <DashboardHeading />
        <div className="assets-con">
          <BankAccountSummary bankAccounts={bankAccounts} />
          <CashInventorySummary denominations={denominations} />
        </div>
        <div className="stats-con">
          <div className="history-con">
            <RecentTransactionsHistory />
            <MinMaxSalaryExpense title="Salary" data={incomes} />
            <MinMaxSalaryExpense title="Expense" data={expenses} />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .assets-con {
    display: grid;
    grid-template-columns: 2fr 1fr; /* Adjust the column ratios as needed */
    gap: 2rem;
    margin-bottom: 2rem;
    /* width: 100%; */
  }
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
