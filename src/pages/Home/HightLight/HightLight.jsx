import * as S from "./HightLight.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlog } from "../../../store/blogSlice";
import DateOfBlog from "../../../components/infoBlog/dateOfBlog/dateOfBlog";
import { useNavigate } from "react-router-dom";

export default function HightLight() {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  const handleBlogClick = () => {
    navigate(`/blog/${blog.blog_id}`);
  };

  const blog = blogs[Math.floor(Math.random() * blogs.length)];

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
    <S.Container onClick={handleBlogClick}>
      <S.Image src={blog.thumbnail}></S.Image>
      <S.BoxTitle>
        <S.CongfigBox>
          <S.ContainerHashtags>
            {blog.hashtags.map((hashtag, index) => (
              <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
            ))}
          </S.ContainerHashtags>
          <S.Title>{blog.title}</S.Title>
          <S.Content>{blog.content}</S.Content>
          <S.AuthorContainer>
            <S.AuthorGroup>
              <S.AvatarContainer>
                <S.Avatar src={blog.user?.image}></S.Avatar>
              </S.AvatarContainer>
              <S.AuthorName>{blog.user?.name}</S.AuthorName>
            </S.AuthorGroup>
            <DateOfBlog date={blog.created_at} />
          </S.AuthorContainer>
        </S.CongfigBox>
      </S.BoxTitle>
    </S.Container>
  );
}
