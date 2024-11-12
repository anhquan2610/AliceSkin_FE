import styled, { keyframes } from "styled-components";
import { DEVICES } from "../../../config/responsiveUi";


export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: var(--s-8);
position: relative;
`;

export const Image = styled.img`
height: auto;
width: 100%;
object-fit: cover;
aspect-ratio: 2/1;
border-radius: var(--br-md);
`;

export const BoxTitle = styled.div`
position: absolute;
bottom: 0;
padding: var(--s-2);
z-index: 1;
margin-top: var(--s-4);
margin-left: var(--s-2);
background-color: transparent;
box-shadow: var(--shadow-2);
border-radius: var(--br-md);
font-size: var(--fs-sm);
width: 60%;
border: 2px solid var(--white);
@media ${DEVICES.DESKTOP} {
  border: none;
  background-color: var(--white);
  width: 40%;
  margin-top: var(--s-10);
  margin-left: var(--s-10);
  padding: var(--s-3) ;
}

`;

export const ContainerHashtags = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1) ;
`;

export const Hashtag = styled.div`
color: var(--white);
padding: var(--s-1);
background-color: var(--green-fresh);
border-radius: var(--br-md);
font-size: var(--fs-xs);
font-weight: var(--fw-semibold);
@media ${DEVICES.DESKTOP} {
  font-size: var(--fs-md);
  padding: var(--s-2);
}

`;

export const CongfigBox = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-1);
`;

export const AuthorContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: var(--s-1);
align-items: center;
`;

export const AuthorGroup = styled.div`
display: flex;
flex-direction: row;

align-items: center;
`;

export const AuthorName = styled.div`
font-size: var(--fs-sm);
font-weight: var(--fw-semibold);
@media ${DEVICES.DESKTOP} {
  font-size: var(--fs-md);
}
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
border-radius: 50%;
aspect-ratio: 1/1;
width: 30px;
height: 100%;
overflow: hidden;
object-fit: cover;
border: 2px solid var(--gray);
@media ${DEVICES.DESKTOP} {
  width: 50px;
}
`;

export const Title = styled.div`
font-size: var(--fs-md);
font-weight: var(--fw-semibold);
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
@media ${DEVICES.DESKTOP} {
  font-size: var(--fs-2xl);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

export const Content = styled.div`
font-size: var(--fs-sm);
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
@media ${DEVICES.DESKTOP} {
  font-size: var(--fs-lg);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-md);
}
@media ${DEVICES.PHONE_L} {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-md);
}
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

export const LikeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: var(--s-1) ;
justify-content: flex-end;
`;

export const IconLike = styled.div`
font-size: var(--fs-xl);
color: var(--blue);
`;

export const CountLike = styled.div`
font-size: var(--fs-xl);
`;
