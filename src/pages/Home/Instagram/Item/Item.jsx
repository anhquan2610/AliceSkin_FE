import * as S from './Item.styled';
import Photo from '../../../../assets/images/Photo.png';

export default function Item() {
    return (
        <S.Container>
            <S.Image src={Photo} />
        </S.Container>
    );
}