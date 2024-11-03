import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeItemFromCart,
  updateItemInCart,
} from "../../../store/cartSlice"; // Import action
import { useState } from "react";
import * as S from "./CartItem.styled";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.quantity);

  const handleIncrement = () => {
    const newQuantity = count + 1;
    setCount(newQuantity);
    updateCartItem(newQuantity);
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

  const imagesArray = item.product.images
    ? JSON.parse(item.product.images)
    : [];
  const imageUrl =
    imagesArray.length > 0 ? imagesArray[0] : "https://via.placeholder.com/150";

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageItem src={imageUrl} alt={item.product.name} />
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
          {(item.product.discounted_price * count).toFixed(2)} $
        </S.ItemPrice>
        <S.IconDelete onClick={handleRemoveItem}>
          <i className="bi bi-trash"></i>
        </S.IconDelete>
      </S.InforContainer>
    </S.Container>
  );
}
