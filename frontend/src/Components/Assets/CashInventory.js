import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Rs2000 from "../../img/Rs2000.png";
import Rs500 from "../../img/Rs500.jpg";
import Rs200 from "../../img/Rs200.jpeg";
import Rs100 from "../../img/Rs100.jpg";
import Rs50 from "../../img/Rs50.jpg";
import Rs20 from "../../img/Rs20.jpg";
import Rs10 from "../../img/Rs10.jpg";
import Rs5 from "../../img/Rs5.jpg";

function CashInventory() {
  const { getDenominations, updateDenominations } = useGlobalContext();

  const [denominations, setDenominations] = useState({
    denomination2000: 0,
    denomination500: 0,
    denomination200: 0,
    denomination100: 0,
    denomination50: 0,
    denomination20: 0,
    denomination10: 0,
    denomination5: 0,
  });

  const [DenominationsError, setDenominationsError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    getDenominations().then((data) => {
      setDenominations(data);
    });
  }, []);

  const handleDenominationChange = (denomination, value) => {
    if (parseInt(value) < 0) {
      setDenominationsError("Negative values not allowed");
      return;
    }

    setDenominations({
      ...denominations,
      [denomination]: parseInt(value),
    });

    setDenominationsError("");
    setUpdateSuccess(false);

    updateDenominations({
      ...denominations,
      [denomination]: parseInt(value),
    })
      .then(() => {
        setUpdateSuccess(true);
      })
      .catch((error) => {
        console.log("Update error:", error);
      });
  };

  const calculateTotal = () => {
    return Object.keys(denominations).reduce(
      (total, denomination) =>
        total +
        (parseInt(denomination.slice(12)) || 0) *
          parseInt(denominations[denomination]),
      0
    );
  };

  const calculateIndividualTotal = (denomination) => {
    if (denominations[denomination] !== undefined) {
      const denominationValue = denominations[denomination];
      const noteValue = parseInt(denomination.slice(12)) || 0;
      return denominationValue * noteValue;
    }
    return 0;
  };

  return (
    <CashInventoryStyled>
      <h2 className="total-income">
        Total Cash Balance: <span>₹{calculateTotal()}</span>
      </h2>
      {DenominationsError && <p className="error">{DenominationsError}</p>}
      <DenominationContainer>
        {Object.keys(denominations).map(
          (denomination) =>
            denomination.startsWith("denomination") && (
              <DenominationItem key={denomination}>
                <img
                  src={
                    denomination === "denomination2000"
                      ? Rs2000
                      : denomination === "denomination500"
                      ? Rs500
                      : denomination === "denomination200"
                      ? Rs200
                      : denomination === "denomination100"
                      ? Rs100
                      : denomination === "denomination50"
                      ? Rs50
                      : denomination === "denomination20"
                      ? Rs20
                      : denomination === "denomination10"
                      ? Rs10
                      : denomination === "denomination5"
                      ? Rs5
                      : ""
                  }
                  alt={`${denomination} Note`}
                />
                <div>
                  <span>Rs. {denomination.slice(12)} Note</span>
                  <input
                    type="number"
                    value={denominations[denomination]}
                    onChange={(e) =>
                      handleDenominationChange(denomination, e.target.value)
                    }
                  />
                  <span>Total: ₹{calculateIndividualTotal(denomination)}</span>
                </div>
              </DenominationItem>
            )
        )}
      </DenominationContainer>
    </CashInventoryStyled>
  );
}

const CashInventoryStyled = styled.div`
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
  Button {
    margin-top: 0.5rem;
  }
  .success {
    color: var(--color-green);
  }
`;

const DenominationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const DenominationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  img {
    width: 100px; /* Adjust image size as needed */
    height: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    width: 10rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
  }
  span {
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
  }
`;

export default CashInventory;
