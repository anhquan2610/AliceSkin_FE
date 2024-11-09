import { useDispatch, useSelector } from "react-redux";
import ItemBlog from "./ItemBlog/ItemBlog";
import * as S from "./ListBlog.styled";
import { useEffect } from "react";
import { getAllBlog } from "../../../store/blogSlice";
import { useNavigate } from "react-router-dom";

export default function ListBlog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  return (
    <S.Container>
      <S.TopContainer>
        <S.Title>Latest Post</S.Title>
      </S.TopContainer>
      {blogs && blogs.length > 0 ? (
        <S.ListItem>
          {blogs.map((blog, index) => (
            <ItemBlog
              key={`${blog.blog_id}-${index}`}
              blog={blog}
              navigate={navigate}
            />
          ))}
        </S.ListItem>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "var(--fs-lg)",
            fontStyle: "italic",
            color: "var(--gray)",
          }}
        >
          No blogs available.
        </p>
      )}
    </S.Container>
  );
}
