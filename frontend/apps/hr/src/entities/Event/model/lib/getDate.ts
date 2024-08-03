const monthList = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const dataEdit = (data: string) => {
  const splitData = data.split('-').reverse();
  if (splitData[0][0] === '0') splitData[0] = splitData[0].slice(1);
  const newData = `${splitData[0]} ${monthList[Number(splitData[1]) - 1]} ${splitData[2]}`;
  return newData;
};
