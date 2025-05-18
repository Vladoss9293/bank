import React from 'react'
import styles from '../styles/Header.module.scss';
import logoC from '../../../shared/assets/C-logo.webp';
import { useAppSelector } from '../../../app/providers/StoreProvider/config/redux';
import { selectCurrentTheme } from '../../../shared/ui/ThemeButton/model';
import { ThemeButton } from '../../../shared/ui/ThemeButton';

export default function Header() {
    const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <header id={currentTheme == 'light' ? styles.lightTheme : styles.darkTheme} className={styles.header}>
        <main className={styles.baseContent}>
            <section className={styles.leftSection}>
                <img className={styles.logoCBank} src={logoC} alt="" />
                <h1 className={styles.nameLogo}>
                    CANDI BANK
                </h1>
            </section>
            <section className={styles.rightSection}>
                <h2 className={styles.signIn}>
                    <a style={currentTheme == 'light' ? {color: "black"} : {color: "white"}} href="/register">
                        Войти в личный кабинет    
                    </a>
                </h2>
                <ThemeButton />
            </section>
        </main>
    </header>
  )
}
