import * as S from "./Instagram.styled";
import i1 from "../../../assets/images/i1.jpg";
import i2 from "../../../assets/images/i2.jpg";
import i3 from "../../../assets/images/i3.jpg";
import i4 from "../../../assets/images/i4.jpg";
import i5 from "../../../assets/images/i5.jpg";
import i6 from "../../../assets/images/i6.jpg";

export default function Instagram() {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Flow Us On Instagram</S.Title>
      </S.ContainerTitle>
      <S.ContainerContent>
        <S.HoverEffect>
          <S.Image src={i1} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
        <S.HoverEffect>
          <S.Image src={i2} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
        <S.HoverEffect>
          <S.Image src={i3} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
        <S.HoverEffect>
          <S.Image src={i4} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
        <S.HoverEffect>
          <S.Image src={i5} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
        <S.HoverEffect>
          <S.Image src={i6} />
          <S.InstagramIcon className="bi bi-instagram" />
        </S.HoverEffect>
      </S.ContainerContent>
    </S.Container>
  );
}
