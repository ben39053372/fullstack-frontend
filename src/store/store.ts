import { configureStore } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import theme from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter,
    theme,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
