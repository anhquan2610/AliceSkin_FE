import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeItemFromCart,
  updateItemInCart,
} from "../../../store/cartSlice";
import { useState } from "react";
import * as S from "./CartItem.styled";
import { notifyError } from "../../../utils/Nontification.utils";

export default function CartItem({ item, availableQuantity }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.quantity);

  const handleIncrement = () => {
    if (count < availableQuantity) {
      const newQuantity = count + 1;
      setCount(newQuantity);
      updateCartItem(newQuantity);
    } else {
      notifyError("Quantity is not enough");
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newQuantity = count - 1;
      setCount(newQuantity);
      updateCartItem(newQuantity);
    }
  };

  const updateCartItem = (newQuantity) => {
    const updatedData = {
      quantity: newQuantity,
    };
    dispatch(updateItemInCart({ item_id: item.id, data: updatedData })).then(
      () => {
        dispatch(getCartItems());
      }
    );
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id)).then(() => {
      dispatch(getCartItems());
    });
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageItem src={item.product.image} />
      </S.ImageContainer>
      <S.NameContainer>
        <S.ItemName>{item.product.name}</S.ItemName>
      </S.NameContainer>
      <S.InforContainer>
        <S.QuantityContainer>
          <S.ItemQuantity>{count}</S.ItemQuantity>
          <S.IconQuantityContainer>
            <S.BtnIncrement onClick={handleIncrement}>
              <i className="bi bi-caret-up-fill"></i>
            </S.BtnIncrement>
            <S.BtnDecrement onClick={handleDecrement}>
              <i className="bi bi-caret-down-fill"></i>
            </S.BtnDecrement>
          </S.IconQuantityContainer>
        </S.QuantityContainer>
        <S.ItemPrice>
          {Math.floor(item.product.discounted_price * count).toLocaleString(
            "vi-VN"
          )}{" "}
          VND
        </S.ItemPrice>
        <S.IconDelete onClick={handleRemoveItem}>
          <i className="bi bi-trash"></i>
        </S.IconDelete>
      </S.InforContainer>
    </S.Container>
  );
}
