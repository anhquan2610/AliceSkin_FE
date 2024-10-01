import { useDispatch, useSelector } from 'react-redux';
import ItemBlog from './ItemBlog/ItemBlog';
import * as S from './ListBlog.styled';
import { useEffect } from 'react';
import { getAllBlog } from '../../../store/blogSlice';


export default function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(getAllBlog());
    }, [dispatch]);

    return (
        <S.Container>
            <S.TopContainer>
                <S.Title>Latest Post</S.Title>
                <S.Filter>Filter</S.Filter>
            </S.TopContainer>
            <S.ListItem>
                {blogs.blogs.map((blog) => (<ItemBlog key ={blog.blog_id} blog = {blog}  />
                ))}
            </S.ListItem>
        </S.Container>
    );
}