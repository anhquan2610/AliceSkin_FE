import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./OrderManage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllOrders } from "../../../store/orderSlice";
import OrderRows from "./OrderRows/OrderRows";
import FilterOrder from "./FilterOrder";

export default function OrderManage() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const handleFilterChange = (filters) => {
    const { searchTerm, status } = filters;
    let filtered = orders;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.user_name.toLowerCase().includes(searchLower) ||
          order.order_id.toString().includes(searchLower)
      );
    }

    if (status) {
      filtered = filtered.filter((order) => order.status === status);
    }

    setFilteredOrders(filtered);
  };

  return (
    <S.Container>
      <S.Title>Order Manage</S.Title>
      <FilterOrder onFilterChange={handleFilterChange} />
      <S.MiddleContainer>
        <S.Description>List of orders</S.Description>
      </S.MiddleContainer>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Customer Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Ship Method</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Payment Method
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Payment Status
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Order Status</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <OrderRows key={order.order_id} order={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
}
