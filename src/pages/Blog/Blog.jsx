
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./Blog.styled";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

export default function Blog() {
 

  return (
    <S.Container>
      <Navbar />
      <S.ContainerOutlet>
        <S.LeftContainer>
            <LeftContainer  />
        </S.LeftContainer>
        <S.RightContainer>
            <RightContainer />
        </S.RightContainer>
        <Footer />
      </S.ContainerOutlet>
      
    </S.Container>
  );
}
