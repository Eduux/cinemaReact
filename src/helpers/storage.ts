export const setItem = (key: string, value: string | object | []): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string): string | null => {
  const item = localStorage.getItem(key);

  return item && JSON.parse(item);
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};
