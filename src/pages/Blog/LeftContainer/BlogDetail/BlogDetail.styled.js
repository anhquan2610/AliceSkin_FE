import styled from "styled-components";
import { Name } from "../../../../components/infoBlog/infoUser/infoUser.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

export const AuthorBlog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AuthorContainer = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-1);
align-items: center;
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

export const AuthorName = styled(Name)`
  color: var(--green);
  font-size: var(--fs-xl);
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
  color: var(--dark-brown);
`;

export const TitleBlog = styled.div`
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerHashtags = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-1);
`;

export const Hashtag = styled.div`
  color: var(--white);
  padding: var(--s-2);
  background-color: var(--green-fresh);
  border-radius: var(--br-md);
  font-size: var(--fs-sm);
`;

export const LikeGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-1);
  align-items: center;
`;

export const HeartIcon = styled.div`
  font-size: var(--fs-md);
`;

export const HeartCount = styled.div`
  font-size: var(--fs-lg);
  color: var(--red);
  font-weight: var(--fw-bold);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageBlog = styled.div`
  margin-bottom: var(--s-3);
`;

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: var(--br-md);
`;

export const DescriptionBlog = styled.div`
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
`;

export const ContentBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
  margin-bottom: var(--s-5);
`;

export const Content = styled.div`
  font-size: var(--fs-lg);
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GroupNavigate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-2);
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  color: var(--gray);
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
`;

export const BtnNavigate = styled.div``;

export const IconNavigate = styled.div``;
