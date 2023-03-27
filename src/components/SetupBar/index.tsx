import avatar from "../../assets/images/image-avatar.jpg";
import mainIcon from "../../assets/images/main-icon.svg";
import { ThemePreferencesContext } from "../../themes";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useContext } from "react";

export const SetupBar = () => {
  const { toggleTheme, theme } = useContext(ThemePreferencesContext);

  const icon = theme.title === "dark" ? moon : sun;

  return (
    <S.SetupBarContainer>
      <Link to="/">
        <S.FlexLeft>
          <S.SetupBarIcon src={mainIcon} alt="Logo do aplicativo" />
        </S.FlexLeft>
      </Link>

      <S.FlexRight>
        <S.SetupBarTheme onClick={toggleTheme}>
          <img src={icon} alt="Ícone do tema atual" />
        </S.SetupBarTheme>

        <S.SetupBarUser>
          <S.SetupBarUserImage src={avatar} alt="Avatar do usuário" />
        </S.SetupBarUser>
      </S.FlexRight>
    </S.SetupBarContainer>
  );
};
