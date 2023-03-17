import { Theme } from "../themes/types";

export interface IPage {
  theme: Theme;
  toggleTheme: () => void;
}