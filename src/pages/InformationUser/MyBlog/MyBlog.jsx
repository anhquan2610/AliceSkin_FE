import { Link } from "react-router-dom";
import * as S from "./MyBlog.styled";
import MyBlogItem from "./MyBlogItem/MyBlogItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetUserBlog } from "../../../store/blogSlice";

export default function MyBlog() {
  const dispatch = useDispatch();
  const { blogsUser, isLoading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(GetUserBlog());
  }, [dispatch]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>My Blog</S.Title>
        <S.Divider />
      </S.HeaderContainer>
      <S.SearchContainer>
        <Link to="/AddBlog" style={{ textDecoration: "none" }}>
          <S.BtnCreateBlog>
            <i className="bi bi-plus-lg"></i>
            Create Blog
          </S.BtnCreateBlog>
        </Link>
        <S.SearchInput placeholder="Search blog..." />
      </S.SearchContainer>
      <S.ItemBlogContainer>
        {isLoading && <S.LoadingSpinner />}
        {blogsUser.map((blog) => (
          <MyBlogItem key={blog.blog_id} blog={blog} />
        ))}
      </S.ItemBlogContainer>
    </S.Container>
  );
}
