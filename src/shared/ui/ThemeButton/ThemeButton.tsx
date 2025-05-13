import React, { useEffect, useState } from "react";
import styles from "./ThemeButton.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider/config/redux";
import { themeSlice } from "./model/theme.slice";

export function ThemeButton() {
  const dispatch = useAppDispatch();
  
  const themeState = useAppSelector((state) => {
    return themeSlice.selectors.currentTheme(state);
  });

  const changeTheme = () => {
    dispatch(themeSlice.actions.changeTheme());
  };

  return (
    <button
      onClick={changeTheme}
      id={styles.themeCustomButton}
      className={themeState == 'white' ? styles.sun : styles.night}
    >
      <span
        id={styles.themeChangeTime}
        className={themeState == 'white' ? styles.sun : styles.night}
      ></span>
    </button>
  );
}
