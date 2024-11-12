import styled from 'styled-components';
import { DEVICES } from '../../config/responsiveUi';

export const Container = styled.div``;

export const ContainerOutLet = styled.div`
display: flex;
flex-direction: column;
padding: var(--s-3) var(--s-10);
height: auto;
@media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-30);
    gap: var(--s-5);
}
`;

