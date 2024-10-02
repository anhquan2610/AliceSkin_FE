import ListBlogPage from "./ListBlogPage/ListBlogPage";
import ListCategory from "./ListCategory/ListCategory";
import * as S from "./RightContainer.styled";

export default function RightContainer({onSelectdblog}) {
    return (
       <S.Container>
        <ListBlogPage onSelectdblog = {onSelectdblog} />
        <ListCategory />
       </S.Container>
    )
}