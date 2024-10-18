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
        <S.TitleBlog>{blog.title}</S.TitleBlog>
        <S.HashtagBlog>
          {blog.hashtags.map((hashtag, index) => (
            <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
          ))}
        </S.HashtagBlog>
        <S.ContentBlog>{blog.content}</S.ContentBlog>

        <Link
          to={{
            pathname: `/Update_Blog/${blog.blog_id}`,
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
