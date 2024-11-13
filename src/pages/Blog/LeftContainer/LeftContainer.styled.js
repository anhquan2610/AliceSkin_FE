import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-3);
@media ${DEVICES.TABLET} {
    gap: var(--s-10);
}
`;


