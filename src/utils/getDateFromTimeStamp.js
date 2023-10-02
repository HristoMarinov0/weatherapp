export const getDateFromTimeStamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "short" });
  const dd = date.getDate();

  return `${dd} ${month}`;
};
