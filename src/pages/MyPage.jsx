import styles from "pages/MyPage.module.scss";
import Navbar from "components/Navbar";
import Layout from "components/Layout/Layout";
import Button from "components/Button";
import RoundImage from "components/Image/RoundImage/RoundImage";
import { useState } from "react";
import icoPlus from "assets/icons/plus.svg";
import mockData from "mockData/femaleData.json";

export default function MyPage() {
  const [idols, setIdols] = useState(mockData);

  return (
    <>
      <Navbar />
      <Layout>
        <AddFavoriteSection idols={idols} />
      </Layout>
    </>
  );
}

function AddFavoriteSection({ idols }) {
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
                {idols.map((idol) => {
                  return (
                    <li className={styles.gridItem}>
                      <input
                        type="checkbox"
                        id={idol.id}
                        className={styles.chkItem}
                      />
                      <label htmlFor={idol.id} className={styles.labelItem}>
                        <div className={styles.imgWrap}>
                          <RoundImage />
                        </div>
                      </label>
                      <span className={styles.itemInfo}>
                        <strong className={styles.itemTitle}>
                          {idol.name}
                        </strong>
                        <p className={styles.itemCategory}>{idol.group}</p>
                      </span>
                    </li>
                  );
                })}
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
