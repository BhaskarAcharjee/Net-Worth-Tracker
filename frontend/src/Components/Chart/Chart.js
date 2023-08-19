import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: "Income",
                data: incomes.map((income) => income.amount),
                borderColor: 'rgba(0, 128, 0, 1)',
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                pointBackgroundColor: 'rgba(0, 128, 0, 1)',
                pointBorderColor: 'rgba(0, 128, 0, 1)',
                tension: 0.2,
            },
            {
                label: "Expenses",
                data: expenses.map((expense) => expense.amount),
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "rgba(255, 99, 132, 1)",
                tension: 0.2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                    color: "rgba(0, 0, 0, 0.6)",
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Income vs Expenses",
                color: '#222260',
                font: {
                    size: 20,
                    weight: "bold",
                },
            },
            legend: {
                display: true,
                position: "bottom",
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
    };

    return (
        <ChartStyled>
            <Line data={data} options={options} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  height: 100%;
`;

export default Chart;