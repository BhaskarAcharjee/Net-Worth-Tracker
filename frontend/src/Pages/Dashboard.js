import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import RecentTransactionsHistory from "../Components/Dashboard/RecentTransactionsHistory";
import { InnerLayout } from "../styles/Layouts";
import MinMaxSalaryExpense from "../Components/Dashboard/MinMaxSalaryExpense";
import DashboardHeading from "../Components/Dashboard/DashboardHeading";
import BankAccountSummary from "../Components/Dashboard/BankAccountSummary";
import CashInventorySummary from "../Components/Dashboard/CashInventorySummary";
import WalletAccountSummary from "../Components/Dashboard/WalletAccountSummary";

function Dashboard() {
  const {
    incomes,
    expenses,
    getIncomes,
    getExpenses,
    getBankAccounts,
    getDenominations,
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
        </div>
        <div className="stats-con">
          <div className="summary-con">
            <CashInventorySummary denominations={denominations} />
            <div className="minmax-con">
              <MinMaxSalaryExpense title="Salary" data={incomes} />
              <MinMaxSalaryExpense title="Expense" data={expenses} />
            </div>
          </div>
          <RecentTransactionsHistory />
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .assets-con {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Equal columns for Bank and Wallet summaries */
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .stats-con {
    display: grid;
    grid-template-columns: 1fr; /* One column layout */
    gap: 2rem;
    
    .summary-con {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two columns layout for Cash Inventory and MinMax */
      gap: 2rem;
    }
    
    .minmax-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default Dashboard;
