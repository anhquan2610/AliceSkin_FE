import * as S from './infoBlog.styled';
import InfoUser from './infoUser/infoUser';
import DateOfBlog from './dateOfBlog/dateOfBlog';

export default function infoBlog() {
    return(
            <S.Container>
                <S.UserContainer>
                    <InfoUser />
                </S.UserContainer>
                <S.DateContainer>
                    <DateOfBlog />
                </S.DateContainer>
            </S.Container>
    )
}