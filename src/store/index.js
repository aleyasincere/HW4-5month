import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './PostsSlice';
import requestReducer from './PostSlicetwo';

export const store = configureStore({
    reducer: {
        postsSlice,
        requestReducer
    }
})