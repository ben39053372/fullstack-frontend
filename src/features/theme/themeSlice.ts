import { createSlice, DeepPartial, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

// Define a type for the slice state
interface ThemeState {
  color: {
    primary: string;
    secondary: string;
    text: string;
  };
}

// Define the initial state using that type
const initialState: ThemeState = {
  color: {
    primary: '#000',
    secondary: '#444',
    text: '#888',
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ThemeState>) => {
      state = action.payload;
    },
  },
});

export const { update } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
