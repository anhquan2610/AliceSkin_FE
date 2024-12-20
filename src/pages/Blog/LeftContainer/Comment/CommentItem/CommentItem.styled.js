import styled from "styled-components";
import { DEVICES } from "../../../../../config/responsiveUi";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-1);
  margin: var(--s-2) 0;
  @media ${DEVICES.TABLET}{
    gap: var(--s-2);
  margin: var(--s-4) 0;
  }
`;

export const ContainerImage = styled.div`
display: 2;
`;

export const ImgUser = styled.img`
aspect-ratio: 1/1;
width: 40px;
height: auto;
object-fit: cover;
overflow: hidden;
border-radius: 50%;
border: 2px solid var(--gray);
@media ${DEVICES.TABLET}{
  width: 50px;

}
`;

export const ContainerComment = styled.div`
width: auto;
display: 10;
display: flex;
flex-direction: column;
background-color: var(--gray-2);
padding: var(--s-2);
border-radius: var(--br-lg);
@media ${DEVICES.TABLET}{
  padding: var(--s-3);
}
`;

export const InformationUser = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-1);
padding-top: var(--s-1);
@media ${DEVICES.TABLET}{
  margin-bottom: var(--s-2);
}
`;

export const UserName = styled.div`
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
display: flex;
flex-direction: row;
align-items:  baseline;
@media ${DEVICES.TABLET}{
  font-size: var(--fs-md);
}
`;

export const UserRole = styled.div`
font-size: var(--fs-xs);
color: var(--dark-brown);
margin-left: var(--s-1);
font-style: italic;
@media ${DEVICES.TABLET}{
  font-size: var(--fs-sm);
}
`;

export const EmailUser = styled.div`
font-size: var(--fs-xs);
font-style: italic;
@media ${DEVICES.TABLET}{
  font-size: var(--fs-sm);
}
`;

export const DatePost = styled.div`
font-size: var(--fs-xs);
color: var(--dark-brown);

`;

export const ContentCommnet = styled.div`
margin-bottom: var(--s-2);
font-size: var(--fs-md);
`;

export const Group = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: var(--s-5);
align-items: center;

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

export const BtnDelete = styled.button`
background-color: transparent;
color: var(--gray-3);
font-size: var(--fs-md);
`;


export const ContainerReply = styled.div`
margin-left: var(--s-6);
@media ${DEVICES.TABLET}{
  margin-left: var(--s-16);
}
`;

export const CommentReply = styled.div``;