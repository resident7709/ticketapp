export const formatDate = (date: Date) => {
  return date.toLocaleDateString('ru-RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });
};
