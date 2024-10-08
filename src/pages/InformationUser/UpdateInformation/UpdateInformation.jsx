import { useDispatch, useSelector } from "react-redux";
import * as S from "./UpdateInformation.styled";
import { useState } from "react";
import { updateUser } from "../../../store/authSlice";

export default function UpdateInformation() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    dob: user?.dob || "",
    gender: user?.gender || "",
    image: user?.image || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, userData: formData }));
  };
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>My Information</S.Title>
        <S.Divider />
      </S.HeaderContainer>
      <S.ContentContainer onSubmit={handleSubmit}>
        <S.Group>
          <S.Label>Name :</S.Label>
          <S.Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>Phone :</S.Label>
          <S.Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>Address</S.Label>
          <S.Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>Dob :</S.Label>
          <S.Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </S.Group>
        <S.Group>
          <S.Label>Gender :</S.Label>
          <S.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <S.Option value="">Select Gender</S.Option>
            <S.Option value="male">Male</S.Option>
            <S.Option value="female">Female</S.Option>
            <S.Option value="other">Other</S.Option>
          </S.Select>
        </S.Group>
        <S.Group>
          <S.Label>Image URL:</S.Label>
          <S.Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </S.Group>
        <S.ButtonSave type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update User"}
        </S.ButtonSave>
      </S.ContentContainer>
    </S.Container>
  );
}
