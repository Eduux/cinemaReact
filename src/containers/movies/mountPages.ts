export default (results: string): number => {
  const limit = 10;
  return Math.ceil(Number(results) / limit);
};
