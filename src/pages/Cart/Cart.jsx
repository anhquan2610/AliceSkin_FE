import { useDispatch, useSelector } from "react-redux";
import * as S from "./Cart.styled";
import CartItem from "./CartItem/CartItem";
import { useEffect } from "react";
import { getCartItems } from "../../store/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (!cart || !cart.items) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Shopping Cart</S.Title>
        <S.TotalOnCart>
          You have {cart.items.length} items in cart
        </S.TotalOnCart>
      </S.HeaderContainer>
      <S.ListCartContainer>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            availableQuantity={item.product.quantity}
          />
        ))}
      </S.ListCartContainer>
      <S.TotalPrice>
        Total: {Math.floor(cart.subtotal).toLocaleString("vi-VN")} VND
      </S.TotalPrice>
      <S.ButtonContainer>
        <Link to="/Order_payment" style={{ textDecoration: "none" }}>
          <S.BtnCheckout disabled={cart.items.length === 0}>
            Checkout
            <S.BtnIcon>
              <i className="bi bi-arrow-right"></i>
            </S.BtnIcon>
          </S.BtnCheckout>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
}
