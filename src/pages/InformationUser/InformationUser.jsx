import { useEffect, useState } from "react";
import * as S from "./InformationUser.styled";
import UserInforDetail from "./UserInforDetail/UserInforDetail";
import AvartarUser from "./AvartarUser/AvartarUser";
import UpdateInformation from "./UpdateInformation/UpdateInformation";
import ChangePassword from "./ChangePassword/ChangePassword";
import MyBlog from "./MyBlog/MyBlog";
import SkinInformation from "./SkinInformation/SkinInformation";
import OrderHistory from "./OrderHistory/OrderHistory";

export default function InformationUser() {
  const [currentLayout, setCurrentLayout] = useState("form");

  const switchToForm = () => setCurrentLayout("form");
  const switchToUpdate = () => setCurrentLayout("update");
  const switchToReset = () => setCurrentLayout("reset");
  const switchToSkin = () => setCurrentLayout("skin");
  const switchToMyBlog = () => setCurrentLayout("myBlog");
  const switchToMyOrder = () => setCurrentLayout("myOrder");

  return (
    <S.Container>
      <S.Navigation>
        <S.NavButton
          onClick={switchToForm}
          isSelected={currentLayout === "form"}
        >
          Infomation User
        </S.NavButton>
        <S.NavButton
          onClick={switchToUpdate}
          isSelected={currentLayout === "update"}
        >
          Update Information
        </S.NavButton>
        <S.NavButton
          onClick={switchToSkin}
          isSelected={currentLayout === "skin"}
        >
          Skin Information
        </S.NavButton>
        <S.NavButton
          onClick={switchToReset}
          isSelected={currentLayout === "reset"}
        >
          Reset Password
        </S.NavButton>
        <S.NavButton
          onClick={switchToMyBlog}
          isSelected={currentLayout === "myBlog"}
        >
          My Blog
        </S.NavButton>
        <S.NavButton
          onClick={switchToMyOrder}
          isSelected={currentLayout === "myOrder"}
        >
          Order History
        </S.NavButton>
      </S.Navigation>
      <S.Middle>
        <S.LeftContainer>
          <AvartarUser />
        </S.LeftContainer>
        <S.RightContainer>
          <S.Content>
            {currentLayout === "form" && <UserInforDetail />}
            {currentLayout === "update" && <UpdateInformation />}
            {currentLayout === "reset" && <ChangePassword />}
            {currentLayout === "skin" && <SkinInformation />}
            {currentLayout === "myBlog" && <MyBlog />}
            {currentLayout === "myOrder" && <OrderHistory />}
          </S.Content>
        </S.RightContainer>
      </S.Middle>
    </S.Container>
  );
}
