import { configureStore } from "@reduxjs/toolkit";
import { PublicQueryApi } from "./query/PublicQuery";
// ...

export const store = configureStore({
  reducer: {
    [PublicQueryApi.reducerPath]: PublicQueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PublicQueryApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
