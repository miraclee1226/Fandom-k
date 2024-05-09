import { useState } from "react";
import Image from "components/Image";
import DeleteIcon from "pages/MyPage/DeleteIcon.jsx";
import mockData from "mockData/femaleData.json";
import useTouchArea from "hooks/useTouchArea";
import styles from "./MyPage.module.scss";

export default function AddedFavoriteSection() {
  const [idolsData, setIdolsData] = useState(mockData);
  const { TouchArea } = useTouchArea({ component: DeleteIcon})

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>내가 관심있는 아이돌</h2>
        <div className={styles.addedSlider}>
          <div className={styles.addedFavorite}>
            <ul className={styles.list}>
              {idolsData.map((idol) => {
                return (
                  <li key={idol.id} className={styles.item}>
                    <div className={styles.touchArea}>
                      <TouchArea />
                    </div>
                    <div className={styles.roundImage}>
                      <Image.Round src={idol.profilePicture} lazyMode={true} />
                    </div>
                    <span className={styles.itemInfo}>
                      <strong className={styles.itemTitle}>{idol.name}</strong>
                      <p className={styles.itemCategory}>{idol.group}</p>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
