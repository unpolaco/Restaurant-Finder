export const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = formatDate(today.getMonth(), true);
  const day = formatDate(today.getDate(), false);
  return `${year}${month}${day}`;
};

const formatDate = (date: number, isMonth: boolean) => {
  if (isMonth) {
    ++date;
  }
  return date < 10 ? `0${date}` : date;
};
