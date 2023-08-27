import React from "react";
import styled from "styled-components";

function MinMaxSalaryExpense({ title, data }) {
  return (
    <SalaryExpenseStyled>
      <h2 className="salary-title">
        Min <span>{title === "Salary" ? "Salary" : "Expense"}</span> Max
      </h2>
      <div className="salary-item">
        <p>${Math.min(...data.map((item) => item.amount))}</p>
        <p>${Math.max(...data.map((item) => item.amount))}</p>
      </div>
    </SalaryExpenseStyled>
  );
}

const SalaryExpenseStyled = styled.div`
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
`;

export default MinMaxSalaryExpense;
