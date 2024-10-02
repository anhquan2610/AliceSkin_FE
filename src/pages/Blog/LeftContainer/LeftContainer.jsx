import BlogDetail from "./BlogDetail/BlogDetail";
import Comment from "./Comment/Comment";
import * as S from "./LeftContainer.styled";

export default function LeftContainer({blog}) {
    return (
        <S.Container>
            <BlogDetail blog ={blog} />
            <Comment />
        </S.Container>
    )
}