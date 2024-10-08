import * as S from "./ItemBlog.styled";
import DateOfBlog from "../../../../components/infoBlog/dateOfBlog/dateOfBlog";
import Avatar from "../../../../assets/images/AvaUser.png";

export default function ItemBlog({ blog, navigate }) {
  const handleClick = () => {
    navigate(`/blog/${blog.blog_id}`);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ImageContainer>
        <S.Image src={blog.thumbnail}></S.Image>
      </S.ImageContainer>
      <S.ContentContainer>
        <S.ContainerHashtags>
          {blog.hashtags.map((hashtag, index) => (
            <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
          ))}
        </S.ContainerHashtags>
        <S.Title>{blog.title}</S.Title>
        <S.Description>{blog.content}</S.Description>
        <S.Infor>
          <S.AuthorGroup>
            <S.AvatarContainer>
              <S.Avatar src={Avatar} />
            </S.AvatarContainer>
            <S.AuthorName>{blog.user?.name}</S.AuthorName>
          </S.AuthorGroup>
          <DateOfBlog date={blog.created_at} />
        </S.Infor>
      </S.ContentContainer>
    </S.Container>
  );
}
