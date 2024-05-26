export const extractTime = (dateString: Date) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  let minutes: any = date.getMinutes();

  let pmOrAm = "Am";

  if (hours > 12) {
    hours -= 12;
    pmOrAm = "Pm";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes} ${pmOrAm}`;
};
