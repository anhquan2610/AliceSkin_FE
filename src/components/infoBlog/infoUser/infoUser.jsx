import * as S from './infoUser.styled';
import ImageUser from '../../../assets/images/AvaUser.png';

export default function InfoUser() {
    return (
        <S.Container1>
            <S.Image src={ImageUser} />
            <S.Name>Jonh Cena</S.Name>
        </S.Container1>
    );
}