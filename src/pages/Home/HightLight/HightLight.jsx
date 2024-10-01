import * as S from "./HightLight.styled";
import HightLight1 from "../../../assets/images/HightLight1.png";
import TypeBlog from "../../../components/typeBlog/typeBlog";
import InfoBlog from "../../../components/infoBlog/infoBlog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlog } from "../../../store/blogSlice";
import InfoUser from "../../../components/infoBlog/infoUser/infoUser";

export default function HightLight() {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  
  const blog = blogs.length > 0 ? blogs[0] : null;

  
  if (isLoading) {
    return <p>Loading</p>; 
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!blog) {
    return <p>No blogs available.</p>; 
  }

  return (
    <S.Container>
      <S.Image src={blog.thumbnail}></S.Image>
      <S.BoxTitle>
        <S.CongigBox>
          <TypeBlog />
          <S.Title>{blog.title}</S.Title> {/* Hiển thị title của blog đầu tiên */}
          <S.Content>{blog.content}</S.Content> {/* Hiển thị title của blog đầu tiên */}
          <InfoUser userId = {blog.user_id} />
        </S.CongigBox>
      </S.BoxTitle>
    </S.Container>
  );
}
