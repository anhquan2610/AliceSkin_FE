import styled from "styled-components";
import {DEVICES} from "../../config/responsiveUi"

export const Container = styled.form`
display: flex;
padding: var(--s-3) var(--s-10);
flex-direction: column;
height: 130vh;
@media ${DEVICES.DESKTOP} {
  padding: var(--s-5) var(--s-30);
}
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-5);
`;

export const LeftTopContainer = styled.div`
flex: 10;
display: flex;
flex-direction: column;
gap: var(--s-3);
`;

export const Title = styled.div`
font-size: var(--fs-xl);
text-align: center;
font-weight: var(--fw-semibold);
color: var(--black);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-3xl);
  text-align: start;
}
`;

export const Description = styled.div`
font-size: var(--fs-xs);
text-align: center;
color: var(--black);
margin-bottom: var(--s-2);
@media ${DEVICES.TABLET} {
  font-size: var(--fs-md);
  text-align: start;
}
`;

export const Group = styled.div`
display: flex;
flex-direction: column;
width: 100%;
position: relative;
`;

export const Label = styled.label`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
margin-bottom: var(--s-1);
`;

export const Input = styled.input`
border: 2px solid var(--gray);
padding: var(--s-2);
border-radius: var(--br-md);
font-size: var(--fs-md);
width: 100%;
`;

export const RightTopContainer = styled.div`
display: none;
@media ${DEVICES.TABLET} {
  flex: 2;
display: flex;
justify-content: center;
align-items: center;
}
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
aspect-ratio: 1/1;
height: 100%;
width: auto;
object-fit: cover;
overflow: hidden;
`;

export const BottomContainer = styled.div`
display: flex;
height: 100%;
`;

export const LeftBottomContainer = styled.div`
flex: 8;
`;

export const GroupContent = styled.div`
height: 100%;
`;

export const ContentInput = styled.textarea`
width: 100%;
height: 100%;
border: 2px solid var(--gray);
padding: var(--s-2);
margin-top: var(--s-1);
border-radius: var(--br-md);
resize: none;
font-size: var(--fs-md);
`;

export const RightBottomContainer = styled.div`
display: none;
@media ${DEVICES.TABLET} {
  flex: 4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: var(--s-3);
}
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: var(--s-10);

`;

export const BtnSubmit = styled.button`
background-color: var(--green);
color: var(--white);
padding: var(--s-3) var(--s-15);
cursor: pointer;
border-radius: var(--br-md);
font-size: var(--fs-lg);
`;

export const HashtagSuggestionsContainer = styled.div`
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const HashtagContainer = styled.div`
  margin: 5px;
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  padding: var(--s-2);
  border-radius: var(--br-md);
`;

export const RemoveHashtagButton = styled.button`
  margin-left: var(--s-2);
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--white);
`;

export const SuggestionsWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--gray);
  border-radius: var(--br-md);
  max-height: 150px; 
  overflow-y: auto; 
  z-index: 10; 
`;


export const SelectedHashtagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
  
`;