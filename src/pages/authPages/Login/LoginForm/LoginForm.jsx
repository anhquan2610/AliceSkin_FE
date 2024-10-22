import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginForm.styled.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthState, signIn } from "../../../../store/authSlice.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Popup from "../../../../components/Popup/Popup.jsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, token, message, role, isError } = useSelector(
    (state) => state.auth
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const handleLogin = (values, { setSubmitting }) => {
    dispatch(signIn(values)).finally(() => {
      setSubmitting(false);
    });
  };

  useEffect(() => {
    if (isError) {
      setIsPopupOpen(true);
    }
  }, [isError]);

  useEffect(() => {
    if (token) {
      if (role === "admin") {
        navigate("/admin"); 
      } else {
        navigate("/home"); 
      }
    }
  }, [token, role, navigate]);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    dispatch(resetAuthState());
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Subtitle>
        Don’t have an account ?<span> </span>
        <Link to="/register" style={{ color: "var(--blue)" }}>
          Request account
        </Link>
      </S.Subtitle>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <S.ContainerForm>
              <S.Label>Email</S.Label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                as={S.Input}
              />
              <ErrorMessage name="email" component={S.ErrorMessageStyled} />

              <S.Label>Password</S.Label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                as={S.Input}
              />
              <ErrorMessage name="password" component={S.ErrorMessageStyled} />

              <Link to="/forgot_password">
                <S.ForgotPassword>Forgot password?</S.ForgotPassword>
              </Link>

              <S.BtnLogin type="submit" disabled={isSubmitting || isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </S.BtnLogin>
              <Popup isOpen={isPopupOpen} onClose={handlePopupClose}>
                {message}
              </Popup>
            </S.ContainerForm>
          </Form>
        )}
      </Formik>

      <S.BlankSpace />
      <S.ContainerBottom>
        <S.BtnLoginFacebook>Login with Facebook</S.BtnLoginFacebook>
        <S.BtnLoginGoogle>Login with Google</S.BtnLoginGoogle>
      </S.ContainerBottom>
    </S.Container>
  );
}
