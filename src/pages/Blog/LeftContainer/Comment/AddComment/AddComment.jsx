import { useDispatch, useSelector } from "react-redux";
import * as S from "./AddComment.styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../../../../store/blogSlice";

export default function AddComment({ parentId = null, onClose }) {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.blog);
  const { id: blog_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = { content };
    if (content.trim()) {
      dispatch(
        addComment({
          blog_id,
          commentData,
          parent_id: parentId,
        })
      );

      setContent("");
      if (onClose) onClose();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.LabelComment>
        <S.Text> Comment</S.Text>
        <S.ContentContainer>
          <S.CommentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write content here"
          />
          <S.BtnSend type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Send"}
          </S.BtnSend>
        </S.ContentContainer>
      </S.LabelComment>
    </S.Container>
  );
}
