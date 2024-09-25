import * as S from "./Filter.styled";

export default function Filter() {
  return (
    <S.Container>
        <S.Header>
            <S.Title>Filter</S.Title>
        </S.Header>
        <S.FilterGroup>
            <S.TypeFilter>Category</S.TypeFilter>
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter /> 
        </S.FilterGroup>
        <S.Divider />
        <S.FilterGroup>
            <S.TypeFilter>Category</S.TypeFilter>
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter /> 
        </S.FilterGroup>
        <S.Divider /> 
        <S.FilterGroup>
            <S.TypeFilter>Category</S.TypeFilter>
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter />
                <S.Filter /> 
        </S.FilterGroup>
        <S.Divider />    
    </S.Container>
        )
}