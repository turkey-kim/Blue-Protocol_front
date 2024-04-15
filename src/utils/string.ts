export const sliceString = (string: string, length: number) => {
  if (string.length > length) return string.split('').slice(0, length).join('') + '...';
  else return string;
};

export const changeDateFormat = (date: string) => {
  let [mm, dd, yyyy] = date.split('/');
  if (mm.length < 2) mm = '0' + mm;
  if (dd.length < 2) dd = '0' + dd;
  return `${yyyy}/${mm}/${dd}`;
};
