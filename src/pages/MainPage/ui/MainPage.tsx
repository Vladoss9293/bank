import React from "react";
import { MainLayout } from "../../../shared/layouts";
import { useAppSelector } from "../../../app/providers/StoreProvider/config/redux";
import { themeSlice } from "../../../shared/ui/ThemeButton/model/theme.slice";
import styles from '../styles/MainPage.module.scss'
import { selectCurrentTheme } from "../../../shared/ui/ThemeButton/model";

export function MainPage() {
  const currentTheme = useAppSelector(selectCurrentTheme)

  return (
    <MainLayout>
      <main id={currentTheme == 'white' ? styles.sunTheme : styles.nightTheme} style={{ width: "100%", height: "100%" }}>
        Глав
      </main>
    </MainLayout>
  );
}
