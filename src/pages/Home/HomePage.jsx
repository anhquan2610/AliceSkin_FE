import * as S from "./HomePage.styled";
import Highlight from "./HightLight/HightLight"
import BlogStar from "./BlogStar/BlogStar";
import ListBlog from "./ListBlog/ListBlog";
import Instagram from "./Instagram/Instagram";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
    return (
        <S.Container>
            <Navbar/>
            <S.ContainerOutLet>
                <Highlight />
                <BlogStar />
                <ListBlog />
                <Instagram/>
                <Footer/>
            </S.ContainerOutLet>
        </S.Container>
       
    );
}