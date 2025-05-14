import React from 'react'
import styles from './OpenCardButton.module.scss';
import { useAppSelector } from '../../../app/providers/StoreProvider/config/redux';
import { selectCurrentTheme } from '../ThemeButton/model';

export function OpenCardButton() {
    const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <button id={currentTheme == 'white' ? styles.whiteTheme : styles.nightTheme} className={styles.btnRedirect}>
        Відкрити
    </button>
  )
}
