import * as S from "./infoUser.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserById } from "../../../store/authSlice";

export default function InfoUser({ userId }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userId) {
      console.log("userId", userId);
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  return (
    <S.Container1>
      <S.Image src={user.image} />
      <S.Name>{user.name}</S.Name>
    </S.Container1>
  );
}
