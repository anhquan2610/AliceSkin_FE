import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
  padding: var(--s-3) var(--s-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--s-3);
  font-style: italic;
  font-weight: var(--fw-bold);
  @media ${DEVICES.TABLET} {
    padding: var(--s-5) var(--s-30);
    min-height: 80vh;
  }
`;

export const ContainerImage = styled.div``;

export const Image = styled.img`
  aspect-ratio: 1;
  width: auto;
  height:200px;
  object-fit: contain;
  @media ${DEVICES.TABLET} {
    height: 400px;
  }
`;

export const Text = styled.div`
  font-size: var(--fs-md);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-lg);
  }
`;

export const Text2 = styled.div`
  font-size: var(--fs-xs);
  text-align: center;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-lg);
  }
`;

export const UrlLink = styled.a`
  color: var(--green);
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
  font-size: var(--fs-xs);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  }
`;

export const UrlContainer = styled.div`
  margin-top: var(--s-2);
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: var(--fs-sm);
  @media ${DEVICES.TABLET} {
    flex-direction: row;
  }
`;

export const Text3 = styled.p`
  font-weight: bold;
`;
