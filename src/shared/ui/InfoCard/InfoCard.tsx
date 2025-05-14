import React, { useEffect, useState } from "react";
import styles from "./InfoCard.module.scss";
import universalCard from "../../assets/Universal-card.webp";
import { OpenCardButton } from "../OpenButton";
import type { ICardsList } from "../../../pages/MainPage/model/constants/cards";
import { Skeleton } from "../Skeleton";

interface InfoCardProps {
  card: ICardsList;
}

export function InfoCard({ card }: InfoCardProps) {
  const [loadImg, setLoadImg] = useState(false);

  useEffect(() => {
    console.log(loadImg);
  }, [loadImg]);

  return (
    <article className={styles.card}>
        <div className={styles.imageWrapper}>
            {!loadImg && <Skeleton style={{ width: '230px', height: '146.84px', borderRadius: "10px", margin: "0px 20px" }} />}
            <img
              src={card.img}
              alt=""
              onLoad={() => setLoadImg(true)}
              style={{ display: loadImg ? "block" : "none" }}
            />

        </div>
      <div className={styles.descriptionContent}>
        <article className={styles.description}>
          <h2 className={styles.header}>{card.title}</h2>

          <ul className={styles.listOfAdvantages}>
            {card.description.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </article>
        <article className={styles.btnControl}>
          <OpenCardButton />
        </article>
      </div>
    </article>
  );
}
