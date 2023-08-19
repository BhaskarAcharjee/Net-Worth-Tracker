import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import IncomeVsExpenseChart from "../Charts/IncomeVsExpenseChart";
import IncomeCategoriesPieChart from "../Charts/IncomeCategoriesPieChart";
import ExpenseCategoriesPieChart from "../Charts/ExpenseCategoriesPieChart";

function Analytics() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <AnalyticsStyled>
      <InnerLayout>
        <h1>Analytics</h1>
        <div className="stats-con">
          <div className="chart-con">
            <IncomeVsExpenseChart />
          </div>
          <div className="chart-row">
            <div className="chart-con">
              <IncomeCategoriesPieChart />
            </div>
            <div className="chart-con">
              <ExpenseCategoriesPieChart />
            </div>
          </div>
        </div>
      </InnerLayout>
    </AnalyticsStyled>
  );
}

const AnalyticsStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    .chart-con {
      border-radius: 8px;
      padding: 1rem;
      height: 400px;
    }

    .chart-row {
      margin-top: -40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.1rem;
    }
  }
`;

export default Analytics;
