export const lowerCaseFirstCharactor = (string) => {
  return `${string.slice(0, 1).toLowerCase()}${string.slice(1)}`;
};

export const calcTotalProduct = (arrProduct) => {
  return arrProduct.reduce((acc, item) => (acc += item.soLuong), 0);
};
