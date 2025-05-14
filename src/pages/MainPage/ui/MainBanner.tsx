import React, { useState } from 'react'
import imgBank from '../../../shared/assets/Bank-img.webp'
import styles from '../styles/MainBanner.module.scss'

export default React.memo(function MainBanner() {

  return (
    <section className={styles.welcomeBanner}>
        <img src={imgBank} alt="Bank" />
        <article className={styles.aboutBank}>
            <h1>Candi Bank </h1>
            <h5>
                Лучший банк 2025 года — предоставляющий инновационные финансовые решения,
                высококачественное обслуживание и уникальные возможности для ваших сбережений.
                Мы гордимся своей репутацией и стремимся быть лидером на рынке, обеспечивая
                клиентам надёжность и комфорт.
            </h5>
        </article>
    </section>
  )
})