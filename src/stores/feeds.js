import { createSlice } from "@reduxjs/toolkit";

export const feeds = createSlice({
  name: 'feeds',
  initialState: {
    feeds: []
  },
  reducers: {
    setFeeds(state, action) {
      state.feeds = action.payload
    }
  }

})

export const { setFeeds } = feeds.actions;

export default feeds.reducer