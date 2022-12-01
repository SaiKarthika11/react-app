
import { Column } from "react-chartjs-2";
export const ColumnChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>column Chart</h2>
      <Bar
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
};
export default ColumnChart;