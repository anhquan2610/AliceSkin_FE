import * as S from "./Instagram.styled";
import Item from "./Item/Item";

export default function Instagram() {
    return (
        <S.Container>
            <S.ContainerTitle>
                <S.Title>Flow Us On Instagram</S.Title>
            </S.ContainerTitle>
            <S.ContainerContent>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />               
            </S.ContainerContent>
        </S.Container>
    );
}