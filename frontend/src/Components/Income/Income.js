import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "./IncomeForm";
import Button from "../Button/Button";
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
        useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, []);

    const [showAllIncomes, setShowAllIncomes] = useState(false);
    const displayIncomes = showAllIncomes ? incomes : incomes.slice(0, 4);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">
                    Total Income: <span>₹{totalIncome()}</span>
                </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {displayIncomes.map((income) => (
                            <IncomeItem
                                key={income._id}
                                id={income._id}
                                title={income.title}
                                description={income.description}
                                amount={income.amount}
                                date={income.date}
                                type={income.type}
                                category={income.category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        ))}
                        {!showAllIncomes && incomes.length > 4 && (
                            <Button
                                name="Show More"
                                onClick={() => setShowAllIncomes(true)}
                                bg="var(--color-green)"
                                bPad="0.5rem 1rem"
                                color="white"
                                bRad="10px"
                            />
                        )}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  margin-top: -15px;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Income;