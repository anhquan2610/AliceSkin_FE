import * as S from "./HightLight.styled";
import HightLight1 from "../../../assets/images/HightLight1.png";
import TypeBlog from "../../../components/typeBlog/typeBlog";
import InfoBlog from "../../../components/infoBlog/infoBlog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlog } from "../../../store/blogSlice";

export default function HightLight() {
  const dispatch = useDispatch();
  const { blogs, isLoading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  // Lấy blog đầu tiên, kiểm tra mảng blogs có trống không
  const blog = blogs.length > 0 ? blogs[0] : null;

  // Kiểm tra trạng thái loading
  if (isLoading) {
    return <p>Loading...</p>; // Hiển thị thông báo khi đang tải
  }

  // Kiểm tra lỗi
  if (error) {
    return <p>Error: {error.message}</p>; // Hiển thị thông báo lỗi
  }

  // Kiểm tra xem có blog nào không
  if (!blog) {
    return <p>No blogs available.</p>; // Thông báo nếu không có blog nào
  }

  return (
    <S.Container>
      <S.Image src={HightLight1} />
      <S.BoxTitle>
        <S.CongigBox>
          <TypeBlog />
          <S.Title>{blog.title}</S.Title> {/* Hiển thị title của blog đầu tiên */}
          <S.Content>{blog.content}</S.Content> {/* Hiển thị title của blog đầu tiên */}
          <InfoBlog />
        </S.CongigBox>
      </S.BoxTitle>
    </S.Container>
  );
}
