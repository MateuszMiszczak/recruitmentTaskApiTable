export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).match(/[A-Za-z]/)
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : string;
};
