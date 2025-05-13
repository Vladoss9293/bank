import React from 'react'
import { useAppSelector } from '../../../app/providers/StoreProvider/config/redux';
import { themeSlice } from '../../../shared/ui/ThemeButton/model/theme.slice';
import styles from '../styles/Footer.module.scss';
import { selectCurrentTheme } from '../../../shared/ui/ThemeButton/model';

export default function Footer() {
  const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <footer className={styles.footer} id={currentTheme == 'white' ? styles.sunTheme : styles.nightTheme}>
      footer
    </footer>
  )
}
