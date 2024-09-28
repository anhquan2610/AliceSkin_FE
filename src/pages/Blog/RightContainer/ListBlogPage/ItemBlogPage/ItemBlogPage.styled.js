import styled from "styled-components";
import { DateContainer } from "../../../../../components/infoBlog/dateOfBlog/dateOfBlog.styled"

export const Container = styled.div`
display: flex;
gap: var(--s-2);
margin-bottom: var(--s-3);
box-shadow: var(--shadow-1);
  padding: var(--s-4);
  border-radius: var(--br-xl);
  overflow: hidden;
`;

export const ContainerImage = styled.div`
flex: 5;
`;

export const ImgBlog = styled.img`
aspect-ratio: 1;
object-fit: cover;
width: 100%;
height: auto;
`;

export const ContainerContent = styled.div`
flex: 7;
`;

export const Title = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
margin: var(--s-2) 0;
display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.div`
font-size: var(--fs-xs);
  width: 100%;
  margin-bottom: var(--s-3);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AuthorBlog = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Author = styled.div`
font-size: var(--fs-xs);
`;

export const Date = styled(DateContainer)`
font-size: var(--fs-xs);
color: var(--dark-brown);

`;



