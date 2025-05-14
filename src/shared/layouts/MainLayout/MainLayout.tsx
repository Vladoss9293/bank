import React from 'react'
import { Header } from '../../../widgets/Header'
import { Footer } from '../../../widgets/Footer'
import styles from './MainLayout.module.scss'
import { useAppSelector } from '../../../app/providers/StoreProvider/config/redux'
import { selectCurrentTheme } from '../../ui/ThemeButton/model'

interface Props {
    children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <div style={{ width: "100%", height: "auto" }}>
        <Header />
        <main className={styles.childrenElement} id={currentTheme == 'white' ? styles.whiteTheme : styles.nightTheme}>
          {children}
        </main>
        <Footer />
    </div>
  )
}
