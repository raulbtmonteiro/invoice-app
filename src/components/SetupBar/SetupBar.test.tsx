import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "../../themes";
import "@testing-library/jest-dom";
import { SetupBar } from ".";

const i18nextMock = {
  language: "en",
  changeLanguage: jest.fn(),
};

const renderComponent = () => {
  return render(
    <AppTheme>
      <BrowserRouter>
        <SetupBar i18next={i18nextMock} />
      </BrowserRouter>
    </AppTheme>
  );
};

describe("<SetupBar />", () => {
  it("should render correctly", () => {
    renderComponent();

    const userAvatar = screen.getByAltText("Avatar do usuário");
    const mainIcon = screen.getByAltText("Logo do aplicativo");
    const themeIcon = screen.getByAltText("Ícone do tema atual");
    const languageIcon = screen.getByAltText("Ícone do idioma atual");

    expect(userAvatar).toBeInTheDocument();
    expect(mainIcon).toBeInTheDocument();
    expect(themeIcon).toBeInTheDocument();
    expect(languageIcon).toBeInTheDocument();
  });

  it("should toggle theme on click", () => {
    renderComponent();

    const themeIcon = screen.getByAltText("Ícone do tema atual");
    expect(themeIcon).toBeInTheDocument();
    fireEvent.click(themeIcon);
    //expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("should change language on click", () => {
    renderComponent();

    const flagIcon = screen.getByAltText("Ícone do idioma atual");
    expect(flagIcon).toBeInTheDocument();
    fireEvent.click(flagIcon);
    expect(i18nextMock.changeLanguage).toHaveBeenCalledTimes(1);
  });
});
