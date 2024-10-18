import { useDispatch, useSelector } from "react-redux";
import * as S from "./UpdateInformation.styled";
import { useEffect, useState } from "react";
import { resetAuthState, updateUser } from "../../../store/authSlice";
import { uploadImage, resetImageState } from "../../../store/imageSlice";
import Popup from "../../../components/Popup/Popup";

export default function UpdateInformation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { message, isLoading, isSuccess } = useSelector((state) => state.auth);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    dob: user.dob || "",
    gender: user.gender || "",
    image: user.image || "",
    address: user.address || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            const imageUrl = result.payload;
            const updatedUserData = { ...formData, image: imageUrl };
            dispatch(updateUser({ id: user.id, userData: updatedUserData }));
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      dispatch(updateUser({ id: user.id, userData: formData }));
    }
  };

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && message) {
      setIsPopupOpen(true);
    }
  }, [isSuccess, message]);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    dispatch(resetAuthState());
    window.location.reload();
  };

  const isFormChanged = () => {
    return (
      formData.name !== user.name ||
      formData.phone !== user.phone ||
      formData.dob !== user.dob ||
      formData.gender !== user.gender ||
      formData.image !== user.image ||
      formData.address !== user.address
    );
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
          <S.Label>Update Image:</S.Label>
          <S.Input type="file" accept="image/*" onChange={handleFileChange} />
        </S.Group>
        <S.Group>
          <S.Label>Image URL:</S.Label>
          <S.Input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            disabled
          />
        </S.Group>
        <S.ButtonSave type="submit" disabled={!isFormChanged()}>
          {isLoading ? "Updating..." : "Update User"}
        </S.ButtonSave>
      </S.ContentContainer>
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose}>
        {message}
      </Popup>
    </S.Container>
  );
}
