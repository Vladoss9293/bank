import React, { useEffect, useState } from "react";
import styles from "./ThemeButton.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/config/redux";
import { themeSlice } from "./model/theme.slice";

export function ThemeButton() {
  const dispatch = useAppDispatch();
  
  const currentStateTheme = useAppSelector((state) => {
    return themeSlice.selectors.currentTheme(state);
  });

  const changeTheme = () => {
    dispatch(themeSlice.actions.changeTheme());
  };

  return (
    <button
      onClick={changeTheme}
      id={styles.themeCustomButton}
      className={currentStateTheme == 'light' ? styles.light : styles.dark}
    >
      <span
        id={styles.themeChangeTime}
        className={currentStateTheme == 'dark' ? styles.light : styles.dark}
      ></span>
    </button>
  );
}
