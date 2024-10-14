import styled from "styled-components";

export const Container = styled.form`
display: flex;
padding: var(--s-5) var(--s-30);
flex-direction: column;
height: 130vh;
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
font-size: var(--fs-3xl);
font-weight: var(--fw-semibold);
color: var(--black);
`;

export const Description = styled.div`
font-size: var(--fs-md);
color: var(--black);
margin-bottom: var(--s-2);
`;

export const Group = styled.div`
display: flex;
flex-direction: column;
width: 100%;
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
flex: 2;
display: flex;
justify-content: center;
align-items: center;
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
flex: 4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: var(--s-3);
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

