import { formatCurrency } from "../formatNumber";

describe("Format Currency Function", () => {
  test("should return value in currency format ", () => {
    expect(formatCurrency(150)).toEqual("R$ 150,00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.0)).toEqual("R$ 150,00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.59)).toEqual("R$ 150,59");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.002)).toEqual("R$ 150,00");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.599)).toEqual("R$ 150,60");
  });

  test("should return value in currency format ", () => {
    expect(formatCurrency(150.594)).toEqual("R$ 150,59");
  });
});
