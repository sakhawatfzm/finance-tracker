import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function FinanceChart({ summary }) {

  const data = [
    { name: "Income",  value: summary.income  },
    { name: "Expense", value: summary.expense },
  ];

  const COLORS = ["#4ecca3", "#e8576a"];

  return (
    <div className="chart-panel">

      <div className="chart-panel-header">
        <div className="panel-dot" />
        <h2 className="panel-title">Financial Overview</h2>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={3}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default FinanceChart;