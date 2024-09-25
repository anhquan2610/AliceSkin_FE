import BlogDetail from "./BlogDetail/BlogDetail";
import Comment from "./Comment/Comment";
import * as S from "./LeftContainer.styled";

export default function LeftContainer() {
    return (
        <S.Container>
            <BlogDetail />
            <Comment />
        </S.Container>
    )
}