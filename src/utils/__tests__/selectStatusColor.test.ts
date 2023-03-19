import { light } from "../../themes";
import { selectStatusColor } from "../selectStatusColor";

describe("Select Status Color Function", () => {
  it("should return the corect color", () => {
    expect(selectStatusColor(light, "paid")).toEqual({
      backgroundColor: "rgba(51, 214, 159, 0.06)",
      color: "#33D69F",
    });
  });

  it("should return null for an invalid status", () => {
    expect(selectStatusColor(light, "teste")).toEqual(null);
  });
});
