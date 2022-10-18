import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isSidebarShown: boolean;
}

const initialState: IInitialState = {
  isSidebarShown: false,
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: initialState,
  reducers: {
    showSidebar: (state) => {
      state.isSidebarShown = true;
    },
    hideSidebar: (state) => {
      state.isSidebarShown = false;
    },
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarShown = action.payload;
      console.log("sidebar", state.isSidebarShown);
    },
  },
});

export const uiReducer = uiSlice.reducer;
