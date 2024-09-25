import TypeBlog from "../../../../components/typeBlog/typeBlog";
import InfoBlog from "../../../../components/infoBlog/infoBlog";
import * as S from "./ItemBlog.styled";
import ItemList from "../../../../assets/images/itemList.png";


export default function ItemBlog() {
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={ItemList}></S.Image>
            </S.ImageContainer>
            <S.ContentContainer>
                <S.Type>
                    <TypeBlog />
                </S.Type>
                <S.Title>Top 10 Sunscreens in 2024</S.Title>
                <S.Description>Distinguishing Mineral Sunscreens from Chemical Sunscreens</S.Description>
                <S.Infor>
                    <InfoBlog />
                </S.Infor>
            </S.ContentContainer> 
        </S.Container>
    );
}