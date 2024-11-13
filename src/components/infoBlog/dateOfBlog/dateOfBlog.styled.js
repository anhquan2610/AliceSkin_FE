import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div``;

export const DateContainer = styled.div`
  font-weight: var(--fw-bold);
  font-style: italic;
  font-size: var(--fs-xs);
  color: var(--light-gray-2);
  @media ${DEVICES.DESKTOP} {
    color: var(--dark-brown);
  }
`;
