export const sliceString = (string: string, length: number) => {
  if (string.length > length) return string.split('').slice(0, length).join('') + '...';
  else return string;
};
