import * as S from "./HightLight.styled";
import TypeBlog from "../../../components/typeBlog/typeBlog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlog } from "../../../store/blogSlice";
import InfoUser from "../../../components/infoBlog/infoUser/infoUser";
import DateOfBlog from "../../../components/infoBlog/dateOfBlog/dateOfBlog";


export default function HightLight() {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  const blog = blogs.length > 0 ? blogs[0] : null;

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!blog) {
    return <p>No blogs available.</p>;
  }

  return (
    <S.Container>
      <S.Image src={blog.thumbnail}></S.Image>
      <S.BoxTitle>
        <S.CongfigBox>
          <TypeBlog />
          <S.Title>{blog.title}</S.Title>
          <S.Content>{blog.content}</S.Content>
          <S.AuthorContainer>
            <InfoUser userId={blog.user_id} />
            <DateOfBlog date={blog.created_at} />
          </S.AuthorContainer>
        </S.CongfigBox>
      </S.BoxTitle>
    </S.Container>
  );
}
