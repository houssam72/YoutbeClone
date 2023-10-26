import axios from "axios";
import { homeCardData } from "../Types";
import { formatDurationFromISO8601, formatViews } from "./functions";
import { LIST_CHANNEL_URL, LIST_VIDEO_URL } from "./request";

export const parseData = async (response: any): Promise<homeCardData[]> => {
  const myData: homeCardData[] = await Promise.all(
    response.data.items.map(async (item: any, i: number) => {
      const videoResponse = await axios.get(
        `${LIST_VIDEO_URL}&id=${item.id.videoId}`
      );
      const videoData = await videoResponse.data.items[0];

      const channelResponse = await axios.get(
        `${LIST_CHANNEL_URL}&id=${videoData.snippet.channelId}`
      );
      const channelData = await channelResponse.data.items[0];

      const cardData: homeCardData = {
        idVideo: item.id.videoId,
        title: videoData.snippet.title,
        videoPicture: videoData.snippet.thumbnails.high.url,
        videoDuration: formatDurationFromISO8601(
          videoData.contentDetails.duration
        ),
        ChannelFullName: videoData.snippet.channelTitle,
        ChannelPicture: channelData.snippet.thumbnails.high.url,
        viewsNumber: formatViews(videoData.statistics.viewCount),
        publishTime: "Function s'arrive",
      };

      return cardData;
    })
  );
  return myData;
};
