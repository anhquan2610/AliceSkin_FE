import { useDispatch, useSelector } from "react-redux";
import * as S from "./BrandDetail.styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBrandById, resetBrandState } from "../../../../store/brandSlice";
import { Button } from "@mui/material";

export default function BrandDetail() {
  const dispatch = useDispatch();
  const { selectedBrand } = useSelector((state) => state.brand);
  const { id: brand_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBrandById(brand_id));
    return () => {
      dispatch(resetBrandState());
    };
  }, [dispatch, brand_id]);

  return (
    <S.Container>
      <S.Title>Brand Detail</S.Title>
      <S.ContainerContent>
        <S.ContainerImage>
          <S.ImageBrand src={selectedBrand.image} />
        </S.ContainerImage>
        <S.ContainerInformation>
          <S.DescriptionBrand>{selectedBrand.description}</S.DescriptionBrand>
        </S.ContainerInformation>
      </S.ContainerContent>
    </S.Container>
  );
}
