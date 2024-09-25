import * as S from './HightLight.styled';
import HightLight1 from "../../../assets/images/HightLight1.png";
import TypeBlog from '../../../components/typeBlog/typeBlog';
import InfoBlog from '../../../components/infoBlog/infoBlog';

export default function HightLight() {
    return (
        <S.Container>
            <S.Image src={HightLight1} />
            <S.BoxTitle>
                <S.CongigBox>
                    <TypeBlog /> 
                    <S.Title>
                    Seja bem-vindo(a) ao nosso site!
                    Conheça nossos produtos e aproveite as promoções.
                    </S.Title>
                    <InfoBlog />
                </S.CongigBox>
            </S.BoxTitle>
        </S.Container>
    );
}