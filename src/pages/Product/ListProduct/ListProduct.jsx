import { useEffect } from "react";
import ItemProduct from "./ItemProduct/ItemProduct";
import * as S from "./ListProduct.styled";
import axios from "axios";

export default function ListProduct() {

    useEffect(() => {
        async function getData() {
            const res = await axios.get("http://127.0.0.1:8000/api/products");
            return res;
        }
        getData().then((res) => console.log(res));
        // axios.get("https://reqres.in/api/users?page=2")
        // // http://127.0.0.1:8000/api/products
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err));
       }, []);
    return (
        <S.Container>
            <S.HeaderContainer>
                <S.TotalProduct>Total: 900</S.TotalProduct>
                <S.FilterContainer>
                    <S.TextFilter>Sort By:</S.TextFilter>
                    <S.Filter>Filter</S.Filter>
                </S.FilterContainer>
            </S.HeaderContainer>
            <S.ListContainer>
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </S.ListContainer>
        </S.Container>
    );
}