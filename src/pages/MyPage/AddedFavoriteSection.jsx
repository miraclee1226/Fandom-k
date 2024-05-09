import { useAtom } from "jotai";
import Image from "components/Image";
import useTouchArea from "hooks/useTouchArea";
import favoriteIdolsAtom from "context/favoriteIdols";
import DeleteIcon from "pages/MyPage/DeleteIcon.jsx";
import styles from "./MyPage.module.scss";

export default function AddedFavoriteSection() {
  const [favoriteIdols, setFavoriteIdols] = useAtom(favoriteIdolsAtom);
  const { TouchArea } = useTouchArea({ component: DeleteIcon });

  const deleteIdol = (checkedId) => {
    setFavoriteIdols((prev) =>
      prev.filter((data) => data.checkedId !== checkedId),
    );
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>내가 관심있는 아이돌</h2>
        <div className={styles.addedSlider}>
          <div className={styles.addedFavorite}>
            <ul className={styles.list}>
              {favoriteIdols?.map((idol) => (
                <li key={idol.checkedId} className={styles.item}>
                  <div
                    className={styles.touchArea}
                    onClick={() => deleteIdol(idol.checkedId)}
                  >
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
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
