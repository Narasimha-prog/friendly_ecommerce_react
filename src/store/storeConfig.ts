import { persistStore, persistReducer } from "redux-persist";
import type { PersistConfig } from "redux-persist";
import authReducer from "./auth/authReducer";
import themeReducer from "./theme/themeReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});

// Persist config
const persistConfig: PersistConfig<RootReducer> = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootReducer = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;