import mainIcon from "../../assets/main-icon.svg";
import avatar from "../../assets/image-avatar.jpg";
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
      <FlexLeft>
        <SetupBarIcon src={mainIcon} />
      </FlexLeft>

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
