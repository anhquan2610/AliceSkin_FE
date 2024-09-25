import * as S from "./BlogDetail.styled";
import DateOfBlog from "../../../../components/infoBlog/dateOfBlog/dateOfBlog";
import InfoUser from "../../../../components/infoBlog/infoUser/infoUser";
import TypeBlog from "../../../../components/typeBlog/typeBlog";
import "bootstrap-icons/font/bootstrap-icons.css";
import itemList from "../../../../assets/images/itemList.png";
import { useState } from "react";

export default function BlogDetail() {
  

  const articleContent = `
  Lorem ipsum dolor sit amet<p></p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
            <p></p>Where to Buy Authentic Products:
            https://nmfnmmgg.sangiahot.com/tinhchatgiammun
  `

  return (
    <S.Container>
      <S.AuthorBlog>
        <S.Author>
          <InfoUser />
        </S.Author>
        <S.Date>
          Posted on <DateOfBlog />
        </S.Date>
      </S.AuthorBlog>
      <S.TitleBlog>Top 10 Sunscreens in 2024</S.TitleBlog>
      <S.ContainerType>
        <S.HastagType>
          <TypeBlog />
        </S.HastagType>
        <S.LikeGroup>
          <S.HeartIcon>
            <i className="bi bi-heart"></i>
          </S.HeartIcon>
          <S.HeartCount>10</S.HeartCount>
        </S.LikeGroup>
      </S.ContainerType>
      <PaginationArticle content={articleContent} charsPerPage={1000} />
      
    </S.Container>
  );
}

const PaginationArticle = ({ content, charsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);
  // Chia nội dung thành các phần
  const pages = content.match(new RegExp(`.{1,${charsPerPage}}`, "g")) || [];

  const totalPages = pages.length;


  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  
  return (
    <div>
      <S.ContentContainer >
        <S.ImageBlog>
          <S.Img src={itemList} />
        </S.ImageBlog>
        <S.ContentBlog>
          <S.DescriptionBlog>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </S.DescriptionBlog>
          <S.Content >
            Lorem ipsum dolor sit amet<p></p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
            <p></p>Where to Buy Authentic Products:
            https://nmfnmmgg.sangiahot.com/tinhchatgiammun
          </S.Content>
        </S.ContentBlog>
      </S.ContentContainer>
      <p style={{justifyContent: "center", display:"flex"}}>
        Page {currentPage + 1} of {totalPages}
      </p>
      <S.Navigate>
        <S.GroupNavigate>
          <S.IconNavigate>
            <i className="bi bi-chevron-left"></i>
          </S.IconNavigate>
          <S.BtnNavigate onClick={prevPage} disabled={currentPage === 0}>
            Prev
          </S.BtnNavigate>
        </S.GroupNavigate>
        <S.GroupNavigate>
          <S.BtnNavigate onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</S.BtnNavigate>
          <S.IconNavigate>
            <i className="bi bi-chevron-right"></i>
          </S.IconNavigate>
        </S.GroupNavigate>
      </S.Navigate>
      
      
    </div>
  );
};
