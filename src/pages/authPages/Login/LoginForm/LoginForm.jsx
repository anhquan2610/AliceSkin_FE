import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginForm.styled.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../../store/authSlice.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, token } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

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

              <Link to="/forgotpassword">
                <S.ForgotPassword>Forgot password?</S.ForgotPassword>
              </Link>

              <S.BtnLogin type="submit" disabled={isSubmitting || isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </S.BtnLogin>
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
