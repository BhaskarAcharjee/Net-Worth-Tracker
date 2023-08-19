import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';

function Transactions() {
    const { incomes, expenses, getIncomes, getExpenses, deleteIncome, deleteExpense } = useGlobalContext();

    useEffect(() =>{
        getIncomes()
        getExpenses()
    }, [])
    return (
        <TransactionsStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="transactions-content">
                    <div className="transactions">
                        {incomes.map((income) => (
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
                        {expenses.map((expense) => (
                            <IncomeItem
                                key={expense._id}
                                id={expense._id}
                                title={expense.title}
                                description={expense.description}
                                amount={expense.amount}
                                date={expense.date}
                                type={expense.type}
                                category={expense.category}
                                indicatorColor="red"
                                deleteItem={deleteExpense}
                            />
                        ))}
                    </div>
                </div>
            </InnerLayout>
        </TransactionsStyled>
    );
}

const TransactionsStyled = styled.div`
    display: flex;
    overflow: auto;
    .transactions-content {
        display: flex;
        gap: 2rem;
        .transactions {
            flex: 1;
        }
    }
`;

export default Transactions;
