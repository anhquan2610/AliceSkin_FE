import { useDispatch, useSelector } from "react-redux";

import * as S from "./ListBlogPage.styled";
import { useEffect } from "react";
import { getAllBlog } from "../../../../store/blogSlice";
import ItemBlogPage from "./ItemBlogPage/ItemBlogPage";

export default function ListBlogPage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Blog</S.Title>
        <S.Divider />
      </S.TitleContainer>
      <S.ListBlog>
        {blogs.blogs.map((blog) => (
          <ItemBlogPage key={blog.blog_id} blog={blog} />
        ))}
      </S.ListBlog>
    </S.Container>
  );
}
