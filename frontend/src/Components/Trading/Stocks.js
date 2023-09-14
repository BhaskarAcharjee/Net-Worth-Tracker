import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

function Stocks() {
  // Dummy data for stocks
  const stocksData = [
    {
      id: 1,
      stockName: "Apple Inc.",
      quantity: 10,
      purchasePrice: 150,
      currentPrice: 175,
    },
    {
      id: 2,
      stockName: "Microsoft Corporation",
      quantity: 5,
      purchasePrice: 200,
      currentPrice: 220,
    },
    // Add more dummy data
  ];

  return (
    <StocksStyled>
      <h3>Stocks Portfolio</h3>
      <h2 className="total-income">
        Total Stocks Portfolio Balance: <span>₹{0}</span>
      </h2>
      {/* Display dummy stocks */}
      <ul className="stocks-list">
        {stocksData.map((stock) => (
          <li key={stock.id}>
            <span>
              <b>Stock Name:</b> {stock.stockName}
            </span>
            <span>
              <b>Quantity:</b> {stock.quantity}
            </span>
            <span>
              <b>Purchase Price:</b> ₹{stock.purchasePrice}
            </span>
            <span>
              <b>Current Price:</b> ₹{stock.currentPrice}
            </span>
          </li>
        ))}
      </ul>

      {/* Form for adding new stocks */}
      <form>
        <div className="input-group">
          <label htmlFor="stockName">Stock Name:</label>
          <input type="text" id="stockName" placeholder="Enter stock name" />
        </div>
        <div className="input-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" placeholder="Enter quantity" />
        </div>
        <div className="input-group">
          <label htmlFor="purchasePrice">Purchase Price:</label>
          <input
            type="number"
            id="purchasePrice"
            placeholder="Enter purchase price"
          />
        </div>
        <div className="input-group">
          <label htmlFor="currentPrice">Current Price:</label>
          <input
            type="number"
            id="currentPrice"
            placeholder="Enter current price"
          />
        </div>
        <div className="submit-btn">
          <Button
            name={"Add Stock"}
            icon={plus}
            bPad={".5rem 1rem"}
            bRad={"30px"}
            bg={"var(--color-accent-green"}
            color={"#fff"}
          />
        </div>
      </form>
    </StocksStyled>
  );
}

const StocksStyled = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 0.2rem !important;
    margin: 1rem 0;
    font-size: 1.5rem !important;
    gap: 0.5rem;
    span {
      font-size: 2rem !important;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .stocks-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      background-color: #f8f9fa;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      span {
        flex: 1;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
      }

      input {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
          color: rgba(34, 34, 96, 0.4);
        }
      }
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default Stocks;
