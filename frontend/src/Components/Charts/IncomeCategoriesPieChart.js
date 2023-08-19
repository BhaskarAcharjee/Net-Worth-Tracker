import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function IncomeCategoriesPieChart() {
  const { incomes } = useGlobalContext();

  // Calculate category-wise income
  const categoriesData = {};

  incomes.forEach((income) => {
    if (!categoriesData[income.category]) {
      categoriesData[income.category] = income.amount;
    } else {
      categoriesData[income.category] += income.amount;
    }
  });

  const data = {
    labels: Object.keys(categoriesData),
    datasets: [
      {
        data: Object.values(categoriesData),
        backgroundColor: [
          "#66BB6A",
          "#4CAF50",
          "#43A047",
          "#388E3C",
          "#2E7D32",
          "#689F38",
          "#8BC34A",
          "#9CCC65",
          "#C0CA33",
          "#CDDC39",
          "#D4E157",
          "#FDD835",
          "#FFEB3B",
          "#FFC107",
          "#FFA000",
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
        text: "Income Categories",
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

export default IncomeCategoriesPieChart;
