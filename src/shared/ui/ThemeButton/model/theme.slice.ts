import { createSelector, type PayloadAction } from "@reduxjs/toolkit";
import {
  createSlice,
  rootReducer,
} from "../../../../app/providers/StoreProvider/config/redux";

type ThemeStatus = {
  themeStatus: "white" | "black";
};

const initialThemeState: ThemeStatus = {
  themeStatus: "black",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  selectors: {
    currentTheme: (state) => state.themeStatus,
  },
  reducers: {
    changeTheme: (state) => {
        state.themeStatus = state.themeStatus == 'black' ? 'white' : 'black';
    }
  },
}).injectInto(rootReducer);
