import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./ResetPassword.styled";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../../store/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { isLoading } = useSelector((state) => state.auth);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("New password is required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      resetPassword({
        email: values.email,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
        token,
      })
    )
      .unwrap()
      .then(() => {
        setSubmitting(false);
        navigate("/login");
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <S.ContainerLeft />
      <S.ContainerMiddle>
        <S.Title>Reset Your Password</S.Title>
        <S.Description>
          Please enter your new password twice so we can verify that you typed
          it in correctly
        </S.Description>
        <S.ContainerForm>
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <S.Group>
                  <S.Label>Email</S.Label>
                  <Field
                    name="email"
                    type="email"
                    as={S.Input}
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage name="email" component={S.ErrorMessageStyled} />
                </S.Group>

                <S.Group>
                  <S.Label>New Password</S.Label>
                  <Field
                    name="password"
                    type="password"
                    as={S.Input}
                    placeholder="Enter Your New Password"
                  />
                  <ErrorMessage
                    name="password"
                    component={S.ErrorMessageStyled}
                  />
                </S.Group>

                <S.Group>
                  <S.Label>Confirm Password</S.Label>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    as={S.Input}
                    placeholder="Enter Your New Password Again"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component={S.ErrorMessageStyled}
                  />
                </S.Group>
                <S.Group>
                  <S.BtnUpdate
                    type="submit"
                    disabled={isSubmitting || isLoading}
                  >
                    {isLoading ? "Updating..." : "Update Password"}
                  </S.BtnUpdate>
                  <S.BtnCancel type="button" onClick={handleCancel}>
                    Cancel
                  </S.BtnCancel>
                </S.Group>
              </Form>
            )}
          </Formik>
        </S.ContainerForm>
      </S.ContainerMiddle>
      <S.ContainerRight />
    </S.Container>
  );
}
