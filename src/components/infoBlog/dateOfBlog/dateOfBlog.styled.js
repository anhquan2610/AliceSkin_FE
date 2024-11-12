import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div``;

export const DateContainer = styled.div`
  font-weight: var(--fw-bold);
  color: var(--dark-brown);
  font-size: var(--fs-xs);
  @meida ${DEVICES.DESKTOP} {
    font-size: var(--fs-md);
  }
`;
