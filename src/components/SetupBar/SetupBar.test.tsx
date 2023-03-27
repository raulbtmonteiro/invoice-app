import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "../../themes";
import { SetupBar } from ".";
import "@testing-library/jest-dom";

describe("<SetupBar />", () => {
  it("should render correctly", () => {
    render(
      <AppTheme>
        <BrowserRouter>
          <SetupBar />
        </BrowserRouter>
      </AppTheme>
    );
    const avatar = screen.getByAltText("Avatar do usuário");
    const mainIcon = screen.getByAltText("Logo do aplicativo");
    const themeIcon = screen.getByAltText("Ícone do tema atual");

    expect(avatar).toBeInTheDocument();
    expect(mainIcon).toBeInTheDocument();
    expect(themeIcon).toBeInTheDocument();
  });

  it("should toggle theme correctly", () => {
    render(
      <AppTheme>
        <BrowserRouter>
          <SetupBar />
        </BrowserRouter>
      </AppTheme>
    );

    const themeIcon = screen.getByAltText("Ícone do tema atual");
    expect(themeIcon).toBeInTheDocument();
    fireEvent.click(themeIcon);
  });
});
