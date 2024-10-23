import { useEffect, useState } from "react";
import * as S from "./ProductInformation.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../store/productSlice";
import { getAllShipping } from "../../../store/shippingSlice";
import { addItemToCart } from "../../../store/cartSlice";
import { notifySuccess } from "../../../utils/Nontification.utils";

export default function ProductInformation() {
  const [count, setCount] = useState(0);
  const { id: productId } = useParams();
  const dispatch = useDispatch();

  const selectProduct = useSelector((state) => state.product.selectedProduct);
  const shippings = useSelector((state) => state.shipping.shippings);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(getAllShipping());
  }, [dispatch]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      dispatch(addItemToCart({ productId, quantity: count })).then(() => {
        notifySuccess("Product added to cart successfully!");
      });
    } else {
      alert("Please select quantity");
    }
  };

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
            <S.ImageProduct src={selectProduct.images} />
          </S.ImageContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.PriceProduct>
            <S.Price>{selectProduct.price}$</S.Price>
            <S.DiscountPrice>{selectProduct.discounted_price}$</S.DiscountPrice>
            <S.DiscountDescription>
              Discount {Math.round(selectProduct.discount)}%
            </S.DiscountDescription>
          </S.PriceProduct>
          <S.CapacityProduct>
            Capacity: {selectProduct.volume}
          </S.CapacityProduct>
          <S.StatusProduct>Status: {selectProduct.status}</S.StatusProduct>
          <S.QuantityProduct>
            Quantity: {selectProduct.quantity}
          </S.QuantityProduct>
          <S.ButtonContainer>
            <S.BtnCount>
              <S.BtnDecrement onClick={handleDecrement} disabled={count <= 0}>
                -
              </S.BtnDecrement>
              <S.Count>{count}</S.Count>
              <S.BtnInCrement
                onClick={handleIncrement}
                disabled={count >= selectProduct.quantity}
              >
                +
              </S.BtnInCrement>
            </S.BtnCount>
            <S.BtnBuy>Buy</S.BtnBuy>
            <S.BtnAddToCart onClick={handleAddToCart}>
              Add to Cart <span></span>
              <i className="bi bi-cart"></i>
            </S.BtnAddToCart>
          </S.ButtonContainer>
          <S.GroupInformation>
            <S.Title>Brand:</S.Title>
            <S.Content>{selectProduct.brand?.name}</S.Content>
          </S.GroupInformation>
          <S.GroupInformation>
            <S.Title>Description:</S.Title>
            <S.Content>{selectProduct.description}</S.Content>
          </S.GroupInformation>
          <S.GroupInformation>
            <S.Title>Delivery Cash:</S.Title>
            <S.Content>
              <S.TableDelivery>
                <S.TableHeader>
                  <S.Tr>
                    <S.Th>Name</S.Th>
                    <S.Th>Shipping Cost</S.Th>
                  </S.Tr>
                </S.TableHeader>
                <S.TableBody>
                  {shippings.map((shipping) => (
                    <S.Tr key={shipping.id}>
                      <S.Td>{shipping.name}</S.Td>
                      <S.Td>{shipping.shipping_amount}$</S.Td>
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
