import { useState } from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/round_x_icon.svg";
import Image from "components/Image";
import mockData from "mockData/maleData.json";
import styles from "pages/MyPage.module.scss";
import TouchArea from "components/TouchArea";

export default function AddedFavoriteSection() {
  const [idolsData, setIdolsData] = useState(mockData);

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
                      <TouchArea>
                        <button type="button">
                          <DeleteIcon className={styles.deleteIcon} />
                        </button>
                      </TouchArea>
                    </div>
                    <div className={styles.roundImage}>
                      <Image.Round />
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
