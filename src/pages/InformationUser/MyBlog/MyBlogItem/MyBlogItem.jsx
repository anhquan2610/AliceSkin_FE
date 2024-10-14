import { Link } from "react-router-dom";
import * as S from "./MyBlogItem.styled";

export default function MyBlogItem({ blog }) {
  const isPublished = blog.status === "published";
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageBlog src={blog.thumbnail} />
      </S.LeftContainer>
      <S.MiddleContainer>
        <div>{blog.blog_id}</div>
        <S.TitleBlog>{blog.title}</S.TitleBlog>
        <S.ContentBlog>{blog.content}</S.ContentBlog>
        <S.HashtagBlog>{blog.hashtags}</S.HashtagBlog>
        <Link
          to={{
            pathname: `/UpdateBlog/${blog.blog_id}`,
            state: { blog_id: blog.blog_id },
          }}
        >
          <S.IconEdit className={isPublished ? "disabled" : ""}>
            <i className="bi bi-pencil-square"></i>
          </S.IconEdit>
        </Link>
      </S.MiddleContainer>
      <S.RightContainer>
        <S.StatusBlog>{blog.status}</S.StatusBlog>
      </S.RightContainer>
    </S.Container>
  );
}
