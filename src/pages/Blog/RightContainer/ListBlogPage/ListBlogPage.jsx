import { useDispatch, useSelector } from "react-redux";
import * as S from "./ListBlogPage.styled";
import { useEffect, useState } from "react"; // Thêm useState
import { getAllBlog } from "../../../../store/blogSlice";
import ItemBlogPage from "./ItemBlogPage/ItemBlogPage";
import { useNavigate } from "react-router-dom";

export default function ListBlogPage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 3);
  };

  const limitedBlogs = blogs.slice(0, visibleBlogs);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Blog</S.Title>
        <S.Divider />
      </S.TitleContainer>
      <S.SearchContainer>
        <S.SearchInput
          placeholder="Search by name or hashtags"
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.SearchIcon>
          <i class="bi bi-search"></i>
        </S.SearchIcon>
      </S.SearchContainer>
      <S.ListBlog>
        {limitedBlogs
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
          .map((blog, index) => (
            <ItemBlogPage
              key={blog.blog_id || index}
              blog={blog}
              navigate={navigate}
            />
          ))}
      </S.ListBlog>

      {visibleBlogs < blogs.length && (
        <S.ShowMoreButton onClick={handleShowMore}>Xem thêm</S.ShowMoreButton>
      )}
    </S.Container>
  );
}
