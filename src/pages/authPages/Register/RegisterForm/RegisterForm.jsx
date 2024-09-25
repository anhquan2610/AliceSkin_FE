import { useState } from "react";
import * as S from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../../../../services/userService";

export default function RegisterForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
        name: name,
        email: email,
        password: password,
    };
    registerAccount(newUser, dispatch, navigate);    
}
  return (
    <S.Container onSubmit={handleRegister} >
      <S.Form>
        <S.FormGroup>
          <S.Label >Full Name</S.Label>
          <S.Input 
          placeholder="Enter your Fullname"
          onChange={(e) => {setName(e.target.value)}} />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Email</S.Label>
          <S.Input 
          placeholder="Enter your email"
          onChange={(e) => {setEmail(e.target.value)}}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Password</S.Label>
          <S.Input type="password"
          placeholder="Enter your password"
          onChange={(e) => {setPassword(e.target.value)}}
          />
        </S.FormGroup>
        <S.BtnLogin >Submit</S.BtnLogin>
        </S.Form>
        {/* <S.FormGroup>
          <S.Label>Confirm Password</S.Label>
          <S.Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </S.FormGroup> */}
        {/* <S.FormGroup>
          <S.Label>Phone Number</S.Label>
          <S.Input type="text" id="confirmPassword" name="confirmPassword" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Your Birthday</S.Label>
          <S.Input type="date" id="confirmPassword" name="confirmPassword" />
        </S.FormGroup> */}
        {/* <S.FormGroup>
          <S.Label>Gender</S.Label>
          <S.Select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </S.Select>
        </S.FormGroup> */}
        {/* <S.FormGroup>
          <S.Label>Address</S.Label>
          <S.Input type="text" id="confirmPassword" name="confirmPassword" />
        </S.FormGroup> */}
        
      
      {/* <S.BtnGroup>
        
        <S.BlankSpace>OR</S.BlankSpace>
        <S.BtnLoginFace>Login With FaceBook</S.BtnLoginFace>
        <S.BtnLoginGoogle>Login With Google</S.BtnLoginGoogle>
      </S.BtnGroup> */}
    </S.Container>
  );
}

