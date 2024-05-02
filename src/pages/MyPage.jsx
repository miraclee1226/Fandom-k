import styles from "pages/MyPage.module.scss";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Button from "components/Button";
import RoundImage from "components/Image/RoundImage/RoundImage";
import { useState } from "react";
import icoPlus from "assets/icons/plus.svg";

export default function MyPage() {
  const [idols, setIdols] = useState([
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "아이브",
      gender: "female",
      name: "장원영",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "블랙핑크",
      gender: "female",
      name: "리사",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "아이브",
      gender: "female",
      name: "장원영",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "블랙핑크",
      gender: "female",
      name: "리사",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "아이브",
      gender: "female",
      name: "장원영",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "블랙핑크",
      gender: "female",
      name: "리사",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "아이브",
      gender: "female",
      name: "장원영",
      id: 0,
    },
    {
      totalVotes: 1000,
      profilePicture: "https://example.com/profile.jpg",
      group: "블랙핑크",
      gender: "female",
      name: "리사",
      id: 0,
    },
  ]);

  return (
    <>
      <Navbar />
      <Layout>
        <AddFavoriteSection idols={idols} />
      </Layout>

      {/* <Button>후원하기</Button>
      <Button disabled>후원하기</Button>
      <Button size="sm">차트 투표하기</Button>
      <Button.Border>더 보기</Button.Border>
      <Button.Arrow direction="left" />
      <Button.Arrow direction="right" size="lg" />
      <Button.Round>+ 추가하기</Button.Round>
      <Button.Radio /> */}
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
              <Button.Arrow direction="left" />
            </div>
            <div className={styles.slider}>
              <ul className={styles.gridContainer}>
                {idols.map((idol) => {
                  return (
                    <li className={styles.gridItem}>
                      <input
                        type="checkbox"
                        id={idol.name}
                        className={styles.chkItem}
                      />
                      <label htmlFor={idol.name} className={styles.labelItem}>
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
              <Button.Arrow direction="right" />
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
