export const convertTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const _hours = hours > 13 ? `오후 ${hours - 12}시` : `오전 ${hours}시`;
  const minutes = date.getMinutes();
  const _minutes = `${minutes}분`;
  const converted = `${_hours} ${_minutes}`;
  return converted;
};


export const getHours = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  return hours > 13 ? `오후 ${hours - 12}시` : `오전 ${hours}시`;
};

export const getDate = (timestamp: number) => {
    const timeStamp = new Date(timestamp * 1000);
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const month = months[timeStamp.getMonth()];
    const date = timeStamp.getDate();
    const time = `${month}월 ${date}일`;
    return time;
};
