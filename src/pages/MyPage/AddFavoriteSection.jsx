import Button from "components/Button";
import Image from "components/Image";
import icoPlus from "assets/icons/plus.svg";
import styles from "./MyPage.module.scss";

export default function AddFavoriteSection({ idols }) {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          관심 있는 아이돌을 추가해보세요.
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.AddFavorite}>
            <div className={styles.sliderBtn}>
              <Button.Arrow direction="left" size="lg" />
            </div>
            <div className={styles.slider}>
              <ul className={styles.gridContainer}>
                {idols.map((idol) => (
                  <li key={idol.id} className={styles.gridItem}>
                    <input
                      type="checkbox"
                      id={idol.id}
                      className={styles.chkItem}
                    />
                    <label htmlFor={idol.id} className={styles.labelItem}>
                      <div className={styles.imgWrap}>
                        <Image.Round />
                      </div>
                    </label>
                    <span className={styles.itemInfo}>
                      <strong className={styles.itemTitle}>{idol.name}</strong>
                      <p className={styles.itemCategory}>{idol.group}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.sliderBtn}>
              <Button.Arrow direction="right" size="lg" />
            </div>
          </div>
          <div className={styles.btnAddFavorite}>
            <Button.Round>
              <img src={icoPlus} alt="icon" aria-hidden="true" />
              <span>추가하기</span>
            </Button.Round>
          </div>
        </div>
      </section>
    </>
  );
}
