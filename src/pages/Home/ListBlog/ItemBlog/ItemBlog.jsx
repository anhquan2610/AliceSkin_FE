import TypeBlog from "../../../../components/typeBlog/typeBlog";
import InfoBlog from "../../../../components/infoBlog/infoBlog";
import * as S from "./ItemBlog.styled";
import ItemList from "../../../../assets/images/itemList.png";


export default function ItemBlog({blog}) {
    
    
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={ItemList}></S.Image>
            </S.ImageContainer>
            <S.ContentContainer>
                <S.Type>
                    <TypeBlog />
                </S.Type>
                <S.Title>{blog.title}</S.Title>
                <S.Description>{blog.content}</S.Description>
                <S.Infor>
                    <InfoBlog />
                </S.Infor>
            </S.ContentContainer> 
        </S.Container>
    );
}