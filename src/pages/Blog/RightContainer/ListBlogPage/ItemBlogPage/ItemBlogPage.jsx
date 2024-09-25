import * as S from "./ItemBlogPage.styled";
import List from "../../../../../assets/images/list.png";
import InfoUser from "../../../../../components/infoBlog/infoUser/infoUser";
import DateOfBlog from "../../../../../components/infoBlog/dateOfBlog/dateOfBlog";

export default function ItemBlogPage() {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgBlog src={List} />
      </S.ContainerImage>
      <S.ContainerContent>
        <S.Title>
          A UX Case Study Creating a Studious Environment for Students
        </S.Title>
        <S.Description>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </S.Description>
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
