import * as S from "./Payment.styled";
import cashon from "../../assets/images/cashon.jpg";
import vnpay from "../../assets/images/VNpay.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { completeCart, getCartItems } from "../../store/cartSlice";
import { getAllShipping } from "../../store/shippingSlice";
import { getAllVoucher } from "../../store/voucherSlice";
import ItemCart from "./ItemCart/ItemCart";
import ship from "../../assets/images/image 15.png";
import voucher from "../../assets/images/Ticket_alt.png";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  createOrder,
  createPayment,
  resetOderState,
} from "../../store/orderSlice";

export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart.cart);
  const { shippings } = useSelector((state) => state.shipping);
  const { vouchers } = useSelector((state) => state.voucher);
  const { paymentUrl, isLoading, isSuccess } = useSelector(
    (state) => state.order
  );

  const [selectedShipping, setSelectedShipping] = useState("");
  const [selectedVoucher, setSelectedVoucher] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getAllShipping());
    dispatch(getAllVoucher());
  }, [dispatch]);

  const handleShippingChange = (event) => {
    setSelectedShipping(event.target.value);
  };

  const handleVoucherChange = (event) => {
    setSelectedVoucher(event.target.value);
  };

  const handleShippingAddressChange = (event) => {
    setShippingAddress(event.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleOrderNow = () => {
    const orderData = {
      shipping_id: selectedShipping,
      shipping_address: shippingAddress,
      voucher_id: selectedVoucher,
      payment_method: paymentMethod,
    };

    dispatch(createOrder(orderData)).then((order) => {
      if (paymentMethod === "VNpay Payment" && order) {
        const orderId = order.payload.id;
        dispatch(createPayment(orderId)).then((paymentAction) => {
          if (paymentAction.payload.payment_url) {
            const paymentUrl = paymentAction.payload.payment_url;

            navigate("/Payment_notifi", { state: { paymentUrl } });
          }
        });
      } else {
        navigate("/Payment_notifi");
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetOderState());
      dispatch(completeCart());
    }
  }, [dispatch, isSuccess]);

  const selectedShippingData = shippings.find(
    (shipping) => shipping.id === selectedShipping
  );

  const selectedVoucherData = vouchers.find(
    (voucher) => voucher.voucher_id === selectedVoucher
  );

  if (!cart || !cart.items) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.PaymentContainer>
        <S.LeftContainer>
          <S.MethodPaymentContainer>
            <S.Title>Phương thức thanh toán</S.Title>
            <S.PaymentMethod>
              <S.ItemPaymentLabel>
                <S.HiddenRadio
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={() => handlePaymentMethodChange("Cash on Delivery")}
                />
                <S.ItemPaymentContainer>
                  <S.PaymentImageContainer>
                    <S.PaymentImage src={cashon} />
                  </S.PaymentImageContainer>
                  <S.PaymentName>Thanh toán khi nhận hàng</S.PaymentName>
                </S.ItemPaymentContainer>
              </S.ItemPaymentLabel>
              <S.ItemPaymentLabel>
                <S.HiddenRadio
                  type="radio"
                  name="payment"
                  value="VNpay Payment"
                  onChange={() => handlePaymentMethodChange("VNpay Payment")}
                />
                <S.ItemPaymentContainer>
                  <S.PaymentImageContainer>
                    <S.PaymentImage src={vnpay} />
                  </S.PaymentImageContainer>
                  <S.PaymentName>VNpay</S.PaymentName>
                </S.ItemPaymentContainer>
              </S.ItemPaymentLabel>
            </S.PaymentMethod>
          </S.MethodPaymentContainer>
          <S.AddressContainer>
            <S.Title>Địa chỉ giao hàng</S.Title>
            <S.InformationContaienr>
              <S.InformationGroup>
                <S.LabelInformation>Họ và tên:</S.LabelInformation>
                <S.InputInformation />
              </S.InformationGroup>
              <S.InformationGroup>
                <S.LabelInformation>Số điện thoại:</S.LabelInformation>
                <S.InputInformation />
              </S.InformationGroup>
              <S.InformationGroup>
                <S.LabelInformation>Địa chỉ</S.LabelInformation>
                <S.InputInformation
                  value={shippingAddress}
                  onChange={handleShippingAddressChange}
                />
              </S.InformationGroup>
            </S.InformationContaienr>
          </S.AddressContainer>
          <S.ButtonContainer>
            <S.BtnOder onClick={handleOrderNow}>Đặt hàng ngay</S.BtnOder>
          </S.ButtonContainer>
        </S.LeftContainer>
      </S.PaymentContainer>
      {/* --------------RightContainer-------------- */}
      <S.OrderContainer>
        <S.SuperContainer>
          <S.RightContainer>
            <S.OderItemContainer>
              <S.OrderTitle>Tóm tắt đơn hàng</S.OrderTitle>
              <S.TopContainer>
                <S.TextTop>Sản phẩm ({cart.items.length})</S.TextTop>
                <S.PriceTop>{cart.subtotal} $</S.PriceTop>
              </S.TopContainer>
              <S.ItemContainer>
                {cart.items.map((item) => (
                  <ItemCart key={item.id} item={item} />
                ))}
              </S.ItemContainer>
            </S.OderItemContainer>
            <S.ShippingContainer>
              <S.TopContainer>
                <S.TextTop>Phương thức giao hàng</S.TextTop>
                <S.PriceTop>
                  {selectedShippingData
                    ? `${selectedShippingData.shipping_amount} $`
                    : "0 $"}
                </S.PriceTop>
              </S.TopContainer>
              <S.GroupItemContainer>
                <S.IconImageContainer>
                  <S.IconImage src={ship} />
                </S.IconImageContainer>
                <S.ContentContaienr>
                  <Select
                    value={selectedShipping}
                    onChange={handleShippingChange}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="">Chọn phương thức giao hàng</MenuItem>
                    {shippings.map((shipping) => (
                      <MenuItem key={shipping.id} value={shipping.id}>
                        {shipping.name}
                      </MenuItem>
                    ))}
                  </Select>
                </S.ContentContaienr>
              </S.GroupItemContainer>
            </S.ShippingContainer>
            <S.VoucherContainer>
              <S.TopContainer>
                <S.TextTop>Voucher</S.TextTop>
                <S.PriceTop>
                  {selectedVoucherData
                    ? `-${selectedVoucherData.discount_amount} $`
                    : "-0 $"}
                </S.PriceTop>
              </S.TopContainer>
              <S.GroupItemContainer>
                <S.IconImageContainer>
                  <S.IconImage src={voucher} />
                </S.IconImageContainer>
                <S.ContentContaienr>
                  <Select
                    value={selectedVoucher}
                    onChange={handleVoucherChange}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="">Chọn voucher</MenuItem>
                    {vouchers.map((voucher) => (
                      <MenuItem
                        key={voucher.voucher_id}
                        value={voucher.voucher_id}
                      >
                        {voucher.code}
                      </MenuItem>
                    ))}
                  </Select>
                </S.ContentContaienr>
              </S.GroupItemContainer>
            </S.VoucherContainer>
            <S.SubTotalContainer>
              <S.TextSubTotal>Tổng cộng:</S.TextSubTotal>
              <S.PriceTop>
                {(
                  (parseFloat(cart.subtotal) || 0) +
                  (selectedShippingData
                    ? parseFloat(selectedShippingData.shipping_amount)
                    : 0) -
                  (selectedVoucherData
                    ? parseFloat(selectedVoucherData.discount_amount)
                    : 0)
                ).toFixed(2)}
                $
              </S.PriceTop>
            </S.SubTotalContainer>
          </S.RightContainer>
        </S.SuperContainer>
      </S.OrderContainer>
    </S.Container>
  );
}
