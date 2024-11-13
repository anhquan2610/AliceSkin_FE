import { useDispatch, useSelector } from "react-redux";
import { fetchCashflowData } from "../../store/orderSlice";
import { useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PaymentChart from "./Charts/PaymentChart";
import BlogStatusChart from "./Charts/BlogStatusChart";

export default function AdminHome() {
  const dispatch = useDispatch();

  const { totalVNPay, totalCOD, totalAmount, isLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(fetchCashflowData());
  }, [dispatch]);

  const data = [
    {
      name: "VNPay",
      value: parseInt(totalVNPay.replace(/[^0-9]/g, "")),
    },
    {
      name: "COD",
      value: parseInt(totalCOD.replace(/[^0-9]/g, "")),
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      {/* <Typography variant="h4" gutterBottom>
        Admin Home
      </Typography> */}

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <PaymentChart data={data} isLoading={isLoading} />
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <BlogStatusChart />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
