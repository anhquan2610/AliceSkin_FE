import { useState, useEffect } from "react";
import * as S from "./BlogDetail.styled";
import DateOfBlog from "../../../../components/infoBlog/dateOfBlog/dateOfBlog";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogById,
  likeByBlogId,
  unlikeByBlogId,
} from "../../../../store/blogSlice";

export default function BlogDetail() {
  const { id: blogId } = useParams();
  const dispatch = useDispatch();

  const selectBlog = useSelector((state) => state.blog.selectedBlog);
  const [likedBlogs, setLikedBlogs] = useState({});

  const handleLike = () => {
    const isLiked = likedBlogs[blogId];

  
    if (isLiked) {
      dispatch(unlikeByBlogId(blogId)).then(() => {
        setLikedBlogs((prevState) => ({
          ...prevState,
          [blogId]: false, 
        }));
      });
    } else {
      dispatch(likeByBlogId(blogId)).then(() => {
        setLikedBlogs((prevState) => ({
          ...prevState,
          [blogId]: true, 
        }));
      });
    }
  };

  useEffect(() => {
    dispatch(getBlogById(blogId)); 
  }, [dispatch, blogId]);

  useEffect(() => {
    setLikedBlogs((prevState) => ({
      ...prevState,
      [blogId]: selectBlog.liked_by_user || false, 
    }));
  }, [selectBlog, blogId]);

  return (
    <S.Container>
      <S.AuthorBlog>
        <S.AuthorContainer>
          <S.AvatarContainer>
            <S.Avatar src={selectBlog.user?.image} />
          </S.AvatarContainer>
          <S.AuthorName>{selectBlog.user?.name}</S.AuthorName>
        </S.AuthorContainer>
        <S.Date>
           <DateOfBlog date={selectBlog.created_at} />
        </S.Date>
      </S.AuthorBlog>
      <S.TitleBlog>{selectBlog.title}</S.TitleBlog>
      <S.ContainerType>
        <S.ContainerHashtags>
          {selectBlog.hashtags?.map((hashtag, index) => (
            <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
          ))}
        </S.ContainerHashtags>
        <S.LikeGroup>
          <S.HeartIcon
            onClick={handleLike}
            className={likedBlogs[blogId] ? "liked" : ""} // Đảm bảo cập nhật màu sắc khi like/unlike
          >
            <i className="bi bi-heart-fill"></i>
          </S.HeartIcon>
          <S.HeartCount>{selectBlog.like}</S.HeartCount>
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
  