import { Link } from "react-router-dom";
import * as S from "./MyBlog.styled";
import MyBlogItem from "./MyBlogItem/MyBlogItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetUserBlog } from "../../../store/blogSlice";

export default function MyBlog() {
  const dispatch = useDispatch();
  const { blogsUser, isLoading, message } = useSelector((state) => state.blog);
  const [search, setSearch] = useState("");

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
        <Link to="/Add_Blog" style={{ textDecoration: "none" }}>
          <S.BtnCreateBlog>
            <i className="bi bi-plus-lg"></i>
            Create Blog
          </S.BtnCreateBlog>
        </Link>
        <S.SearchInput
          placeholder="Search blog..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchContainer>
      <S.ItemBlogContainer>
        {isLoading && <S.LoadingSpinner />}
        {!isLoading && blogsUser && blogsUser.length > 0 ? (
          blogsUser
            .filter((blog) => {
              const searchLower = search.toLocaleLowerCase();
              const titleSearch = blog.title
                .toLocaleLowerCase()
                .includes(searchLower);
              const hashtagsSearch = blog.hashtags.some((tag) =>
                tag.toLocaleLowerCase().includes(searchLower)
              );
              return searchLower === "" || titleSearch || hashtagsSearch;
            })
            .map((blog) => <MyBlogItem key={blog.blog_id} blog={blog} />)
        ) : (
          <S.Message>{message}</S.Message>
        )}
      </S.ItemBlogContainer>
    </S.Container>
  );
}
