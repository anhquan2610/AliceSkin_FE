import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginForm.styled.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthState, signIn } from "../../../../store/authSlice.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { notifySuccess } from "../../../../utils/Nontification.utils.js";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, token } = useSelector((state) => state.auth);
  const role = useSelector((state) => state.auth.role);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const handleLogin = (values, { setSubmitting }) => {
    dispatch(signIn(values))
      .unwrap()
      .then(() => {
        notifySuccess("Login successfully");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  useEffect(() => {
    if (token && role) {
      if (role === "admin") {
        navigate("/manage/admin");
      } else {
        navigate("/home");
      }
    }
  }, [token, role, navigate]);

  // Xử lý thành công login với Google
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `http://127.0.0.1:8000/api/auth/google/callback`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Lưu token từ backend vào localStorage
      localStorage.setItem("token", result.data.access_token);
      notifySuccess("Login with Google successfully");
      navigate("/home"); // Điều hướng đến trang home
    } catch (error) {
      console.error("Google login failed:", error);
    }
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
            </S.ContainerForm>
          </Form>
        )}
      </Formik>

      <S.BlankSpace />
      <S.ContainerBottom>
        {/* Nút đăng nhập với Google */}
        <GoogleOAuthProvider clientId="795793395963-4vcbsu2b6fn5d38j09r5fke87ku92qpe.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </S.ContainerBottom>
    </S.Container>
  );
}
