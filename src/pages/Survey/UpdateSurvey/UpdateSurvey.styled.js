import styled from "styled-components";
import bgr1 from "../../../assets/images/bgr1.png";
import { DEVICES } from "../../../config/responsiveUi";

export const Container = styled.div`
  padding: var(--s-3) var(--s-10);
  width: 100%;
  height: auto;
  background-image: url(${bgr1});
  @media ${DEVICES.DESKTOP} {
    padding: var(--s-5) var(--s-30);
  }
`;

export const TitleContaienr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  gap: var(--s-1);
`;

export const Title = styled.div`
font-size: var(--fs-lg);
`;

export const IconTitle = styled.div``;

export const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  gap: var(--s-5);
  margin-top: var(--s-5);
  @media ${DEVICES.TABLET} {
    height: 70vh;
    margin-top: var(--s-10);
  }
`;

export const Question = styled.div``;

export const QuestionText = styled.div`
  font-size: var(--fs-lg);
  margin-bottom: var(--s-2);
`;

export const OptionContainer = styled.div``;

export const Option = styled.label`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  margin-bottom: var(--s-1);
  font-size: var(--fs-lg);
`;

export const RadioButton = styled.input.attrs({ type: "radio" })``;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnSubmit = styled.button`
  padding: var(--s-3) var(--s-15);
  background-color: transparent;
  font-size: var(--fs-md);
  border: 1px solid var(--black);
  color: var(--black);
  border-radius: var(--br-md);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
  box-shadow: var(--shadow-1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--white); 
    transition: left 0.4s ease;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
  }
  &:hover {
    color: var(--black);
    border: 1px solid var(--black);
  }
`;
