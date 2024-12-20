import { useDispatch, useSelector } from "react-redux";
import * as S from "./UserInforDetail.styled";
import { useEffect } from "react";
import { fetchUserByToken } from "../../../store/authSlice";

export default function UserInforDetail() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    dispatch(fetchUserByToken());
  }, [dispatch]);

  if (loading) return <S.LoadingSpinner />;

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>My Information</S.Title>
        <S.Divider />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Group>
          <S.Label>Name :</S.Label>
          <S.Input disabled>{user?.name}</S.Input>
        </S.Group>
        <S.Group>
          <S.Label>Email :</S.Label>
          <S.Input disabled>{user?.email}</S.Input>
        </S.Group>
        <S.Group>
          <S.Label>Phone :</S.Label>
          <S.Input disabled>{user?.phone}</S.Input>
        </S.Group>
        <S.Group>
          <S.Label>Address</S.Label>
          <S.Input disabled>{user?.address || "No address available"}</S.Input>
        </S.Group>
        <S.Group>
          <S.Label>Dob :</S.Label>
          <S.Input disabled>{user?.dob}</S.Input>
        </S.Group>
        <S.Group>
          <S.Label>Gender :</S.Label>
          <S.Input disabled>{user?.gender}</S.Input>
        </S.Group>
        <S.InforUpdate>
          Last Update : {new Date(user?.created_at).toLocaleString("en-GB")}
        </S.InforUpdate>
      </S.ContentContainer>
    </S.Container>
  );
}
