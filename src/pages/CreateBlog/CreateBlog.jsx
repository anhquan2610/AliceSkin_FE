import * as S from "./CreateBlog.styled";
import YoungMan from "../../assets/images/young man with laptop on chair.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, resetBlogState } from "../../store/blogSlice";
import { uploadImage, resetImageState } from "../../store/imageSlice";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../utils/Nontification.utils";
import { searchHastags } from "../../store/hastagsSlice";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [hashtags, setHashtags] = useState([]); // Lưu các hashtag dưới dạng mảng
  const [inputHashtag, setInputHashtag] = useState(""); // Lưu giá trị input tạm thời
  const [content, setContent] = useState(""); // Thêm state cho content (nội dung bài viết)
  const [hashtagSuggestions, setHashtagSuggestions] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading: isBlogLoading, isSuccess: isBlogSuccess } = useSelector(
    (state) => state.blog
  );

  const availableHastags = useSelector((state) => state.hastag.hastags);

  useEffect(() => {
    if (inputHashtag) {
      const query = inputHashtag.split(",").join(" ");
      dispatch(searchHastags(query)); // Gửi query dưới dạng chuỗi
    } else {
      setHashtagSuggestions([]); // Đóng dropdown nếu không có hashtag
    }
  }, [inputHashtag, dispatch]);

  useEffect(() => {
    setHashtagSuggestions(availableHastags); // Cập nhật gợi ý hashtags khi có thay đổi
  }, [availableHastags]);

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

  useEffect(() => {
    if (isBlogSuccess) {
      notifySuccess("Blog created successfully!");
      navigate("/user_info");
      dispatch(resetBlogState());
    }
  }, [isBlogSuccess, navigate, dispatch]);

  const handleHashtagSelect = (hashtag) => {
    if (!hashtags.includes(hashtag)) {
      setHashtags([...hashtags, hashtag]); // Thêm hashtag vào mảng
    }
    setInputHashtag(""); // Xoá giá trị input sau khi chọn
    setHashtagSuggestions([]); // Đóng dropdown sau khi chọn
  };

  const handleInputChange = (e) => {
    setInputHashtag(e.target.value); // Cập nhật giá trị input
  };

  const handleRemoveHashtag = (hashtag) => {
    setHashtags(hashtags.filter((item) => item !== hashtag)); // Xoá hashtag khỏi mảng
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputHashtag.trim() !== "") {
      e.preventDefault();
      const newHashtag = inputHashtag.trim();
      if (!hashtags.includes(newHashtag)) {
        setHashtags([...hashtags, newHashtag]); // Thêm hashtag tự nhập vào mảng
      }
      setInputHashtag(""); // Xoá input sau khi thêm
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
              placeholder="Add Hashtags"
              value={inputHashtag}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Lắng nghe sự kiện Enter
            />
            {inputHashtag && (
              <div>
                {Array.isArray(hashtagSuggestions) &&
                  hashtagSuggestions.map((hashtag) => (
                    <div
                      key={hashtag.id}
                      onClick={() => handleHashtagSelect(hashtag.name)}
                      style={{
                        cursor: "pointer",
                        padding: "5px",
                        border: "1px solid #ccc",
                      }}
                    >
                      {hashtag.name}
                    </div>
                  ))}
              </div>
            )}
            <div>
              {hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  style={{ margin: "5px", display: "inline-block" }}
                >
                  <span>{hashtag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveHashtag(hashtag)}
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    X
                  </button>
                </span>
              ))}
            </div>
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
              onChange={(e) => setContent(e.target.value)} // Cập nhật content
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
    </S.Container>
  );
}
