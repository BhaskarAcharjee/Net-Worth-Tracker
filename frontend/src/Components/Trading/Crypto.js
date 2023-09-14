import React from "react";
import styled from "styled-components";
import { plus } from "../../utils/Icons";
import Button from "../Button/Button";

function Crypto() {
  // Dummy data for crypto
  const cryptoData = [
    {
      id: 1,
      cryptoName: "Bitcoin",
      quantity: 2.5,
      purchasePrice: 45000,
    },
    {
      id: 2,
      cryptoName: "Ethereum",
      quantity: 10,
      purchasePrice: 3000,
    },
    // Add more dummy data
  ];

  return (
    <CryptoStyled>
      <h3>Crypto Portfolio</h3>
      <h2 className="total-income">
        Total Crypto Portfolio Balance: <span>₹{0}</span>
      </h2>
      {/* Display dummy crypto */}
      <ul className="crypto-list">
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            <span>
              <b>Crypto Name:</b> {crypto.cryptoName}
            </span>
            <span>
              <b>Quantity:</b> {crypto.quantity}
            </span>
            <span>
              <b>Purchase Price:</b> ₹{crypto.purchasePrice}
            </span>
          </li>
        ))}
      </ul>

      {/* Form for adding new crypto */}
      <form>
        <div className="input-group">
          <label htmlFor="cryptoName">Crypto Name:</label>
          <input type="text" id="cryptoName" placeholder="Enter crypto name" />
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
        <div className="submit-btn">
          <Button
            name={"Add Crypto"}
            icon={plus}
            bPad={".5rem 1rem"}
            bRad={"30px"}
            bg={"var(--color-accent-green"}
            color={"#fff"}
          />
        </div>
      </form>
    </CryptoStyled>
  );
}

const CryptoStyled = styled.div`
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
  .crypto-list {
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

export default Crypto;
