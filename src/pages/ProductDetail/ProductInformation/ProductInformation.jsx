import { useEffect, useState } from "react";
import * as S from "./ProductInformation.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, resetProductState } from "../../../store/productSlice";
import { getAllShipping } from "../../../store/shippingSlice";
import { addItemToCart, getCartItems } from "../../../store/cartSlice";
import {
  notifySuccess,
  notifyWarning,
} from "../../../utils/Nontification.utils";

export default function ProductInformation() {
  const [count, setCount] = useState(0);
  const { id: productId } = useParams();
  const dispatch = useDispatch();

  const selectProduct = useSelector((state) => state.product.selectedProduct);
  const shippings = useSelector((state) => state.shipping.shippings);
  const cartItems = useSelector((state) => state.cart.cart.items) || [];
  const { isLoading } = useSelector((state) => state.product);

  const productInCart = cartItems.find((item) => item.product_id === productId);
  const quantityInCart = productInCart ? productInCart.quantity : 0;
  const availableToAdd = selectProduct.quantity - quantityInCart;

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(getCartItems());
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(getAllShipping());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetProductState());
    };
  }, [dispatch]);

  const handleIncrement = () => {
    if (count < availableToAdd) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      dispatch(addItemToCart({ productId, quantity: count })).then(
        (response) => {
          if (response.meta.requestStatus === "fulfilled") {
            notifySuccess("Sản phẩm đã được thêm vào giỏ hàng!");
          } else {
          }
        }
      );
    } else {
      notifyWarning("Vui lòng chọn số lượng để thêm vào giỏ hàng!");
    }
  };

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.TopContainer>
        <S.NameProduct>
          Sản Phẩm:
          <span style={{ fontWeight: "normal", marginLeft: "var(--s-3)" }}>
            {selectProduct.name}
          </span>
        </S.NameProduct>
      </S.TopContainer>
      <S.BottomContainer>
        <S.LeftContainer>
          <S.ImageContainer>
            <S.ImageProduct src={selectProduct.image} />
          </S.ImageContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.PriceProduct>
            <S.Price>
              {Math.floor(selectProduct.price).toLocaleString("vi-VN")} VND
            </S.Price>
            <S.DiscountPrice>
              {Math.floor(selectProduct.discounted_price).toLocaleString(
                "vi-VN"
              )}
              VND
            </S.DiscountPrice>
            <S.DiscountDescription>
              Giảm giá {Math.round(selectProduct.discount)}%
            </S.DiscountDescription>
          </S.PriceProduct>
          <S.CapacityProduct>
            Dung tích:
            {selectProduct.volume ? Math.floor(selectProduct.volume) : ""} ml
          </S.CapacityProduct>
          <S.StatusProduct>Trạng thái: {selectProduct.status}</S.StatusProduct>
          <S.QuantityProduct>
            Số lượng: {selectProduct.quantity}
          </S.QuantityProduct>
          <S.ButtonContainer>
            <S.BtnCount>
              <S.BtnDecrement onClick={handleDecrement} disabled={count <= 0}>
                -
              </S.BtnDecrement>
              <S.Count>{count}</S.Count>
              <S.BtnInCrement
                onClick={handleIncrement}
                disabled={count >= availableToAdd}
              >
                +
              </S.BtnInCrement>
            </S.BtnCount>
            <S.BtnAddToCart onClick={handleAddToCart}>
              Add To Cart <span></span>
              <i className="bi bi-cart"></i>
            </S.BtnAddToCart>
          </S.ButtonContainer>
          <S.GroupInformation>
            <S.Title>Thương hiệu:</S.Title>
            <S.Content>{selectProduct.brand?.name}</S.Content>
          </S.GroupInformation>
          <S.GroupInformation>
            <S.Title>Mô tả:</S.Title>
            <S.Content>{selectProduct.description}</S.Content>
          </S.GroupInformation>
          <S.GroupInformation>
            <S.Title>Phí vận chuyển:</S.Title>
            <S.Content>
              <S.TableDelivery>
                <S.TableHeader>
                  <S.Tr>
                    <S.Th>Tên</S.Th>
                    <S.Th>Phí vận chuyển</S.Th>
                  </S.Tr>
                </S.TableHeader>
                <S.TableBody>
                  {shippings.map((shipping) => (
                    <S.Tr key={shipping.id}>
                      <S.Td>{shipping.name}</S.Td>
                      <S.Td>
                        {Math.floor(shipping.shipping_amount).toLocaleString(
                          "vi-VN"
                        )}{" "}
                        VND
                      </S.Td>
                    </S.Tr>
                  ))}
                </S.TableBody>
              </S.TableDelivery>
            </S.Content>
          </S.GroupInformation>
        </S.RightContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
