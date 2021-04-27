import { configureStore } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import app from '../features/app/appSlice';

export const store = configureStore({
  reducer: {
    counter,
    app,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
