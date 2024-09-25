import ListBlogPage from "./ListBlogPage/ListBlogPage";
import ListCategory from "./ListCategory/ListCategory";
import * as S from "./RightContainer.styled";

export default function RightContainer() {
    return (
       <S.Container>
        <ListBlogPage />
        <ListCategory />
       </S.Container>
    )
}