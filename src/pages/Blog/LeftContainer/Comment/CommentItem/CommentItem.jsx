import { useDispatch } from "react-redux";
import {
  deleteCommentByUser,
  resetBlogState,
} from "../../../../../store/blogSlice";
import * as S from "./CommentItem.styled";
import AddComment from "../AddComment/AddComment";
import { useState } from "react";

export default function CommentItem({ comment }) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const [showReply, setShowReply] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      dispatch(
        deleteCommentByUser(
          {
            blog_id: comment.blog_id,
            comment_id: comment.comment_id,
          },
          [dispatch]
        )
      ).then(() => {
        dispatch(resetBlogState());
      }, [dispatch]);
    }
  };

  const toggleReplyForm = () => {
    setShowReply(!showReply);
  };

  return (
    <>
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
              {comment.user_id === Number(userId) && (
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
          <S.BtnAnswer onClick={toggleReplyForm}>Answer</S.BtnAnswer>

          {/* Form reply comment */}
          {showReply && (
            <AddComment
              parentId={comment.comment_id}
              onClose={() => setShowReply(false)}
            />
          )}
        </S.ContainerComment>
      </S.Container>
      <S.ContainerReply>
        {comment.replies && comment.replies.length > 0 && (
          <S.CommentReply>
            {comment.replies.map((reply) => (
              <CommentItem key={reply.comment_id} comment={reply} />
            ))}
          </S.CommentReply>
        )}
      </S.ContainerReply>
    </>
  );
}
