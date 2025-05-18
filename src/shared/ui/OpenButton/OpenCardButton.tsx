import React from 'react'
import styles from './OpenCardButton.module.scss';
import { useAppSelector } from '../../../app/providers/StoreProvider/config/redux';
import { selectCurrentTheme } from '../ThemeButton/model';

export function OpenCardButton() {
    const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <button id={currentTheme == 'light' ? styles.lightTheme : styles.darkTheme} className={styles.btnRedirect}>
        Відкрити
    </button>
  )
}
