import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBlog } from "../../../store/blogSlice";
import { useEffect } from "react";
import DateOfBlog from "../../../components/infoBlog/dateOfBlog/dateOfBlog";
import * as S from "./HightLight.styled";

export default function HightLight() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.blog);
  const blogs = useSelector((state) => state.blog.blogs);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  const handleBlogClick = () => {
    if (blog && blog.blog_id) {
      navigate(`/blog/${blog.blog_id}`);
    }
  };

  
  const blog =
    blogs.length > 0 ? blogs[Math.floor(Math.random() * blogs.length)] : null;

  if (isLoading) {
    return <S.LoadingSpinner />;
  }

  
  if (!blog || !blog.thumbnail) {
    return <div>No blog available</div>;
  }

  return (
    <S.Container onClick={handleBlogClick}>
      <S.Image src={blog.thumbnail} alt="Blog Thumbnail"></S.Image>

      <S.BoxTitle>
        <S.CongfigBox>
          <S.ContainerHashtags>
            {blog.hashtags &&
              blog.hashtags.map((hashtag, index) => (
                <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
              ))}
          </S.ContainerHashtags>
          <S.Title>{blog.title}</S.Title>
          <S.Content>{blog.content}</S.Content>
          <S.AuthorContainer>
            <S.AuthorGroup>
              <S.AvatarContainer>
                <S.Avatar src={blog.user?.image || ""} alt="Author Avatar" />
              </S.AvatarContainer>
              <S.AuthorName>{blog.user?.name}</S.AuthorName>
            </S.AuthorGroup>
            <DateOfBlog date={blog.created_at} />
          </S.AuthorContainer>
          {/* <S.LikeContainer>
            <S.IconLike>
              <i className="bi bi-hand-thumbs-up-fill"></i>
            </S.IconLike>
            <S.CountLike>{blog.like}</S.CountLike>
          </S.LikeContainer> */}
        </S.CongfigBox>
      </S.BoxTitle>
    </S.Container>
  );
}
