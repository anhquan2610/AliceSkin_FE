import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import * as S from "./Blog.styled";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null); 

  return (
    <S.Container>
      <Navbar />
      <S.ContainerOutlet>
        <S.LeftContainer>
            <LeftContainer blog ={selectedBlog} />
        </S.LeftContainer>
        <S.RightContainer>
            <RightContainer onSelect = {setSelectedBlog}/>
        </S.RightContainer>
        <Footer />
      </S.ContainerOutlet>
      
    </S.Container>
  );
}
