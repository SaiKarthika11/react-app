import React from "react";

import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: ""
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default BarChart;