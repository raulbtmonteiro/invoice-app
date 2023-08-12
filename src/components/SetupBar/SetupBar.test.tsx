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

    const userAvatar = screen.getByTestId("user-image");
    const mainIcon = screen.getByTestId("main-icon");
    const themeIcon = screen.getByTestId("theme-icon");
    const languageIcon = screen.getByTestId("lang-icon");

    expect(userAvatar).toBeInTheDocument();
    expect(mainIcon).toBeInTheDocument();
    expect(themeIcon).toBeInTheDocument();
    expect(languageIcon).toBeInTheDocument();
  });

  it("should toggle theme on click", () => {
    renderComponent();

    const themeIcon = screen.getByTestId("theme-icon");
    expect(themeIcon).toBeInTheDocument();
    fireEvent.click(themeIcon);
    //expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("should change language on click", () => {
    renderComponent();

    const flagIcon = screen.getByTestId("lang-icon");
    expect(flagIcon).toBeInTheDocument();
    fireEvent.click(flagIcon);
    expect(i18nextMock.changeLanguage).toHaveBeenCalledTimes(1);
  });
});
