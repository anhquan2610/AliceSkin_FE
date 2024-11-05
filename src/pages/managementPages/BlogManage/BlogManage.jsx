import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as S from "./BlogManage.styled";
import BlogRows from "./BlogRows/BlogRows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBlogAdmin } from "../../../store/blogSlice";
import BlogFilter from "./BlogFilter"; 

export default function BlogManage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    dispatch(getAllBlogAdmin());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  const handleFilterChange = (filters) => {
    const { searchTerm, status } = filters;
    let filtered = blogs;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchLower) ||
          blog.hashtags.some((hashtag) =>
            hashtag.toLowerCase().includes(searchLower)
          )
      );
    }

    if (status) {
      filtered = filtered.filter((blog) => blog.status === status);
    }

    setFilteredBlogs(filtered);
  };

  return (
    <S.Container>
      <S.Title>Blog Manage</S.Title>
      <BlogFilter onFilterChange={handleFilterChange} />
    
      <S.Description>List of blogs</S.Description>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
              >
                Title&nbsp;
              </TableCell>
              <TableCell align="left">Author&nbsp;</TableCell>
              <TableCell align="left">Created at&nbsp;</TableCell>
              <TableCell align="left">Hashtags&nbsp;</TableCell>
              <TableCell align="left">Status&nbsp;</TableCell>
              <TableCell align="left">Actions&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBlogs.map((blog) => (
              <BlogRows key={blog.blog_id} blog={blog} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
}
