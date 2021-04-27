import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface AppState {
  drawerOpen: boolean;
}

const initialState: AppState = {
  drawerOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.drawerOpen = true;
    },
    closeDrawer: (state) => {
      state.drawerOpen = false;
    },
    triggerDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { openDrawer, closeDrawer, triggerDrawer } = appSlice.actions;

export const selectDrawerOpen = (state: RootState) => state.app.drawerOpen;

export default appSlice.reducer;
