import ItemProduct from "./ItemProduct/ItemProduct";
import * as S from "./ListProduct.styled";

export default function ListProduct() {
    return (
        <S.Container>
            <S.HeaderContainer>
                <S.TotalProduct>Total: 900</S.TotalProduct>
                <S.FilterContainer>
                    <S.TextFilter>Sort By:</S.TextFilter>
                    <S.Filter>Filter</S.Filter>
                </S.FilterContainer>
            </S.HeaderContainer>
            <S.ListContainer>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </S.ListContainer>
        </S.Container>
    );
}