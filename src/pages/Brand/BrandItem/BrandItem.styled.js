import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
aspect-ratio: 16/9;
width: auto;
height: 120px;
object-fit: cover;
border-radius: var(--br-lg);
@media ${DEVICES.TABLET} {
    height: 150px;
}
`;

export const InfoContainer = styled.div``;

export const Name = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
font-style: italic;
@media ${DEVICES.TABLET} {
    ont-size: var(--fs-lg);
}
`;