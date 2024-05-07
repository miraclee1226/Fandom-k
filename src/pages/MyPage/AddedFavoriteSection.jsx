import { useState } from "react";
import Image from "components/Image";
import TouchArea from "components/TouchArea";
import { ReactComponent as DeleteIcon } from "assets/icons/round_x_icon.svg";
import mockData from "mockData/femaleData.json";
import styles from "./MyPage.module.scss";

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
