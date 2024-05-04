export default function timeCounter(time) {
  const now = new Date().getTime();
  const endTime = new Date(time).getTime();

  return Math.ceil((endTime - now) / 1000 / 60 / 60 / 24);
}
