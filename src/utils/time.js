const toMinutesAndSeconds = (seconds) => {
  const date = new Date(seconds * 1000).toISOString();
  const minutesAndSeconds = date.slice(14, 19);
  return minutesAndSeconds;
};

const calculateWidth = (total, current) => {
  const percentage = current * 100 / total;
  const formatedPercentage = percentage.toFixed(2) + '%';
  return { width: formatedPercentage };
};

export { toMinutesAndSeconds, calculateWidth };
