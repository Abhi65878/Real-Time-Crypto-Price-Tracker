import React from "react";
import {
  LineChart, Line, ResponsiveContainer
} from "recharts";

const SparklineChart = ({ data }) => {
  const chartData = data.map((price, index) => ({ value: price, index }));

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00c49f"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;
