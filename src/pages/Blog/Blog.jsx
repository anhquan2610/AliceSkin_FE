import * as S from "./Blog.styled";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { useSelector } from "react-redux";

export default function Blog() {
  const blogs = useSelector((state) => state.blog.blogs); // Lấy danh sách blog từ Redux

  return (
    <S.Container>
      <S.ContainerOutlet>
        {blogs && blogs.length > 0 ? (
          <>
            <S.LeftContainer>
              <LeftContainer />
            </S.LeftContainer>
            <S.RightContainer>
              <RightContainer />
            </S.RightContainer>
          </>
        ) : (
          <S.NoBlogsMessage>No blogs available.</S.NoBlogsMessage>
        )}
      </S.ContainerOutlet>
    </S.Container>
  );
}
