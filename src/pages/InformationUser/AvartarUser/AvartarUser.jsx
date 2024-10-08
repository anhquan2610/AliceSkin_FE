import * as S from "./AvatarUser.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByToken } from "../../../store/authSlice";
import { useEffect } from "react";

export default function AvartarUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserByToken());
  }, [dispatch]);

  return (
    <S.Container>
      <S.AvatarContainer>
        <S.AvatarImg src={user?.image} />
      </S.AvatarContainer>
      <S.Text>Hey! Welcome Back.</S.Text>
      <S.Name>{user?.name}</S.Name>
      <S.Email>{user?.email}</S.Email>
    </S.Container>
  );
}
