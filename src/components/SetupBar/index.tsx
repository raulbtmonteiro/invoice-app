import avatar from "../../assets/images/image-avatar.jpg";
import mainIcon from "../../assets/images/main-icon.svg";
import { ThemePreferencesContext } from "../../themes";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import brazil from "../../assets/images/br.svg";
import usa from "../../assets/images/us.svg";
import { useContext, useState } from "react";
import * as S from "./styles";

import { Link } from "react-router-dom";
import i18next from "i18next";

export const SetupBar = () => {
  const { toggleTheme, theme } = useContext(ThemePreferencesContext);
  const [flag, setFlag] = useState(usa);

  const icon = theme.title === "dark" ? moon : sun;

  const handleClick = () => {
    i18next.changeLanguage(i18next.language === "en" ? "ptBR" : "en");
    setFlag(i18next.language === "en" ? usa : brazil);
  };

  return (
    <S.SetupBarContainer>
      <Link to="/">
        <S.FlexLeft>
          <S.SetupBarIcon src={mainIcon} alt="Logo do aplicativo" />
        </S.FlexLeft>
      </Link>

      <S.FlexRight>
        <S.Button onClick={() => handleClick()}>
          <img src={flag} alt="Ícone do idioma atual" />
        </S.Button>

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
