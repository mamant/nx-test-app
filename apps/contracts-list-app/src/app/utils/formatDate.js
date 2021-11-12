export function formatDate(incomingDate) {
  const date = new Date(incomingDate);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
