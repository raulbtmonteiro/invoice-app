import { type } from "os";

export const formatCurrency = (price: number) => {
  return `R$ ${price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const Months = {
  1: "Jan",
  2: "Fev",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const formatDate = (date: string) => {
  const result = new Date(date);
  let target = 1;
  Object.keys(Months).map((month) => {
    if (month == result.getMonth().toString()) {
      let target = month;
    }
  });
  return `${result.getDate()} ${
    Object.values(Months)[target - 1]
  } ${result.getFullYear()}`;
};

type Months = {
  [key: number]: string;
};
