import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--s-10);
`;

export const ContainerTitle = styled.div`
  padding: var(--s-5) 0;
`;

export const Title = styled.div`
  font-weight: var(--fw-semibold);
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--s-4); 
`;

export const HoverContainer = styled.div`
  position: relative;
  
  overflow: hidden;
  border-radius: var(--br-md); 
`;

export const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 200px;
  height: 300px;
  transition: filter 0.3s ease, transform 0.3s ease;
`;

export const InstagramIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const HoverEffect = styled.div`
  position: relative;
  
  &:hover {
    ${Image} {
      filter: blur(5px); 
      transform: scale(1.1); 
    }

    ${InstagramIcon} {
      opacity: 1; 
    }
  }
`;
