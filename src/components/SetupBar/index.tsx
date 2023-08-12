import { useContext, useCallback, useState } from "react";
import avatar from "../../assets/images/image-avatar.jpg";
import mainIcon from "../../assets/images/main-icon.svg";
import { ThemePreferencesContext } from "../../themes";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import brazil from "../../assets/images/br.svg";
import usa from "../../assets/images/us.svg";
import * as S from "./styles";

import { Link } from "react-router-dom";

interface ISetupBar {
  i18next: any;
}

export const SetupBar = ({ i18next }: ISetupBar) => {
  const { toggleTheme, theme } = useContext(ThemePreferencesContext);
  const [lang, setLang] = useState(i18next.language);

  const icon = theme.title === "dark" ? moon : sun;

  const flag = useCallback(() => {
    return lang === "en" ? usa : brazil;
  }, [lang]);

  const changeLanguage = () => {
    i18next.changeLanguage(i18next.language === "en" ? "ptBR" : "en");
    setLang(i18next.language);
  };

  return (
    <S.Container>
      <Link to="/" aria-label="Ir para a home">
        <S.FlexLeft>
          <S.Logo src={mainIcon} aria-hidden data-testid="main-icon" />
        </S.FlexLeft>
      </Link>

      <S.FlexRight>
        <S.LanguageButton onClick={changeLanguage} aria-label="Alterar idioma">
          <img src={flag()} aria-hidden data-testid="lang-icon" />
        </S.LanguageButton>

        <S.ThemeButton onClick={toggleTheme} aria-label="Alterar tema de cores">
          <img src={icon} aria-hidden data-testid="theme-icon" />
        </S.ThemeButton>

        <S.UserContainer>
          <S.UserImage
            src={avatar}
            alt="Avatar do usuário"
            data-testid="user-image"
          />
        </S.UserContainer>
      </S.FlexRight>
    </S.Container>
  );
};
