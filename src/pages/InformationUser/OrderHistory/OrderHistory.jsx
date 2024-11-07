import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOrderByUserId } from "../../../store/orderSlice";
import ItemOrder from "./ItemOrder/ItemOrder";

import * as S from "./OrderHistory.styled";
import FilterOrder from "./FilterOrder";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const user_id = localStorage.getItem("id");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    dispatch(fetchOrderByUserId(user_id));
  }, [dispatch, user_id]);

  const filteredOrders = Array.isArray(orders)
    ? orders.filter((order) =>
        status === "all" ? true : order.status === status
      )
    : [];

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Order History</S.Title>
        <S.Divider />
      </S.HeaderContainer>

      <S.ContainerFilter>
        <S.LeftFilter />
        <S.RightFilter>
          <FilterOrder status={status} onStatusChange={setStatus} />
        </S.RightFilter>
      </S.ContainerFilter>

      <S.ContainerItem>
        {filteredOrders.map((order) => (
          <ItemOrder key={order.order_id} order={order} />
        ))}
      </S.ContainerItem>
    </S.Container>
  );
}
