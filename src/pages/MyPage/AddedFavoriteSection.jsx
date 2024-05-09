import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import Image from "components/Image";
import DeleteIcon from "pages/MyPage/DeleteIcon.jsx";
import useTouchArea from "hooks/useTouchArea";
import addButtonClickedAtom from "context/favoriteIdolsObserver";
import styles from "./MyPage.module.scss";

export default function AddedFavoriteSection() {
  const [idols, setIdols] = useState([]);
  const [addButtonClicked, setAddButtonClickedAtom] =
    useAtom(addButtonClickedAtom);
  const { TouchArea } = useTouchArea({ component: DeleteIcon });

  const deleteIdol = (checkedId) => {
    const updatedIdolsData = idols.filter(
      (data) => data.checkedId !== checkedId,
    );

    setIdols(updatedIdolsData);
    localStorage.setItem("FavoriteIdols", JSON.stringify(updatedIdolsData));
  };

  useEffect(() => {
    const favoriteIdolsData = JSON.parse(localStorage.getItem("FavoriteIdols"));

    setIdols(favoriteIdolsData ?? []);
    setAddButtonClickedAtom(false);
  }, [addButtonClicked]);

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>내가 관심있는 아이돌</h2>
        <div className={styles.addedSlider}>
          <div className={styles.addedFavorite}>
            <ul className={styles.list}>
              {idols?.map((idol) => (
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
