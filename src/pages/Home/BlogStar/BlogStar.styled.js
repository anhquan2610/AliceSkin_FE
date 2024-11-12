import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: var(--s-10);   
@media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-10);
}
`;

export const LeftContainer = styled.div`
display: none;
@media ${DEVICES.PHONE_L} {
    display: unset;
}
`;

export const Image = styled.img`
height: auto;
width: 300px;
aspect-ratio: 1;
object-fit: contain;
`;

export const RightContainer = styled.div``;