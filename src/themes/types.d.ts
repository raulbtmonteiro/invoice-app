export interface Theme {
  template: Template;
  icon: string;
}

interface Template {
  title: string;
  colors: Colors;
}

interface Colors {
  body: string;
  bodyCards: string;
  logoBackground: string;
  logoShadow: string;
  setupBarBackground: string;
  title: string;
  text: string;
  textButtom: string;
  textDescription: string;
  textHighlight: string;
  valuesDescriptionContainer: string;
  grandTotalBG: string;
}
