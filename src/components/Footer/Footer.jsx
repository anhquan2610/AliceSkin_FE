import * as S from "./Footer.styled";
import Logo from "../../assets/images/Logo.png";

export default function Footer() {
    return(
        <S.Container>
            <S.ContainerTop>
                <S.AboutContainer>
                    <S.Title>About Us</S.Title>
                    <S.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</S.Description>
                    <S.InforContact>
                        <S.InforEmail>Email : info@jstemplate.net</S.InforEmail>
                        <S.InforPhone>Phone : 880 123 456 789</S.InforPhone>
                    </S.InforContact>
                </S.AboutContainer>
                
                <S.QuickLinkContaier>
                    <S.Title>QuickLink</S.Title>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                </S.QuickLinkContaier>
                <S.QuickLinkContaier>
                    <S.Title>QuickLink</S.Title>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                    <S.Text>Home</S.Text>
                </S.QuickLinkContaier>
                <S.Newlester>
                    <S.TitleNewlester>
                        <S.Title>Weekly Newsletter</S.Title>
                        <S.Description>Get blog articles and offers via email</S.Description>
                    </S.TitleNewlester>
                    <S.SubcribeGroup>
                        <S.Input type="text" placeholder="Enter your email"/>
                        <S.Button>Subscribe</S.Button>
                    </S.SubcribeGroup>
                </S.Newlester>
            </S.ContainerTop>
            <S.Divider/>
            <S.ContainerBottom>
                <S.SocialContainer>
                    <S.SocialIcon>
                        <S.SocialImg src={Logo}/>
                    </S.SocialIcon>
                    <S.GroupName>
                        <S.NameWebsite>Alice Skin</S.NameWebsite>
                        <S.CopyRight>© 2021 Alice Skin. All Rights Reserved</S.CopyRight>
                    </S.GroupName>
                </S.SocialContainer>
                <S.MiddleGroup>
                <S.Text>Terms Of Use</S.Text>
                <S.Text>Privacy Policy</S.Text>
                <S.Text>Cookie Policy</S.Text>
            </S.MiddleGroup>
            <S.GoupIcon>
                <S.Text>1</S.Text>
                <S.Text>2</S.Text>
                <S.Text>3</S.Text>
            </S.GoupIcon>
            </S.ContainerBottom>
            
        </S.Container>
    )
}