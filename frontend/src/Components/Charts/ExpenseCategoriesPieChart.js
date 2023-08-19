import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function ExpenseCategoriesPieChart() {
  const { expenses } = useGlobalContext();

  // Calculate category-wise expenses
  const categoriesData = {};

  expenses.forEach((expense) => {
    if (!categoriesData[expense.category]) {
      categoriesData[expense.category] = expense.amount;
    } else {
      categoriesData[expense.category] += expense.amount;
    }
  });

  const data = {
    labels: Object.keys(categoriesData),
    datasets: [
      {
        data: Object.values(categoriesData),
        backgroundColor: [
          "#FF7043",
          "#FF5722",
          "#F4511E",
          "#E64A19",
          "#D84315",
          "#BF360C",
          "#FFAB91",
          "#FF8A65",
          "#FF7043",
          "#FF5722",
          "#F4511E",
          "#E64A19",
          "#D84315",
          "#BF360C",
          "#FFAB91",
        ],
        borderColor: "#ffffff", // Border color of each slice
        borderWidth: 1, // Border width of each slice
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Expense Categories",
        color: "#222260",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#222260",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce(
              (acc, data) => acc + data,
              0
            );
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ₹${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  height: 400px;
`;

export default ExpenseCategoriesPieChart;
