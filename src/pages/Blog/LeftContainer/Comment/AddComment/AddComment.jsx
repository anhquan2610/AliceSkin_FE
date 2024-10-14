import * as S from "./AddComment.styled";

export default function AddComment() {
  return (
    <S.Container>
      <S.LabelComment>
        <S.Text> Comment</S.Text>
        <S.CommentInput />
        <S.BtnSend>Send</S.BtnSend>
      </S.LabelComment>
    </S.Container>
  );
}
