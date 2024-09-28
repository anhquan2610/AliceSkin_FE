import { useEffect, useState } from "react";
import * as S from "./RegisterForm.styled";
import { signUp } from "../../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { registerAccount } from "../../../../services/userService";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  const formattedDob = dob? new Date(dob).toISOString().split('T')[0]: "";

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      dob: formattedDob,
      gender: gender,
      address: address,
    };

    dispatch(signUp(user));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  return (
    <S.Container>
      <S.Form onSubmit={handleRegister}>
        <S.FormGroup>
          <S.Label>Full Name</S.Label>
          <S.Input
            placeholder="Enter your Fullname"
            value={name}
            onChange={(e) => {
              setName(e.target.value);

            }}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Email</S.Label>
          <S.Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

            }}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);

            }}
          />
        </S.FormGroup>
        {/* <S.FormGroup>
          <S.Label>Confirm Password</S.Label>
          <S.Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </S.FormGroup> */}
        <S.FormGroup>
          <S.Label>Phone Number</S.Label>
          <S.Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Your Birthday</S.Label>
          <S.Input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Gender</S.Label>
          <S.Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </S.Select>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Address</S.Label>
          <S.Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </S.FormGroup>
        <S.BtnLogin>{isLoading ? "Registering..." : "Register"}</S.BtnLogin>
      </S.Form>

      {/* <S.BtnGroup>
        
        <S.BlankSpace>OR</S.BlankSpace>
        <S.BtnLoginFace>Login With FaceBook</S.BtnLoginFace>
        <S.BtnLoginGoogle>Login With Google</S.BtnLoginGoogle>
      </S.BtnGroup> */}
    </S.Container>
  );
}
