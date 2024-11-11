import { Link } from "react-router-dom";
import * as S from "./MyBlog.styled";
import MyBlogItem from "./MyBlogItem/MyBlogItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetUserBlog } from "../../../store/blogSlice";
import FilterMyBlog from "./FilterMyBlog"; // Import the filter component

export default function MyBlog() {
  const dispatch = useDispatch();
  const { blogsUser, isLoading, message } = useSelector((state) => state.blog);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all"); // Add a status state

  useEffect(() => {
    dispatch(GetUserBlog());
  }, [dispatch]);

  const filteredBlogs = blogsUser
    ? blogsUser.filter((blog) => {
        const searchLower = search.toLocaleLowerCase();
        const titleSearch = blog.title
          .toLocaleLowerCase()
          .includes(searchLower);
        const hashtagsSearch = blog.hashtags.some((tag) =>
          tag.toLocaleLowerCase().includes(searchLower)
        );
        const statusFilter = status === "all" || blog.status === status; // Filter by status
        return (
          (searchLower === "" || titleSearch || hashtagsSearch) && statusFilter
        );
      })
    : [];

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>My Blog</S.Title>
        <S.Divider />
      </S.HeaderContainer>
      <S.SearchContainer>
        <Link to="/Add_Blog" style={{ textDecoration: "none" }}>
          <S.ContainerGroup>
            <S.BtnCreateBlog>
              <i className="bi bi-plus-lg"></i>
              Create Blog
            </S.BtnCreateBlog>
          </S.ContainerGroup>
        </Link>
        <S.ContainerGroup>
          <S.SearchInput
            placeholder="Search blog..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.ContainerGroup>
        <S.ContainerFilter>
          <FilterMyBlog status={status} onStatusChange={setStatus} />{" "}
        </S.ContainerFilter>
      </S.SearchContainer>

      <S.ItemBlogContainer>
        {isLoading && <S.LoadingSpinner />}
        {!isLoading && filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <MyBlogItem key={blog.blog_id} blog={blog} />
          ))
        ) : (
          <S.Message>{message}</S.Message>
        )}
      </S.ItemBlogContainer>
    </S.Container>
  );
}
