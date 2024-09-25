import ItemBlog from './ItemBlog/ItemBlog';
import * as S from './ListBlog.styled';

export default function ListBlog() {
    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>Latest Post</S.Title>
                <S.Filter>Filter</S.Filter>
            </S.TopContainer>
            <S.ListItem>
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
                <ItemBlog />
            </S.ListItem>
        </S.Container>
    );
}