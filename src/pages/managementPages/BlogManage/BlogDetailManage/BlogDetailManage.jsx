import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
      <IconButton
        sx={{
          color: "var(--black)",
          mb: "var(--s-3)",
        }}
        onClick={() => navigate("/manage/blogs")}
      >
        <ArrowBackIcon />
      </IconButton>
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
            <Typography
              key={index}
              component="span"
              sx={{
                color: "var(--white)",
                backgroundColor: "var(--green-fresh)",
                padding: "var(--s-1) var(--s-3)",
                margin: "var(--s-1) 0",
                borderRadius: "var(--br-md)",
                fontSize: "var(--fs-md)",
              }}
            >
              #{hashtag}
            </Typography>
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
    </Card>
  );
};

export default BlogDetailManage;
