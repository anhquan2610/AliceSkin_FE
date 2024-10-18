import * as S from "./CreateBlog.styled";
import YoungMan from "../../assets/images/young man with laptop on chair.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, resetBlogState } from "../../store/blogSlice";
import { uploadImage, resetImageState } from "../../store/imageSlice";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [hashtags, setHashTags] = useState("");
  const [content, setContent] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    isLoading: isBlogLoading,
    isSuccess: isBlogSuccess,
    message: blogMessage,
  } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    if (isBlogSuccess) {
      setIsPopupOpen(true);
    } else if (blogMessage) {
      setIsPopupOpen(true);
    }
  }, [isBlogSuccess, blogMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thumbnail) {
      dispatch(uploadImage(thumbnail))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            const blogData = {
              title,
              thumbnail: result.payload,
              hashtags,
              content,
            };
            dispatch(createBlog(blogData));
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      const blogData = { title, hashtags, content };
      dispatch(createBlog(blogData));
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    dispatch(resetBlogState());
    dispatch(resetImageState());
    if (isBlogSuccess) {
      navigate("/user-info");
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.TopContainer>
        <S.LeftTopContainer>
          <S.Title>Create a New Blog Post</S.Title>
          <S.Description>
            Share your thoughts with the world{" "}
            <i className="bi bi-emoji-heart-eyes"></i>
          </S.Description>
          <S.Group>
            <S.Label>Title Blog :</S.Label>
            <S.Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.Group>
          <S.Group>
            <S.Label>Image :</S.Label>
            <S.Input
              placeholder="Content"
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </S.Group>
          <S.Group>
            <S.Label>HasTags :</S.Label>
            <S.Input
              type="text"
              placeholder="HasTags"
              value={hashtags}
              onChange={(e) => setHashTags(e.target.value.split(","))}
            />
          </S.Group>
        </S.LeftTopContainer>
        <S.RightTopContainer>
          <S.ImageContainer>
            <S.Image src={YoungMan} />
          </S.ImageContainer>
        </S.RightTopContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.LeftBottomContainer>
          <S.GroupContent>
            <S.Label>Content :</S.Label>
            <S.ContentInput
              placeholder="Write Content Here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.GroupContent>
        </S.LeftBottomContainer>
        <S.RightBottomContainer>
          <S.Title>Blog Content</S.Title>
          <S.Description>Preview your blog here</S.Description>
        </S.RightBottomContainer>
      </S.BottomContainer>
      <S.ButtonContainer>
        <S.BtnSubmit type="submit" disabled={isBlogLoading}>
          {isBlogLoading ? "Creating..." : "Create Blog"}
        </S.BtnSubmit>
      </S.ButtonContainer>

      {/* Popup thông báo */}
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose}>
        {blogMessage}
      </Popup>
    </S.Container>
  );
}
