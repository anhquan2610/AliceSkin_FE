import CommentItem from "../../../../components/CommentItem/CommentItem";
import CommentReply from "../../../../components/CommentItem/CommentReply/CommentReply";
import * as S from "./Comment.styled";

export default function Comment() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Comment</S.Title>
        <S.Divider></S.Divider>
      </S.TitleContainer>
      <S.CommentContainer>
        <S.BoxComment>
          <CommentItem />
          <CommentReply />
          <CommentItem />
        </S.BoxComment>
      </S.CommentContainer>
      <S.LabelComment>
        <S.Text> Comment</S.Text>
        <S.CommentInput />
        <S.BtnSend>Send</S.BtnSend>
      </S.LabelComment>
    </S.Container>
  );
}
