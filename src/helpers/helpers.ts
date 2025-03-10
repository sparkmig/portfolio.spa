export const isEqualOrAll = (filter: string | string[], value: string) => {
  if (Array.isArray(filter)) {
    return filter.includes(value) || value === "All";
  }
  return filter === value || value === "All";
};
