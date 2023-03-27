export const formatCurrency = (price: number) => {
  return `R$ ${price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const Months = {
  [1]: "Jan",
  [2]: "Feb",
  [3]: "Mar",
  [4]: "Apr",
  [5]: "May",
  [6]: "Jun",
  [7]: "Jul",
  [8]: "Aug",
  [9]: "Sep",
  [10]: "Oct",
  [11]: "Nov",
  [12]: "Dec",
};

export const formatDate = (date: string) => {
  const result = new Date(date);
  let target = 0;
  Object.keys(Months).map((month, index) => {
    if (month == result.getMonth().toString()) {
      return (target = index + 1);
    }
  });
  return `${result.getDate() + 1} ${
    Object.values(Months)[target]
  } ${result.getFullYear()}`;
};
