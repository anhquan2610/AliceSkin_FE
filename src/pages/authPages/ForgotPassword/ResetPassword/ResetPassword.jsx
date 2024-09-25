import { useNavigate } from 'react-router-dom';
import * as S from './ResetPassword.styled';

export default function ResetPassword() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/forgotpassword');
    }

    return (
        <S.Container>
            <S.ContainerLeft />
            <S.ContainerMiddle>
                <S.Title>Reset Your Password</S.Title>
                <S.Description>Please enter your new password twice so we can verify that you typed it in correctly</S.Description>
                <S.ContainerForm>
                    <S.Group>
                        <S.Label>New Password</S.Label>
                        <S.Input type="password" placeholder="Enter Your New Password" />
                    </S.Group>
                    <S.Group>
                        <S.Label>Confirm Password</S.Label>
                        <S.Input type="password" placeholder="Enter Your New Password Again" />
                    </S.Group>
                    <S.BtnUpdate>Update Password</S.BtnUpdate>
                    <S.BtnCancel onClick={handleCancel}>Cancel</S.BtnCancel>
                </S.ContainerForm>
            </S.ContainerMiddle>
            <S.ContainerRight />
        </S.Container>
    )
}