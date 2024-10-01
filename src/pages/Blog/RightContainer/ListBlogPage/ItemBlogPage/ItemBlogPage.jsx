import * as S from "./ItemBlogPage.styled";
import InfoUser from "../../../../../components/infoBlog/infoUser/infoUser";
import DateOfBlog from "../../../../../components/infoBlog/dateOfBlog/dateOfBlog";

export default function ItemBlogPage({blog}) {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgBlog src={blog.thumbnail} />
      </S.ContainerImage>
      <S.ContainerContent>
        <S.Title>{blog.title}</S.Title>
        <S.Description>{blog.content}</S.Description>
        <S.AuthorBlog>
          <S.Author>
            <InfoUser />
          </S.Author>
          <S.Date>
            <DateOfBlog />
          </S.Date>
        </S.AuthorBlog>
      </S.ContainerContent>
    </S.Container>
  );
}
