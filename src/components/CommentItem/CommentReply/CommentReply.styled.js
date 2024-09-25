import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
  padding-left: var(--s-18);
  margin-bottom: var(--s-5);
`;

export const ContainerImage = styled.div``;

export const ImgUser = styled.img`
  aspect-ratio: 4/3;
  object-fit: cover;
  overflow: hidden;
`;

export const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InformationUser = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-1);
padding-top: var(--s-1);
margin-bottom: var(--s-2);
`;

export const UserName = styled.div`
font-size: var(--fs-lg);
font-weight: var(--fw-semibold);
`;

export const DatePost = styled.div`
font-size: var(--fs-sm);
color: var(--dark-brown);
`;

export const ContentCommnet = styled.div`
margin-bottom: var(--s-2);
font-size: var(--fs-md);
`;

export const BtnAnswer = styled.div`
cursor: pointer;
font-size: var(--fs-sm);
color: var(--green);
text-decoration: underline;
margin-bottom: var(--s-2);
&:hover {
    color: var(--dark-gray);
    text-decoration: none;
}
`;

export const Divider = styled.div`
border: 1px solid var(--gray);

`;
