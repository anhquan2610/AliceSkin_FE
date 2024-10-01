import * as S from './infoUser.styled';
import ImageUser from '../../../assets/images/AvaUser.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserById } from '../../../store/authSlice';

export default function InfoUser({userId}) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth);

    useEffect(() => {
        if(userId) {
            dispatch(getUserById(userId));
        }
    }, [dispatch, userId]);

    return (
        <S.Container1>
            <S.Image src={ImageUser} />
            <S.Name>{users.name}</S.Name>
            
        </S.Container1>
    );
}