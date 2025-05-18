import { createSelector, type PayloadAction } from "@reduxjs/toolkit";
import {
  createSlice,
  rootReducer,
} from "../../../../app/providers/StoreProvider/config/redux";

type ThemeStatus = {
  themeStatus: "light" | "dark";
};

const initialThemeState: ThemeStatus = {
  themeStatus: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  selectors: {
    currentTheme: (state) => state.themeStatus,
  },
  reducers: {
    changeTheme: (state) => {
        state.themeStatus = state.themeStatus == 'dark' ? 'light' : 'dark';
    }
  },
}).injectInto(rootReducer);
