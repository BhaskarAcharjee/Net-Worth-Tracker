import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import IncomeVsExpenseChart from "../Charts/IncomeVsExpenseChart";

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
        {/* <div className="amount-con">
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
        </div> */}
        <div className="stats-con">
          <div className="chart-con">
            <IncomeVsExpenseChart />
          </div>
          {/* <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div> */}
        </div>
      </InnerLayout>
    </AnalyticsStyled>
  );
}

const AnalyticsStyled = styled.div`
  /* .amount-con {
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
        font-size: 4.5rem;
        font-weight: 700;
      }
    }

    .balance {
      p {
        opacity: 0.6;
        font-size: 4.5rem;
      }

      .positive {
        color: var(--color-green);
      }
      .negative {
        color: var(--color-delete);
      }
    }
  } */

  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
    }

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

export default Analytics;
