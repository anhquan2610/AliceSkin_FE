import { Button, TableCell, TableRow } from "@mui/material";
import * as S from "./BlogRows.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/Visibility";
import DeleteBlogModal from "../BlogModal/DeleteBlogModal";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteBlogByAdmin } from "../../../../store/blogSlice";
import { notifySuccess } from "../../../../utils/Nontification.utils";
import { Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ChangeStatusModal from "../BlogModal/ChangeStatusBlogModal";

export default function BlogRows({ blog }) {
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpenStatus = (blogId) => {
    setSelectedBlogId(blogId);
    setOpenStatus(true);
  };

  const handleCloseStatus = () => {
    setOpenStatus(false);
    setSelectedBlogId(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteBlog = () => {
    dispatch(deleteBlogByAdmin(blog.blog_id))
      .unwrap()
      .then(() => notifySuccess("Delete blog successfully"))
      .then(() => {
        handleClose();
      });
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell
          component="th"
          align="left"
          style={{
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {blog.title}
        </TableCell>
        <TableCell align="left">{blog.user?.name}</TableCell>
        <TableCell align="left">
          {new Date(blog.created_at).toLocaleString("en-GB")}
        </TableCell>
        <TableCell align="left">
          {blog.hashtags?.map((hashtag, index) => (
            <S.Hashtag key={index}>#{hashtag}</S.Hashtag>
          ))}
        </TableCell>
        <TableCell align="left">{blog.status}</TableCell>
        <TableCell align="left">
          <Link
            to={{
              pathname: `/manage/blogs/${blog.blog_id}`,
              state: { blog_id: blog.blog_id },
            }}
          >
            <Button
              variant="outlined"
              sx={{ marginRight: 2 }}
              size="small"
              color="success"
              startIcon={<ViewIcon />}
            >
              View
            </Button>
          </Link>

          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ marginRight: 2 }}
            onClick={handleClickOpen}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            size="small"
            sx={{ color: "var(--blue)",  }}
            startIcon={<PublishedWithChangesIcon />}
            onClick={() => handleClickOpenStatus(blog.blog_id)}
          >
            Change Status
          </Button>
        </TableCell>
      </TableRow>
      <ChangeStatusModal
        open={openStatus}
        onClose={handleCloseStatus}
        blogId={selectedBlogId}
      />

      <DeleteBlogModal
        open={open}
        handleClose={handleClose}
        onConfirmDelete={handleDeleteBlog}
      />
    </>
  );
}
