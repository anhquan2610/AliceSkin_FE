import * as S from "./dateOfBlog.styled";


export default function dateOfBlog({date}) {
  const formatDate = new Date(date).toLocaleDateString();

  return (
    <S.Container>
      <S.DateContainer>{formatDate}</S.DateContainer>
    </S.Container>
  );
}
