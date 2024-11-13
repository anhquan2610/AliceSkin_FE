import styled from "styled-components";
import { DEVICES } from '../../../config/responsiveUi';

export const Container = styled.div`
display: flex;
flex-direction: column;
;
`;

export const HeaderContainer = styled.div`
display: flex;
`;

export const Title = styled.div`
font-size: var(--fs-xs);
background-color: var(--green);
flex: 2;
color: var(--white);
padding: var(--s-3) var(--s-2);
@media ${DEVICES.TABLET} {
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
}
`;

export const Divider = styled.div`
border-bottom: 4px solid var(--green);
flex: 10;
`;

export const ContainerFilter = styled.div`
display: flex;
margin: var(--s-2)  0;
flex-direction: row;
@media ${DEVICES.TABLET} {
    margin: var(--s-3)  0;
}
`;

export const LeftFilter = styled.div`
flex: 9;
`;

export const RightFilter = styled.div`
flex: 3;
`;

export const ContainerItem = styled.div``;