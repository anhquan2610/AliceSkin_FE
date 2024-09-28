import { useEffect, useState } from "react";
import * as S from "./RegisterForm.styled";
import { signUp } from "../../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector((state) => state.auth);


  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required").max(255),
    email: Yup.string().email("Invalid email").required("Email is required").max(255),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    phone: Yup.string().required("Phone Number is required").matches(/^[0-9]+$/, "Phone Number must be digits").min(10).max(15),
    dob: Yup.date().required("Date of Birth is required").nullable(),
    gender: Yup.string().required("Gender is required").oneOf(['male', 'female', 'other']),
    address: Yup.string().required("Address is required").max(255),
  });

  const handleRegister = (values) => {
    dispatch(signUp(values));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  return (
    <S.Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          phone: '',
          dob: '',
          gender: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Form 
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: "var(--s-5)",
          }}>
            <S.FormGroup>
              <S.Label>Full Name</S.Label>
              <Field name="name" placeholder="Enter your Fullname" as={S.Input} />
              <ErrorMessage name="name" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Email</S.Label>
              <Field name="email" placeholder="Enter your email" as={S.Input} />
              <ErrorMessage name="email" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Password</S.Label>
              <Field name="password" type="password" placeholder="Enter your password" as={S.Input} />
              <ErrorMessage name="password" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Phone Number</S.Label>
              <Field name="phone" type="text" as={S.Input} />
              <ErrorMessage name="phone" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Your Birthday</S.Label>
              <Field name="dob" type="date" as={S.Input} />
              <ErrorMessage name="dob" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Gender</S.Label>
              <Field name="gender" as={S.Select}>
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </Field>
              <ErrorMessage name="gender" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Address</S.Label>
              <Field name="address" as={S.Input} />
              <ErrorMessage name="address" component={S.ErrorMessageStyled} />
            </S.FormGroup>
            <S.BtnLogin type="submit" disabled={isSubmitting}>
              {isLoading ? "Registering..." : "Register"}
            </S.BtnLogin>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};
