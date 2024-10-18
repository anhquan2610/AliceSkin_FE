import { useDispatch, useSelector } from "react-redux";
import * as S from "./Cart.styled";
import CartItem from "./CartItem/CartItem";
import { useEffect } from "react";
import { getCartItems } from "../../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (!cart || !cart.items || isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Shopping Cart</S.Title>
        <S.TotalOnCart>You have {cart.items.length} items in cart</S.TotalOnCart>
      </S.HeaderContainer>
      <S.ListCartContainer>
        {cart.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </S.ListCartContainer>
      <S.TotalPrice>Total: {cart.subtotal} $</S.TotalPrice>
      <S.ButtonContainer>
        <S.BtnCheckout>
          Checkout
          <S.BtnIcon>
            <i className="bi bi-arrow-right"></i>
          </S.BtnIcon>
        </S.BtnCheckout>
      </S.ButtonContainer>
    </S.Container>
  );
}
