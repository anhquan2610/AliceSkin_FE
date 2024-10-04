import { useEffect, useState } from "react";
import * as S from "./ProductInformation.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../store/productSlice";
import { getAllShipping } from "../../../store/shippingSlice";

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

  return (
    <S.Container>
      <S.TopContainer>
        <S.NameProduct>{}</S.NameProduct>
      </S.TopContainer>
      <S.BottomContainer>
        <S.LeftContainer>
          <S.ImageContainer>
            <S.ImageProduct src={selectProduct.images} />
          </S.ImageContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.PriceProduct>{selectProduct.price}$</S.PriceProduct>
          <S.CapacityProduct>
            Capacity: {selectProduct.volume}
          </S.CapacityProduct>
          <S.StatusProduct>Status: {selectProduct.status}</S.StatusProduct>
          <S.ButtonContainer>
            <S.BtnCount>
              <S.BtnDecrement onClick={handleDecrement} disabled={count <= 0}>
                -
              </S.BtnDecrement>
              <S.Count>{count}</S.Count>
              <S.BtnInCrement onClick={handleIncrement}>+</S.BtnInCrement>
            </S.BtnCount>
            <S.BtnBuy>Buy</S.BtnBuy>
            <S.BtnAddToCart>
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