import { useDispatch, useSelector } from "react-redux";
import * as S from "./ShowDetailBrand.styled,";
import { useEffect } from "react";
import { showBrandById } from "../../../store/brandSlice";
import { useParams } from "react-router-dom";

export default function ShowDetailBrand() {
  const dispatch = useDispatch();
  const { id: brand_id } = useParams();
  const { selectedBrand, isLoading } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(showBrandById(brand_id));
  }, [dispatch]);

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={selectedBrand.image} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.ContentGroup>
          <S.Title>Name:</S.Title>
          <S.Content>{selectedBrand.name}</S.Content>
        </S.ContentGroup>
        <S.ContentGroup>
          <S.Title>Description:</S.Title>
          <S.Content>{selectedBrand.description}</S.Content>
        </S.ContentGroup>
      </S.InfoContainer>
    </S.Container>
  );
}
