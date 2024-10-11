import * as S from "./HomePage.styled";
import Highlight from "./HightLight/HightLight";
import BlogStar from "./BlogStar/BlogStar";
import ListBlog from "./ListBlog/ListBlog";
import Instagram from "./Instagram/Instagram";

import { useState } from "react";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <S.Container>
      <S.ContainerOutLet>
        <Highlight />
        <BlogStar />
        <ListBlog />
        <Instagram />
      </S.ContainerOutLet>
    </S.Container>
  );
}
