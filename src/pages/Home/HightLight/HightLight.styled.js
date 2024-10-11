import styled, { keyframes } from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-8);

`;

export const Image = styled.img`
position: relative;
height: auto;
width: 100%;
object-fit: cover;
aspect-ratio: 2/1;
border-radius: var(--br-md);
`;

export const BoxTitle = styled.div`
position: absolute;
bottom: 0;
margin-bottom:var(--s-5);
margin-left: var(--s-10);
padding: var(--s-5) ;
z-index: 1;
background-color: var(--white);
box-shadow: var(--shadow-2);
border-radius: var(--br-md);
font-size: var(--fs-sm);
width: 30%;
`;

export const ContainerHashtags = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1) ;
`;

export const Hashtag = styled.div`
color: var(--white);
padding: var(--s-2);
background-color: var(--green-fresh);
border-radius: var(--br-md);
font-size: var(--fs-sm);
`;

export const CongfigBox = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-2);
`;

export const AuthorContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const AuthorGroup = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1);
align-items: center;
`;

export const AuthorName = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
border-radius: 50%;
aspect-ratio: 1/1;
width: 50px;
height: 100%;
overflow: hidden;
object-fit: cover;
border: 2px solid var(--gray);
`;

export const Title = styled.div`
font-size: var(--fs-2xl);
font-weight: var(--fw-semibold);

`;

export const Content = styled.div`
font-size: var(--fs-md);
display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  border: 8px solid var(--gray);
  border-top: 8px solid var(--green);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.5s linear infinite;
  margin: 0 auto;
  `;
