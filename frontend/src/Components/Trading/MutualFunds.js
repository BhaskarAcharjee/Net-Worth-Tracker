import React from "react";
import styled from "styled-components";
import { plus } from "../../utils/Icons";
import Button from "../Button/Button";

function MutualFunds() {
  // Dummy data for mutual funds
  const mutualFundsData = [
    {
      id: 1,
      fundName: "SBI Bluechip Fund",
      units: 100,
      purchaseNav: 150,
    },
    {
      id: 2,
      fundName: "HDFC Mid-Cap Opportunities Fund",
      units: 50,
      purchaseNav: 200,
    },
    // Add more dummy data
  ];

  return (
    <MutualFundsStyled>
      <h3>Mutual Funds Portfolio</h3>
      <h2 className="total-income">
        Total Mutual Funds Portfolio Balance: <span>₹{0}</span>
      </h2>
      {/* Display dummy mutual funds */}
      <ul className="mutual-funds-list">
        {mutualFundsData.map((fund) => (
          <li key={fund.id}>
            <span>
              <b>Fund Name:</b> {fund.fundName}
            </span>
            <span>
              <b>Units:</b> {fund.units}
            </span>
            <span>
              <b>Purchase NAV:</b> ₹{fund.purchaseNav}
            </span>
          </li>
        ))}
      </ul>

      {/* Form for adding new mutual funds */}
      <form>
        <div className="input-group">
          <label htmlFor="fundName">Fund Name:</label>
          <input type="text" id="fundName" placeholder="Enter fund name" />
        </div>
        <div className="input-group">
          <label htmlFor="units">Units:</label>
          <input type="number" id="units" placeholder="Enter units" />
        </div>
        <div className="input-group">
          <label htmlFor="purchaseNav">Purchase NAV:</label>
          <input
            type="number"
            id="purchaseNav"
            placeholder="Enter purchase NAV"
          />
        </div>
        <div className="submit-btn">
          <Button
            name={"Add Mutual Fund"}
            icon={plus}
            bPad={".5rem 1rem"}
            bRad={"30px"}
            bg={"var(--color-accent-green"}
            color={"#fff"}
          />
        </div>
      </form>
    </MutualFundsStyled>
  );
}

const MutualFundsStyled = styled.div`
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
  .mutual-funds-list {
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

export default MutualFunds;
