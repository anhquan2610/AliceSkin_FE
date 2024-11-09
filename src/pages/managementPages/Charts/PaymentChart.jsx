import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, LabelList } from "recharts";

export default function PaymentChart({ data, isLoading }) {
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <Box sx={{ textAlign: "center" }}>
     
      {isLoading ? (
        <CircularProgress />
      ) : (
        <BarChart width={400} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            <LabelList dataKey="value" position="top" /> 
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      )}
    </Box>
  );
}
