import { useDispatch, useSelector } from "react-redux";
import * as S from "./ChangePassword.styled";
import { useState } from "react";
import { changePassword } from "../../../store/authSlice";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const loading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.isError);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(form));
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>Change Password</S.Title>
        <S.Divider />
      </S.ContainerHeader>
      <S.ContainerContent onSubmit={handleSubmit}>
        <S.Group>
          <S.Label>Current Password :</S.Label>
          <S.Input
            type="password"
            name="current_password"
            value={form.current_password}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>New Password :</S.Label>
          <S.Input
            type="password"
            name="new_password"
            value={form.new_password}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>Confirm New Password :</S.Label>
          <S.Input
            type="password"
            name="new_password_confirmation"
            value={form.new_password_confirmation}
            onChange={handleChange}
          />
        </S.Group>
        <S.ButtonSave type="submit" disabled={loading}>
          {loading ? "Changing..." : "Change Password"}
        </S.ButtonSave>
      </S.ContainerContent>
    </S.Container>
  );
}
