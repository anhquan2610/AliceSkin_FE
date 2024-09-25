
import * as S from './BlogStar.styled';
import Secondary from './Secondary/Secondary';
import BlogStat from '../../../assets/images/blogStar.png';

export default function BlogStar() {
    return (
        <S.Container>
           <S.LeftContainer>
            <S.Image src={BlogStat} />
           </S.LeftContainer>
           <S.RightContainer>
            <Secondary />
           </S.RightContainer>
        </S.Container>
    );
}