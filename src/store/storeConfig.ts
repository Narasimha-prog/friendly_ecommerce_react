
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

import {
  persistStore,
  persistReducer,
}        from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import themeReducer from "./theme/themeReducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","theme"]
};

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
