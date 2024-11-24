import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  Legend,
} from "recharts";

export default function PaymentChart({ data, isLoading }) {
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>

      <Typography variant="h6"  component="div" sx={{ marginBottom: 2 }}>
        Payment Status Overview
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <RechartsTooltip />
          <Legend />
        </PieChart>
      )}
    </Box>
  );
}
