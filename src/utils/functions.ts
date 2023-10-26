export const formatDurationFromISO8601 = (isoDuration: string) => {
  const duration = /P(\d+Y)?(\d+D)?T?(\d+H)?(\d+M)?(\d+S)?/.exec(isoDuration);

  if (!duration) {
    throw new Error("Invalid ISO 8601 duration format");
  }

  const years = duration[1] ? duration[1].replace("Y", "") : "0";
  const days = duration[2] ? duration[2].replace("D", "") : "0";
  const hours = duration[3] ? duration[3].replace("H", "") : "0";
  const minutes = duration[4] ? duration[4].replace("M", "") : "0";
  let seconds = duration[5] ? duration[5].replace("S", "") : "0";

  seconds =
    parseInt(seconds) >= 0 && parseInt(seconds) <= 9 ? `0${seconds}` : seconds;

  if (years !== "0") {
    return `${years}:${days}:${hours}:${minutes}:${seconds}`;
  }
  if (days !== "0") {
    return `${days}:${hours}:${minutes}:${seconds}`;
  }
  if (hours !== "0") {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export const formatViews = (numberOfViews: number) => {
  if (numberOfViews < 1000) {
    return `${numberOfViews}`;
  } else if (numberOfViews < 1000000) {
    return `${(numberOfViews / 1000).toFixed(1)}K`;
  } else if (numberOfViews < 1000000000) {
    return `${(numberOfViews / 1000000).toFixed(1)}M`;
  } else {
    return `${(numberOfViews / 1000000000).toFixed(1)}B`;
  }
};
