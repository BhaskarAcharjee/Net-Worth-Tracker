import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function RecentTransactionsHistory() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  const formatAmount = (amount) => {
    return Number.isInteger(amount) ? amount : amount.toFixed(2); // amounts without decimal values will be shown as whole numbers
  };

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.length === 0 ? (
        <p className="no-transactions-message">No transactions to display.</p>
      ) : (
        history.map((item) => {
          const { _id, title, amount, type } = item;
          return (
            <div key={_id} className="history-item">
              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {title}
              </p>

              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {type === "expense"
                  ? `-₹${formatAmount(amount <= 0 ? 0 : amount)}`
                  : `+₹${formatAmount(amount <= 0 ? 0 : amount)}`}
              </p>
            </div>
          );
        })
      )}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .no-transactions-message {
    font-size: 1.5rem;
    color: gray;
    text-align: center;
  }
`;

export default RecentTransactionsHistory;
