import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogById,
  updateBlogByUser,
  resetBlogState,
} from "../../store/blogSlice";
import { uploadImage, resetImageState } from "../../store/imageSlice";
import * as S from "./UpdateBlog.styled";
import YoungMan from "../../assets/images/young man with laptop on chair.png";
import Popup from "../../components/Popup/Popup";

export default function UpdateBlog() {
  const { id: blog_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { selectedBlog, isSuccess, isLoading, message } = useSelector(
    (state) => state.blog
  );

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
    hashtags: "",
  });

  useEffect(() => {
    dispatch(getBlogById(blog_id));
  }, [dispatch, blog_id]);

  useEffect(() => {
    if (selectedBlog) {
      setFormData({
        title: selectedBlog.title || "",
        content: selectedBlog.content || "",
        thumbnail: selectedBlog.thumbnail || "",
        hashtags: selectedBlog.hashtags ? selectedBlog.hashtags.join(", ") : "",
      });
    }
  }, [selectedBlog]);

  useEffect(() => {
    if (isSuccess || message) {
      setIsPopupOpen(true);
    }
  }, [isSuccess, message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setFormData({ ...formData, thumbnail: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let thumnailUrl = formData.thumbnail;

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            thumnailUrl = result.payload;
            const updatedBlogData = {
              title: formData.title,
              content: formData.content,
              thumbnail: thumnailUrl,
              hashtags: formData.hashtags.split(","),
            };
            dispatch(updateBlogByUser({ blog_id, blogData: updatedBlogData }));
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      const updatedBlogData = {
        title: formData.title,
        content: formData.content,
        thumbnail: formData.thumbnail,
        hashtags: formData.hashtags.split(",").map((tag) => tag.trim()),
      };
      dispatch(updateBlogByUser({ blog_id, blogData: updatedBlogData }));
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    dispatch(resetBlogState());
    dispatch(resetImageState());
    if (isSuccess) {
      navigate("/user-info");
    }
  };

  const isFormChanged = () => {
    return (
      formData.title !== selectedBlog.title ||
      formData.content !== selectedBlog.content ||
      formData.thumbnail !== selectedBlog.thumbnail ||
      formData.hashtags !== selectedBlog.hashtags.join(", ")
    );
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.TopContainer>
        <S.LeftTopContainer>
          <S.Title>Update Blog Post</S.Title>

          <S.Group>
            <S.Label>Title Blog :</S.Label>
            <S.Input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </S.Group>
          <S.Group>
            <S.Label>Image :</S.Label>
            <S.Input type="file" accept="image/*" onChange={handleFileChange} />
            {formData.thumbnail && (
              <S.ImagePreview src={formData.thumbnail} alt="Preview" />
            )}
          </S.Group>
          <S.Group>
            <S.Label>HasTags :</S.Label>
            <S.Input
              type="text"
              name="hashtags"
              placeholder="HasTags (separate by comma)"
              value={formData.hashtags}
              onChange={handleInputChange}
            />
          </S.Group>
        </S.LeftTopContainer>
        <S.RightTopContainer>
          <S.ImageContainer>
            <S.Image src={YoungMan} alt="Young Man" />
          </S.ImageContainer>
        </S.RightTopContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.LeftBottomContainer>
          <S.GroupContent>
            <S.Label>Content :</S.Label>
            <S.ContentInput
              name="content"
              placeholder="Write Content Here..."
              value={formData.content}
              onChange={handleInputChange}
              required
            />
          </S.GroupContent>
        </S.LeftBottomContainer>
        <S.RightBottomContainer>
          <S.Title>Blog Content</S.Title>
          <S.Description>Preview your blog here</S.Description>
        </S.RightBottomContainer>
      </S.BottomContainer>
      <S.ButtonContainer>
        <S.BtnSubmit
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormChanged()}
        >
          {isLoading ? "Updating..." : "Update"}
        </S.BtnSubmit>
        <Popup isOpen={isPopupOpen} onClose={handlePopupClose}>
          {message}
        </Popup>
      </S.ButtonContainer>
    </S.Container>
  );
}
