import { configureStore } from "@reduxjs/toolkit";
import siteReducer from './site'
import feedsReducer from './feeds'
import clientsReducer from "./clients";
export default configureStore({
    reducer: {
      siteDefaults:siteReducer,
      feeds:feedsReducer,
      clients:clientsReducer
    }
  })
