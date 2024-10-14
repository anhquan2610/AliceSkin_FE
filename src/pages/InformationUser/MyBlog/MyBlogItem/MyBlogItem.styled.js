import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-2);
border-bottom: 2px solid var(--gray);
border-bottom-style: dashed;
margin-bottom: var(--s-2);
`;

export const LeftContainer = styled.div`
flex: 2;
margin-bottom: var(--s-2);
`;

export const ImageBlog = styled.img`
aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export const MiddleContainer = styled.div`
flex: 8;
`;

export const IconEdit = styled.div`
justify-content: flex-end;
display: flex;
font-size: var(--fs-xl);
color: var(--gray);
cursor: pointer;
&:hover {
    color: var(--green);
}
&.disabled { 
    display: none;
  }
`;

export const TitleBlog = styled.div`
font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  margin: var(--s-2) 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ContentBlog = styled.div`
 font-size: var(--fs-md);
  width: 100%;
  margin-bottom: var(--s-3);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const HashtagBlog = styled.div``;

export const RightContainer = styled.div`
flex: 2;
`;

export const StatusBlog = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;