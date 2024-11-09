import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogById,
  updateBlogByUser,
  resetBlogState,
} from "../../store/blogSlice";
import { uploadImage } from "../../store/imageSlice";
import { notifySuccess, notifyError } from "../../utils/Nontification.utils"; // Make sure to import notifyError
import { searchHastags } from "../../store/hastagsSlice";
import * as S from "./UpdateBlog.styled";
import YoungMan from "../../assets/images/young man with laptop on chair.png";

export default function UpdateBlog() {
  const { id: blog_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const { selectedBlog, isSuccess, isLoading } = useSelector(
    (state) => state.blog
  );
  const availableHashtags = useSelector((state) => state.hastag.hastags);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
    hashtags: [],
    inputHashtag: "",
  });

  const [hashtagSuggestions, setHashtagSuggestions] = useState([]);

  useEffect(() => {
    dispatch(getBlogById(blog_id));
  }, [dispatch, blog_id]);

  useEffect(() => {
    if (selectedBlog) {
      setFormData({
        title: selectedBlog.title || "",
        content: selectedBlog.content || "",
        thumbnail: selectedBlog.thumbnail || "",
        hashtags: selectedBlog.hashtags || [],
        inputHashtag: "",
      });
    }
  }, [selectedBlog]);

  useEffect(() => {
    if (isSuccess) {
      notifySuccess("Blog updated successfully!");
      navigate("/user_info");
      dispatch(resetBlogState());
    }
  }, [isSuccess, navigate, dispatch]);

  useEffect(() => {
    if (formData.inputHashtag) {
      const query = formData.inputHashtag.split(",").join(" ");
      dispatch(searchHastags(query));
    } else {
      setHashtagSuggestions([]);
    }
  }, [formData.inputHashtag, dispatch]);

  useEffect(() => {
    setHashtagSuggestions(availableHashtags);
  }, [availableHashtags]);

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

  const handleHashtagSelect = (hashtag) => {
    if (formData.hashtags.includes(hashtag)) {
      notifyError("This hashtag has already been added.");
    } else {
      setFormData({
        ...formData,
        hashtags: [...formData.hashtags, hashtag],
        inputHashtag: "",
      });
      setHashtagSuggestions([]);
    }
  };

  const handleRemoveHashtag = (hashtag) => {
    setFormData({
      ...formData,
      hashtags: formData.hashtags.filter((item) => item !== hashtag),
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && formData.inputHashtag.trim() !== "") {
      e.preventDefault();
      const newHashtag = formData.inputHashtag.trim();
      if (!formData.hashtags.includes(newHashtag)) {
        setFormData({
          ...formData,
          hashtags: [...formData.hashtags, newHashtag],
          inputHashtag: "",
        });
      } else {
        notifyError("This hashtag has already been added.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let thumbnailUrl = formData.thumbnail;

    if (thumbnailFile) {
      dispatch(uploadImage(thumbnailFile)).then((result) => {
        if (uploadImage.fulfilled.match(result)) {
          thumbnailUrl = result.payload;
          const updatedBlogData = {
            title: formData.title,
            content: formData.content,
            thumbnail: thumbnailUrl,
            hashtags: formData.hashtags,
          };
          dispatch(updateBlogByUser({ blog_id, blogData: updatedBlogData }));
        }
      });
    } else {
      const updatedBlogData = {
        title: formData.title,
        content: formData.content,
        thumbnail: formData.thumbnail,
        hashtags: formData.hashtags,
      };
      dispatch(updateBlogByUser({ blog_id, blogData: updatedBlogData }));
    }
  };

  const isFormChanged = () => {
    return (
      formData.title !== selectedBlog.title ||
      formData.content !== selectedBlog.content ||
      formData.thumbnail !== selectedBlog.thumbnail ||
      formData.hashtags.join(", ") !== selectedBlog.hashtags.join(", ")
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
              name="inputHashtag"
              placeholder="Add Hashtags (separate by comma)"
              value={formData.inputHashtag}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {formData.inputHashtag && (
              <S.SuggestionsWrapper>
                {hashtagSuggestions.map((hashtag) => (
                  <S.HashtagSuggestionsContainer
                    key={hashtag.id}
                    onClick={() => handleHashtagSelect(hashtag.name)}
                  >
                    {hashtag.name}
                  </S.HashtagSuggestionsContainer>
                ))}
              </S.SuggestionsWrapper>
            )}
            <S.SelectedHashtagsWrapper>
              {formData.hashtags.map((hashtag, index) => (
                <S.HashtagContainer key={index}>
                  <span>{hashtag}</span>
                  <S.RemoveHashtagButton
                    type="button"
                    onClick={() => handleRemoveHashtag(hashtag)}
                  >
                    <i className="bi bi-x-octagon"></i>
                  </S.RemoveHashtagButton>
                </S.HashtagContainer>
              ))}
            </S.SelectedHashtagsWrapper>
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
          disabled={!isFormChanged() || isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </S.BtnSubmit>
      </S.ButtonContainer>
    </S.Container>
  );
}
