import * as S from "./MyBlogItem.styled";

export default function MyBlogItem({ blog }) {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageBlog src={blog.thumbnail} />
      </S.LeftContainer>
      <S.MiddleContainer>
        <S.TitleBlog>{blog.title}</S.TitleBlog>
        <S.ContentBlog>
          {blog.content}
        </S.ContentBlog>
        <S.HashtagBlog>
            {blog.hashtag}
        </S.HashtagBlog>
      </S.MiddleContainer>
      <S.RightContainer>
        <S.StatusBlog>{blog.status}</S.StatusBlog>
      </S.RightContainer>
    </S.Container>
  );
}
