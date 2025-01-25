function calculateTimePassed(timestamp: {
  seconds: number;
  nanoseconds: number;
}): string {
  const givenDate = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6
  );
  const now = new Date();
  const differenceInMillis = now.getTime() - givenDate.getTime();

  const daysPassed = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(daysPassed / 7);
  const monthsPassed = Math.floor(daysPassed / 30.44);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes}`;
  };

  if (daysPassed === 0) {
    return `today at ${formatTime(givenDate)}`;
  } else if (daysPassed <= 6) {
    return `${daysPassed} ${daysPassed === 1 ? "day ago" : "days ago"}`;
  } else if (weeksPassed < 4) {
    return `${weeksPassed} ${weeksPassed === 1 ? "week ago" : "weeks ago"}`;
  } else {
    return `${monthsPassed} ${monthsPassed === 1 ? "month ago" : "months ago"}`;
  }
}

export { calculateTimePassed };
