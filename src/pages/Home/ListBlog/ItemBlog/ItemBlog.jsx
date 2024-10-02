import TypeBlog from "../../../../components/typeBlog/typeBlog";
import InfoBlog from "../../../../components/infoBlog/infoBlog";
import * as S from "./ItemBlog.styled";
import ItemList from "../../../../assets/images/itemList.png";
import InfoUser from "../../../../components/infoBlog/infoUser/infoUser";
import DateOfBlog from "../../../../components/infoBlog/dateOfBlog/dateOfBlog"

export default function ItemBlog({blog}) {
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={blog.thumbnail}></S.Image>
            </S.ImageContainer>
            <S.ContentContainer>
                <S.Type>
                    <TypeBlog />
                </S.Type>
                <S.Title>{blog.title}</S.Title>
                <S.Description>{blog.content}</S.Description>
                <S.Infor>
                    <InfoUser />
                    <DateOfBlog date={blog.created_at} />
                </S.Infor>
            </S.ContentContainer> 
        </S.Container>
    );
}   