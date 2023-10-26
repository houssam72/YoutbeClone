import { Dispatch, SetStateAction } from "react";

export type sideBarDispatch = {
  setSideBar: Dispatch<SetStateAction<boolean>>;
  sideBar: boolean;
};

export type homeCardData = {
  idVideo: string;
  videoPicture: string;
  videoDuration: string;
  ChannelFullName: string;
  ChannelPicture: string;
  viewsNumber: string;
  publishTime: string;
  title: string;
};

// export type homeCardData2={

//     kind: String,
//     "etag": String,
//     id: {
//       kind: string,
//       videoId: string,
//       channelId: string,
//       playlistId: string
//     },
//     snippet: {
//       "publishedAt": string,
//       "channelId": string,
//       "title": string,
//       "description": string,
//       "thumbnails": {
//         (key): {
//           "url": string,
//           "width": unsigned integer,
//           "height": unsigned integer
//         }
//       },
//       "channelTitle": string,
//       "liveBroadcastContent": string
//     }

// }

export type InitialState = {
  loading: boolean;
  data: homeCardData[];
  nextPageToken: string;
  error: string;
};
