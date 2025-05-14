import { MainLayout } from "../../../shared/layouts";
import styles from '../styles/MainPage.module.scss'
import MainBanner from "./MainBanner";
import MainCards from "./MainCards";

export function MainPage() {
  return (
    <MainLayout>
      <div style={{ border: "1px dotted red" }} className={styles.contentWrapper}>
        <MainBanner />
        <MainCards />
      </div>
    </MainLayout>
  );
}
