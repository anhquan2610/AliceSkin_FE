import ItemBlogPage from "./ItemBlogPage/ItemBlogPage";
import * as S from "./ListBlogPage.styled";

export default function ListBlogPage() {
  return (
    <S.Container>
        <S.TitleContainer>
            <S.Title>Blog</S.Title>
            <S.Divider />
        </S.TitleContainer>
        <S.ListBlog>
            <ItemBlogPage/>
            <ItemBlogPage/>
            <ItemBlogPage/>
        </S.ListBlog>
    </S.Container>
  );
}
