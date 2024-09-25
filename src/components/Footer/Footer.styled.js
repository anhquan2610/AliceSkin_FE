import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
border: 3px solid var(--gray);
padding: var(--s-5) ;
`;

export const ContainerTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-5);
flex: 4;
padding: 0 var(--s-5) 0 0;
;
`;

export const Title = styled.div`
font-size: var(--fs-xl);
font-weight: var(--fw-semibold);

`;

export const Description = styled.div`
font-size: var(--fs-sm);
`;

export const InforContact = styled.div`
display: flex;
flex-direction: column;
font-size: var(--fs-sm);
`;

export const InforEmail = styled.div``;

export const InforPhone = styled.div``;

export const QuickLinkContaier = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-5);
flex:2;
`;

export const Newlester = styled.div`
display: flex;
flex-direction: column;
gap: var(--s-5);
flex: 3;
align-items: center;
justify-content: center;
`;

export const TitleNewlester = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

export const SubcribeGroup = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: var(--s-2);

`;

export const Input = styled.input`
padding: var(--s-3);
border: 1px solid var(--gray);


`;

export const Button = styled.button`
padding: var(--s-3);
background-color: var(--green-fresh);
color: var(--white);
width: 100%;
cursor: pointer;
`;

export const Text = styled.div``;

export const Divider = styled.div`
border: 1px solid var(--gray);
width: 100%;
margin: var(--s-5) 0;
`;    

export const ContainerBottom = styled.div`
display: flex;
flex-direction: row;
align-items: center;
;
`;

export const SocialContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;

gap: var(--s-1);
`;

export const SocialIcon = styled.div``;

export const SocialImg = styled.img`
aspect-ratio: 1;
object-fit: cover;
width: 100%;
height: 100%;
`;

export const GroupName = styled.div`
font-size: var(--fs-sm);

`;

export const NameWebsite = styled.div`
font-weight: var(--fw-semibold);
`;

export const  CopyRight = styled.div``;

export const MiddleGroup = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-4);
margin-left: var(--s-15);
`;

export const GoupIcon = styled.div`
display: flex;
flex-direction: row;
gap: var(--s-4);
margin-left: var(--s-15);
`;

