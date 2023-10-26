import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  LISTS_SEARCH_URL,
  LIST_CHANNEL_URL,
  LIST_VIDEO_URL,
} from "../../utils/request";
import { InitialState, homeCardData } from "../../Types";
import { RootState } from "..";
import { formatDurationFromISO8601, formatViews } from "../../utils/functions";

const initialState: InitialState = {
  loading: false,
  data: [],
  nextPageToken: "",
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeVideoData",
  async (isNext: boolean, { getState }) => {
    const {
      homeData: { nextPageToken: nextPageTokenFromState },
    } = getState() as RootState;
    let myData: homeCardData[];
    let nextToken: string;

    return await axios
      .get(
        `${LISTS_SEARCH_URL}&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""
        }`
      )
      .then(async (response) => {
        nextToken = response.data.nextPageToken;
        myData = await Promise.all(
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

        const obj: { myData: homeCardData[]; nextToken: string } = {
          myData,
          nextToken,
        };
        return obj;
      });
  }
);

const homeCardDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.data = [];
      state.nextPageToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchHomeData.fulfilled,
      (
        state: InitialState,
        action: PayloadAction<{ myData: homeCardData[]; nextToken: string }>
      ) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.myData];
        state.nextPageToken = action.payload.nextToken;
        state.error = "";
      }
    );
    builder.addCase(fetchHomeData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const homeCardDataReducer = homeCardDataSlice.reducer;
export const { clearVideos } = homeCardDataSlice.actions;
