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
import WalletAccountSummary from "../Components/Dashboard/WalletAccountSummary";

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
    walletAccounts,
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
          <WalletAccountSummary walletAccounts={walletAccounts} />
          <CashInventorySummary denominations={denominations} />
        </div>
        <div className="stats-con">
          <RecentTransactionsHistory />
          <div className="minmax-con">
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
    display: flex; /* Change to flex layout */
    flex-wrap: wrap; /* Wrap items to next row if needed */
    gap: 2rem;

    .minmax-con {
      flex: 1; /* Take up 1/2 of the available space */
    }

    .min-max-con {
      flex: 1; /* Take up 1/2 of the available space */
    }
  }
`;

export default Dashboard;
