import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HOME_VIDEO_URL } from "../../utils/request";
import { InitialState, homeCardData } from "../../Types";

const initialState: InitialState = {
  loading: false,
  data: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchHomeData = createAsyncThunk("home/fetchHomeVideoData", () => {
  let myData: homeCardData[];
  return axios.get(HOME_VIDEO_URL).then((response) => {
    myData = response.data.items.map((item: any, i: number) => {
      const cardData: homeCardData = {
        idVideo: item.id.videoId,
        title: item.snippet.title,
        videoPicture: item.snippet.thumbnails.high.url,
        videoDuration: "s'arrive",
        ChannelFullName: item.snippet.channelTitle,
        ChannelPicture: "S'arrive",
        viewsNumber: 18,
        publishTime: "Function s'arrive",
      };

      return cardData;
    });
    return myData;
  });
});

const homeCardDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchHomeData.fulfilled,
      (state: InitialState, action: PayloadAction<homeCardData[]>) => {
        state.loading = false;
        state.data = action.payload;
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
