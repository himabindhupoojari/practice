export const convertDate = (dateString: string) => {
  // Parse the date string as UTC to avoid timezone issues
  const date = new Date(dateString + "T00:00:00Z");
  return date;
};
