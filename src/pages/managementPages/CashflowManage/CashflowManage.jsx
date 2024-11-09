// src/components/Cashflow/Cashflow.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { fetchCashflowData } from "../../../store/orderSlice";

export default function Cashflow() {
  const dispatch = useDispatch();
  const { totalVNPay, totalCOD, totalAmount, isLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(fetchCashflowData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <CircularProgress
        style={{
          margin: "auto",
          display: "block",
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6">Total VNPay</Typography>
          <Typography variant="body1">{totalVNPay}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Total COD</Typography>
          <Typography variant="body1">{totalCOD}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Total Amount</Typography>
          <Typography variant="body1">{totalAmount}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
