import * as S from "./CommentReply.styled";
import UserAva from "../../../assets/images/User.png"

export default function CommentReply() {
    return(
        <S.Container>
            <S.ContainerImage>
                <S.ImgUser src={UserAva}/>
            </S.ContainerImage>
            <S.ContainerComment>
                <S.InformationUser>
                    <S.UserName>UserName</S.UserName>
                    <S.DatePost>DatePost</S.DatePost>
                </S.InformationUser>
                <S.ContentCommnet>If I want to have a slim figure, what should I do?</S.ContentCommnet>
                <S.BtnAnswer>Answer</S.BtnAnswer>
                <S.Divider />
            </S.ContainerComment>
        </S.Container>
    )
}