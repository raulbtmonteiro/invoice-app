import mainIcon from "../../assets/main-icon.svg";
import avatar from "../../assets/image-avatar.jpg";
import { Link } from "react-router-dom";
import {
  FlexLeft,
  FlexRight,
  SetupBarContainer,
  SetupBarIcon,
  SetupBarTheme,
  SetupBarUser,
  SetupBarUserImage,
} from "./styles";

interface SetupBar {
  themeIcon: string;
  toggleTheme: () => void;
}

export const SetupBar = ({ themeIcon, toggleTheme }: SetupBar) => {
  return (
    <SetupBarContainer>
      <Link to="/">
        <FlexLeft>
          <SetupBarIcon src={mainIcon} />
        </FlexLeft>
      </Link>

      <FlexRight>
        <SetupBarTheme onClick={toggleTheme}>
          <img src={themeIcon} />
        </SetupBarTheme>

        <SetupBarUser>
          <SetupBarUserImage src={avatar} />
        </SetupBarUser>
      </FlexRight>
    </SetupBarContainer>
  );
};
