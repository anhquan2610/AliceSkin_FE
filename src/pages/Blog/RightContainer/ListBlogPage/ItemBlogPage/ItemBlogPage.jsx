import * as S from "./ItemBlogPage.styled";
import Avatar from "../../../../../assets/images/AvaUser.png";
import DateOfBlog from "../../../../../components/infoBlog/dateOfBlog/dateOfBlog";

export default function ItemBlogPage({ blog, navigate }) {
  const handleClick = () => {
    navigate(`/blog/${blog.blog_id}`); // Adjust the URL as needed
  };
  return (
    <S.Container onClick={handleClick}>
      <S.ContainerImage>
        <S.ImgBlog src={blog.thumbnail} />
      </S.ContainerImage>
      <S.ContainerContent>
        <S.Title>{blog.title}</S.Title>
        <S.Description>{blog.content}</S.Description>
        <S.AuthorBlog>
          <S.AuthorContainer>
            <S.AvatarContainer>
              <S.Avatar src={Avatar} />
            </S.AvatarContainer>
            <S.AuthorName>{blog.user?.name}</S.AuthorName>
          </S.AuthorContainer>
          <S.Date>
            <DateOfBlog date={blog.created_at} />
          </S.Date>
        </S.AuthorBlog>
      </S.ContainerContent>
    </S.Container>
  );
}
