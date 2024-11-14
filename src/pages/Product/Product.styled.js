import styled from "styled-components";
import { DEVICES } from '../../config/responsiveUi';

export const Container = styled.div``;

export const ContainerOutlet = styled.div`
display: flex;
flex-direction: column;
padding: var(--s-3) var(--s-10);
gap: var(--s-2);
height: auto;
@media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-30);
    gap: var(--s-5);
}
`;

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: var(--s-5);
`;

export const Title = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
@media ${DEVICES.TABLET} {
    font-size: var(--fs-2xl);
}
`;

export const ProductContainer = styled.div`
display: flex;
flex-direction: row;

gap: var(--s-2);
@media ${DEVICES.TABLET} {
    gap: var(--s-5);

}
`;

export const LeftContainer = styled.div`
flex: 3;
display: flex;
flex-direction: column;
gap: var(--s-3);
`;

export const RightContainer = styled.div`
flex: 9;
`;