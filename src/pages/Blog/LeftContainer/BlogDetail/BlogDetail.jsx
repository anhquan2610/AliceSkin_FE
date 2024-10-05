//Blog detail
import * as S from "./BlogDetail.styled";
import DateOfBlog from "../../../../components/infoBlog/dateOfBlog/dateOfBlog";
import InfoUser from "../../../../components/infoBlog/infoUser/infoUser";
import TypeBlog from "../../../../components/typeBlog/typeBlog";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogById } from "../../../../store/blogSlice";

export default function BlogDetail() {
  const { id: blogId } = useParams();
  const dispatch = useDispatch();

  const selectBlog = useSelector((state) => state.blog.selectedBlog);

  useEffect(() => {
    console.log("blog_id", blogId);
    dispatch(getBlogById(blogId));
  }, [dispatch, blogId]);

  return (
    <S.Container>
      <S.AuthorBlog>
        <S.Author>
          <InfoUser userId={selectBlog.user_id} />
        </S.Author>
        <S.Date>
          Posted on <DateOfBlog date={selectBlog.created_at} />
        </S.Date>
      </S.AuthorBlog>
      <S.TitleBlog>{selectBlog.title}</S.TitleBlog>
      <S.ContainerType>
        <S.HastagType>
          <TypeBlog />
        </S.HastagType>
        <S.LikeGroup>
          <S.HeartIcon>
            <i className="bi bi-heart"></i>
          </S.HeartIcon>
          <S.HeartCount>10</S.HeartCount>
        </S.LikeGroup>
      </S.ContainerType>
      <S.ContentContainer>
        <S.ImageBlog>
          <S.Img src={selectBlog.thumbnail} />
        </S.ImageBlog>
        <S.ContentBlog>
          <S.Content>{selectBlog.content}</S.Content>
        </S.ContentBlog>
      </S.ContentContainer>
    </S.Container>
  );
}
