import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentByUser,
  resetBlogState,
} from "../../../../../store/blogSlice";
import * as S from "./CommentItem.styled";

export default function CommentItem({ comment }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      dispatch(
        deleteCommentByUser({
          blog_id: comment.blog_id,
          comment_id: comment.comment_id,
        })
      ).then(() => {
        dispatch(resetBlogState());
      });
    }
  };
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgUser src={comment.user?.image} />
      </S.ContainerImage>
      <S.ContainerComment>
        <S.InformationUser>
          <S.Group>
            <S.UserName>
              {comment.user?.name}
              <S.UserRole>({comment.user?.role})</S.UserRole>
            </S.UserName>
            {comment.user_id === userId && (
              <S.BtnDelete onClick={handleDelete}>
                <i className="bi bi-x-circle"></i>
              </S.BtnDelete>
            )}
          </S.Group>

          <S.Group>
            <S.EmailUser>{comment.user?.email}</S.EmailUser>
            <S.DatePost>
              {new Date(comment.created_at).toLocaleString("en-GB")}
            </S.DatePost>
          </S.Group>
        </S.InformationUser>
        <S.ContentCommnet>{comment.content}</S.ContentCommnet>
        <S.BtnAnswer>Answer</S.BtnAnswer>
      </S.ContainerComment>
    </S.Container>
  );
}
