import { configureStore } from "@reduxjs/toolkit";
import { homeCardDataReducer } from "./Reducers/getHomePageReduce";

// const reduxLogger=require('redux-logger');
// const logger=reduxLogger.createLogger()

export const store = configureStore({
  reducer: {
    homeData: homeCardDataReducer,
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
