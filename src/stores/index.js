import { configureStore } from "@reduxjs/toolkit";
import siteReducer from './site'
import feedsReducer from './feeds'
export default configureStore({
    reducer: {
      siteDefaults:siteReducer,
      feeds:feedsReducer
    }
  })
