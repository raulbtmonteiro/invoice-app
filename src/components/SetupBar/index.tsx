import avatar from "../../assets/image-avatar.jpg";
import mainIcon from "../../assets/main-icon.svg";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface ISetupBar {
  themeIcon: string;
  toggleTheme: () => void;
}

export const SetupBar = ({ themeIcon, toggleTheme }: ISetupBar) => {
  return (
    <S.SetupBarContainer>
      <Link to="/">
        <S.FlexLeft>
          <S.SetupBarIcon src={mainIcon} />
        </S.FlexLeft>
      </Link>

      <S.FlexRight>
        <S.SetupBarTheme onClick={toggleTheme}>
          <img src={themeIcon} />
        </S.SetupBarTheme>

        <S.SetupBarUser>
          <S.SetupBarUserImage src={avatar} />
        </S.SetupBarUser>
      </S.FlexRight>
    </S.SetupBarContainer>
  );
};
