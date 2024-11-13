import styled from "styled-components";
import { DateContainer } from "../../../../../components/infoBlog/dateOfBlog/dateOfBlog.styled";
import { DEVICES } from "../../../../../config/responsiveUi";

export const Container = styled.div`
  display: flex;
  gap: var(--s-2);
  margin-bottom: var(--s-3);
  box-shadow: var(--shadow-1);
  padding: var(--s-4);
  border-radius: var(--br-xl);
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow-2);
    transform: scale(1.05);
  }
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  margin: var(--s-1) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET}{
    font-size: var(--fs-md);
  }
`;

export const ContainerHashtags = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-1);
`;

export const Hashtag = styled.div`
  color: var(--white);
  padding: var(--s-1);
  margin: var(--s-1) 0;
  background-color: var(--green-fresh);
  border-radius: var(--br-md);
  font-size: var(--fs-xs);
`;

export const Description = styled.div`
  font-size: var(--fs-xs);
  width: 100%;
  margin-bottom: var(--s-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET}{
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: var(--s-3);
  }
`;

export const AuthorBlog = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: var(--s-1);
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
border-radius: 50%;
aspect-ratio: 1;
width: 30px;
height: auto;
overflow: hidden;
object-fit: cover;
border: 2px solid var(--gray);
@media ${DEVICES.TABLET}{
  width: 40px;
}
`;

export const AuthorName = styled.div`
  
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
`;



export const Date = styled(DateContainer)`
  font-size: var(--fs-xs);
  color: var(--dark-brown);
`;
