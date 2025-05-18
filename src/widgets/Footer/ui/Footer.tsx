import React from "react";
import { useAppSelector } from "../../../app/providers/StoreProvider/config/redux";
import { themeSlice } from "../../../shared/ui/ThemeButton/model/theme.slice";
import styles from "../styles/Footer.module.scss";
import { selectCurrentTheme } from "../../../shared/ui/ThemeButton/model";
import { getCurrentTime } from "../../../shared/lib/helpers/getCurrentTime";
import CLogo from "../../../shared/assets/C-logo.webp";
import { supportLink } from "../../../shared/constants/Links";

export default function Footer() {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const currentYear = getCurrentTime({ year: "numeric" });

  return (
    <footer
      className={styles.footer}
      id={currentTheme == "light" ? styles.lightTheme : styles.darkTheme}
    >
      <span className={styles.about}>
        <img src={CLogo} width="25px" height="25px" alt="CLogo" /> &copy;{" "}
        {currentYear} Candi bank, Inc.
      </span>
      <ul className={styles.supportLink}>
        {supportLink.map((item) => {
          return (
            <li key={item.uid}>
              <a id={currentTheme == "light" ? styles.lightTheme : styles.darkTheme} href={item.link}>{item.name} </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
