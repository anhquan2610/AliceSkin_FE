import * as S from "./ItemBlogPage.styled";
import InfoUser from "../../../../../components/infoBlog/infoUser/infoUser";
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
          <S.Author>
            <InfoUser userId={blog.user_id} />
          </S.Author>
          <S.Date>
            <DateOfBlog date={blog.created_at} />
          </S.Date>
        </S.AuthorBlog>
      </S.ContainerContent>
    </S.Container>
  );
}
