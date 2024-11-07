import { Link } from "react-router-dom";
import * as S from "./ItemOrder.styled";

export default function ItemOrder({ order }) {
  const totalAmountVND = parseInt(
    order.total_amount.replace(/,/g, ""),
    10
  ).toLocaleString("vi-VN");
  return (
    <S.Container>
      <S.ContainerContent>
        <S.DateOrder>
          Order Date: {new Date(order.order_date).toLocaleDateString("en-GB")}
        </S.DateOrder>
        <S.AddressShipping>
          Address Shipping: {order.shipping_address}
        </S.AddressShipping>
        <S.Group>
          <S.TotalPrice>Total: {totalAmountVND} VND</S.TotalPrice>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/Order_detail/${order.order_id}`,
              state: { order_id: order.order_id },
            }}
          >
            <S.ViewDetail>View Detail</S.ViewDetail>
          </Link>
        </S.Group>
      </S.ContainerContent>
      <S.ContainerStatus>
        <S.StatusItem>{order.status}</S.StatusItem>
      </S.ContainerStatus>
    </S.Container>
  );
}
