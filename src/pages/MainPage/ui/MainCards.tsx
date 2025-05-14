import React from 'react'
import styles from '../styles/MainCards.module.scss';
import { InfoCard } from '../../../shared/ui/InfoCard';
import { cardList } from '../model/constants/cards';
export default function MainCards() {
  return (
    <section className={styles.card}>
        <h1>
            Карточки
        </h1>
        <div className={styles.cards}>
            {cardList.map(item => {
                return (
                    <InfoCard card={item} />
                )
            })}
        </div>
    </section>
  )
}