import CategoryItem from "./CategoryItem/CategoryItem";
import * as S from "./ListCategory.styled";

export default function ListCategory() {
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Categories</S.Title>
                <S.Divider />
            </S.TitleContainer>
            <S.ListCategory>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </S.ListCategory>
        </S.Container>
    )
}