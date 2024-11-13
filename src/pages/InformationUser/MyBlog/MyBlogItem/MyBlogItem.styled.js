import styled from "styled-components";
import { DEVICES } from '../../../../config/responsiveUi';

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
  @media ${DEVICES.TABLET} {
    width: 100%;
    height: auto;
  }
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
font-size: var(--fs-sm);
  font-weight: var(--fw-semibold);
  margin: var(--s-1) 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET} {
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-md);
  }
`;

export const ContentBlog = styled.div`
 font-size: var(--fs-xs);
  width: 100%;
  margin-bottom: var(--s-3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${DEVICES.TABLET} {
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--fs-md);
  }
`;

export const HashtagBlog = styled.div`
 display: flex;
  flex-direction: row;
  gap: var(--s-1);
`;

export const Hashtag = styled.div`
  color: var(--white);
  
  padding: var(--s-1);
  background-color: var(--green-fresh);
  border-radius: var(--br-md);
  font-size: var(--fs-xs);
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-sm);
    margin: var(--s-1) 0;
  }
`;

export const RightContainer = styled.div`
flex: 2;
`;

export const StatusBlog = styled.div`
display: flex;
font-size: var(--fs-xs);
justify-content: center;
align-items: center;
height: 100%;
@media ${DEVICES.TABLET} {
    font-size: var(--fs-md);
  
}
`;