import { Template } from "../themes/types";

export const selectStatusColor = (theme: Template, status: string) => {
  let result = { color: "", backgroundColor: "" };
  switch (status) {
    case "paid":
      result = {
        color: "#33D69F",
        backgroundColor: "rgba(51, 214, 159, 0.06)",
      };
      break;
    case "pending":
      result = {
        color: "#FF8F00",
        backgroundColor: "rgba(255, 143, 0, 0.06)",
      };
      break;
    case "draft":
      if (theme.title == "light") {
        result = {
          color: "#373B53",
          backgroundColor: "rgba(55, 59, 83,0.06)",
        };
      } else {
        result = {
          color: "#DFE3FA",
          backgroundColor: "rgba(223, 227, 250,0.06)",
        };
      }
      break;
    default:
      return null;
  }
  return result;
};