import { useEffect, useState } from "react";
import * as S from "./InformationUser.styled";
import UserInforDetail from "./UserInforDetail/UserInforDetail";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/authSlice";
import AvartarUser from "./AvartarUser/AvartarUser";
import UpdateInformation from "./UpdateInformation/UpdateInformation";
import ChangePassword from "./ChangePassword/ChangePassword";

export default function InformationUser() {
  const [currentLayout, setCurrentLayout] = useState("form"); // Layout mặc định

  const switchToForm = () => setCurrentLayout("form");
  const switchToUpdate = () => setCurrentLayout("update");
  const switchToReset = () => setCurrentLayout("reset");
  return (
    <S.Container>
      <S.Navigation>
        <S.NavButton onClick={switchToForm}> Infomation</S.NavButton>
        <S.NavButton onClick={switchToUpdate}> Update Information</S.NavButton>
        <S.NavButton onClick={switchToReset}>Reset Password</S.NavButton>
      </S.Navigation>
      <S.Middle>
        <S.RightContainer>
          <S.Content>
            {currentLayout === "form" && <UserInforDetail />}
            {currentLayout === "update" && <UpdateInformation />}
            {currentLayout === "reset" && <ChangePassword />}
          </S.Content>
        </S.RightContainer>
        <S.LeftContainer>
          <AvartarUser />
        </S.LeftContainer>
      </S.Middle>
    </S.Container>
  );
}
