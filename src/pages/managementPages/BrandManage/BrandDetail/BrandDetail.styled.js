import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveUi";


export const Container = styled.div`


`;

export const Title = styled.div`
font-size: var(--fs-2xl);
font-weight: var(--fw-semibold);
`;

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 70vh;
width: 100%;

`;

export const ContainerImage = styled.div`


`;

export const ImageBrand = styled.img`
aspect-ratio: 16/9 ;
width: 100%;
height:200px;
object-fit: cover;
@media ${DEVICES.DESKTOP} {
    height:300px;
}
`;

export const ContainerInformation = styled.div`

margin-left: var(--s-5);
`;

export const NameBrand = styled.div``;

export const DescriptionBrand = styled.div``;