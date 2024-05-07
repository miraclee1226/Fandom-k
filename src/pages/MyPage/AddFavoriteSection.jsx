import { useEffect, useState } from "react";
import Button from "components/Button";
import Image from "components/Image";
import useRequest from "hooks/useRequest";
import useResponsive from "hooks/useResponsive";
import icoPlus from "assets/icons/plus.svg";
import styles from "./MyPage.module.scss";

const DATA_NUM_BY_DEVICE = {
  MOBILE: 6,
  TABLET: 8,
  PC: 16,
};

export default function AddFavoriteSection() {
  const [idols, setIdols] = useState([]);
  const [firstDataCursor, setFirstDataCursor] = useState(null);
  const [lastDataCursor, setLastDataCursor] = useState(null);
  const [pageSize, setPageSize] = useState(DATA_NUM_BY_DEVICE.MOBILE);
  const [isPC, isTablet, isMobile] = useResponsive();
  const { requestFunc: getIdolsData } = useRequest({
    options: {
      method: "get",
      url: "/idols",
      params: {
        pageSize,
        // cursor: lastDataCursor,
      },
    },
  });

  const updateData = async () => {
    const response = await getIdolsData();

    setIdols(response.data.list);
    setLastDataCursor(response.data.nextCursor);
    setFirstDataCursor(response.data.nextCursor - pageSize);
  };

  useEffect(() => {
    if (isPC) setPageSize(DATA_NUM_BY_DEVICE.PC);
    if (isTablet) setPageSize(DATA_NUM_BY_DEVICE.TABLET);
    if (isMobile) setPageSize(DATA_NUM_BY_DEVICE.MOBILE);
  }, [isPC, isTablet, isMobile]);

  useEffect(() => {
    updateData();
  }, [pageSize, firstDataCursor, lastDataCursor]);

  // useEffect(() => {
  //   console.log({ firstDataCursor, lastDataCursor });
  // }, [firstDataCursor, lastDataCursor]);

  const handleLeftBtnClick = () => {};

  const handleRightBtnClick = () => {};

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          관심 있는 아이돌을 추가해보세요.
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.AddFavorite}>
            <div className={styles.sliderWrap}>
              <div className={styles.sliderBtn}>
                <Button.Arrow direction="left" size="lg" />
              </div>
              <div className={styles.slider}>
                <ul className={styles.gridContainer}>
                  {idols.map((idol) => {
                    return (
                      <li key={idol.id} className={styles.gridItem}>
                        <input
                          type="checkbox"
                          id={idol.id}
                          className={styles.chkItem}
                        />
                        <label htmlFor={idol.id} className={styles.labelItem}>
                          <div className={styles.imgWrap}>
                            <Image.Round
                              src={idol.profilePicture}
                              lazyMode={true}
                            />
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
        </div>
      </section>
    </>
  );
}
