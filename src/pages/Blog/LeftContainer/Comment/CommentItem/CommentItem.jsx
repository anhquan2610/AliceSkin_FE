import * as S from "./CommentItem.styled";

export default function CommentItem({ comment }) {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImgUser src={comment.user?.image} />
      </S.ContainerImage>
      <S.ContainerComment>
        <S.InformationUser>
          <S.UserName>
            {comment.user?.name}
            <S.UserRole>({comment.user?.role})</S.UserRole>
          </S.UserName>
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
