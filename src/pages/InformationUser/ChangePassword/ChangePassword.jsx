import { useDispatch, useSelector } from "react-redux";
import * as S from "./ChangePassword.styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { changePassword } from "../../../store/authSlice";
import * as Yup from "yup";

import Popup from "../../../components/Popup/Popup";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const validationSchema = Yup.object().shape({
    current_password: Yup.string().required("Please enter current password"),
    new_password: Yup.string()
      .min(8, "New password must be at least 8 characters")
      .required("Please enter new password"),
    new_password_confirmation: Yup.string()
      .oneOf(
        [Yup.ref("new_password"), null],
        "Confirmation password does not match"
      )
      .required("Please re-enter new password"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const formattedValues = {
      current_password: values.current_password || "",
      new_password: values.new_password || "",
      new_password_confirmation: values.new_password_confirmation || "",
    };

    dispatch(changePassword(formattedValues));
    resetForm();
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>Change Password</S.Title>
        <S.Divider />
      </S.ContainerHeader>
      <S.ContainerContent>
        <Formik
          initialValues={{
            current_password: "",
            new_password: "",
            new_password_confirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <S.Group>
                <S.Label>Current Password:</S.Label>
                <Field type="password" name="current_password" as={S.Input} />
                <ErrorMessage
                  name="current_password"
                  component={S.ErrorMessageStyled}
                />
              </S.Group>

              <S.Group>
                <S.Label>New Password:</S.Label>
                <Field type="password" name="new_password" as={S.Input} />
                <ErrorMessage
                  name="new_password"
                  component={S.ErrorMessageStyled}
                />
              </S.Group>

              <S.Group>
                <S.Label>Confirmation New Password:</S.Label>
                <Field
                  type="password"
                  name="new_password_confirmation"
                  as={S.Input}
                />
                <ErrorMessage
                  name="new_password_confirmation"
                  component={S.ErrorMessageStyled}
                />
              </S.Group>

              <S.ButtonSave type="submit" disabled={isSubmitting || isLoading}>
                {isLoading ? "Are changing..." : "Reset Password"}
              </S.ButtonSave>
            </Form>
          )}
        </Formik>
      </S.ContainerContent>
    </S.Container>
  );
}
