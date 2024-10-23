import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import { getBlogById, resetBlogState } from "../../../../store/blogSlice";
import * as S from "./BlogDetailManage.styled";

const BlogDetailManage = () => {
  const dispatch = useDispatch();
  const { id: blog_id } = useParams();
  const navigate = useNavigate();
  const { selectedBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogById(blog_id));
    return () => {
      dispatch(resetBlogState());
    };
  }, [dispatch, blog_id]);

  return (
    <Card>
      <CardMedia
        component="img"
        sx={{
          height: "auto",
          width: "100%",
          objectFit: "cover",
          aspectRatio: 16 / 9,
        }}
        image={selectedBlog.thumbnail}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
      >
        <Typography variant="h4" sx={{ fontWeight: "var(--fw-semibold)" }}>
          {selectedBlog.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", flexDirection: "row", gap: "var(--s-1)" }}
        >
          {selectedBlog.hashtags?.map((hashtag, index) => (
            <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
          ))}
        </Typography>
        <Typography>Status: {selectedBlog.status}</Typography>
        <Typography variant="subtitle1">
          Author: {selectedBlog.user?.name}
        </Typography>
        <Typography variant="body1">{selectedBlog.content}</Typography>

        <Typography variant="subtitle2">
          Created at:{" "}
          {new Date(selectedBlog.created_at).toLocaleString("en-GB")}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate("/manage/blogs")}>
          Back to List
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogDetailManage;
