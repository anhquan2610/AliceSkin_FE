import { useDispatch, useSelector } from "react-redux";
import AddComment from "./AddComment/AddComment";
import * as S from "./Comment.styled";
import CommentItem from "./CommentItem/CommentItem";
import { useEffect } from "react";
import { getCommentByBlogId } from "../../../../store/blogSlice";
import { useParams } from "react-router-dom";

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.blog.comments);
  const { id: blogId } = useParams();

  useEffect(() => {
    dispatch(getCommentByBlogId(blogId));
  }, [dispatch, blogId]);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Comment</S.Title>
        <S.Divider></S.Divider>
      </S.TitleContainer>
      <S.CommentContainer>
        {comments.map((comment) => (
          <S.BoxComment key={comment.comment_id}>
            <CommentItem comment={comment} />
          </S.BoxComment>
        ))}
      </S.CommentContainer>
      <AddComment />
    </S.Container>
  );
}
