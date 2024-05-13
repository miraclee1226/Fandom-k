import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSetAtom } from "jotai";
import Button from "components/Button";
import Image from "components/Image";
import Skeleton from "components/Skeleton";
import useRequest from "hooks/useRequest";
import useSlider from "hooks/useSlider";
import useResponsive from "hooks/useResponsive";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import favoriteIdolsAtom from "context/favoriteIdols";
import icoPlus from "assets/icons/plus.svg";
import styles from "./MyPage.module.scss";

const DATA_NUM_BY_DEVICE = {
  MOBILE: 6,
  TABLET: 8,
  PC: 16,
};

function firstDataNumByDevice() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 744) {
    return DATA_NUM_BY_DEVICE.MOBILE;
  } else if (windowWidth >= 744 && windowWidth < 1200) {
    return DATA_NUM_BY_DEVICE.TABLET;
  } else {
    return DATA_NUM_BY_DEVICE.PC;
  }
}

export default function AddFavoriteSection() {
  const [idols, setIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(firstDataNumByDevice());
  const [cursorArr, setCursorArr] = useState([0]);
  const [checkedIdols, setCheckedIdols] = useState([]);
  const checkboxesRef = useRef([]);
  const [isPC, isTablet, isMobile] = useResponsive();
  const setFavoriteIdols = useSetAtom(favoriteIdolsAtom);

  const { requestFunc: getIdolsData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: "/idols",
      params: {
        pageSize,
        cursor: cursorArr[currentPage - 1],
      },
    },
  });

  const handleLeftBtnClick = async () => {
    if (currentPage === 1) return;
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleRightBtnClick = async () => {
    if (currentPage >= cursorArr.length) return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleCheckInputChange = (e, idolData) => {
    const isChecked = e.target.checked;

    if (isChecked) setCheckedIdols((prev) => [...prev, idolData]);
    else {
      setCheckedIdols((prev) => prev.filter((data) => data.id !== idolData.id));
    }
  };

  const addFavoriteIdols = () => {
    const originalFavoriteIdolsData =
      JSON.parse(localStorage.getItem("FavoriteIdols")) ?? [];
    const checkedIdolsData = checkedIdols.map((each) => {
      each.checkedId = uuidv4();
      return each;
    });

    const updatedFavoriteIdolsData = [
      ...originalFavoriteIdolsData,
      ...checkedIdolsData,
    ];

    setFavoriteIdols(updatedFavoriteIdolsData);

    setCheckedIdols([]);
    checkboxesRef.current.forEach((checkbox) => {
      if (!checkbox) return;
      checkbox.checked = false;
    });
  };

  useEffect(() => {
    if (isPC) setPageSize(DATA_NUM_BY_DEVICE.PC);
    if (isTablet) setPageSize(DATA_NUM_BY_DEVICE.TABLET);
    if (isMobile) setPageSize(DATA_NUM_BY_DEVICE.MOBILE);

    setCurrentPage(1);
  }, [isPC, isTablet, isMobile]);

  useEffect(() => {
    (async () => {
      const result = await getIdolsData();

      setIdols(result?.data?.list);

      if (!result?.data?.nextCursor) return;
      setCursorArr((prev) => {
        const newArray = [...prev, result?.data?.nextCursor];

        return newArray.filter((item, idx) => newArray.indexOf(item) === idx);
      });
    })();
  }, [currentPage]);

  useEffect(() => {
    (async () => {
      const result = await getIdolsData();

      setIdols(result?.data?.list);
      setCursorArr([0, result?.data?.nextCursor]);
    })();
  }, [pageSize]);

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          관심 있는 아이돌을 추가해보세요.
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.AddFavorite}>
            {isMobile ? (
              <MobileSlider
                checkboxesRef={checkboxesRef}
                handleCheckInputChange={handleCheckInputChange}
              />
            ) : (
              <div className={styles.sliderWrap}>
                <div className={styles.sliderBtn}>
                  <Button.Arrow
                    direction="left"
                    size="lg"
                    onClick={() => handleLeftBtnClick()}
                  />
                </div>
                <div className={styles.slider}>
                  <ul className={styles.gridContainer}>
                    {idols?.map((idol) => (
                      <li key={idol.id} className={styles.gridItem}>
                        <input
                          type="checkbox"
                          id={idol.id}
                          className={styles.chkItem}
                          ref={(el) => checkboxesRef.current.push(el)}
                          onChange={(e) => handleCheckInputChange(e, idol)}
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
                    ))}
                  </ul>
                </div>
                <div className={styles.sliderBtn}>
                  <Button.Arrow
                    direction="right"
                    size="lg"
                    onClick={() => handleRightBtnClick()}
                  />
                </div>
              </div>
            )}
            <div className={styles.btnAddFavorite}>
              <Button.Round onClick={addFavoriteIdols}>
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

function MobileSlider({ checkboxesRef, handleCheckInputChange }) {
  const [idolsDataArr, setIdolsDataArr] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);
  const sentinelRef = useRef(null);
  const isIntersection = useIntersectionObserver(sentinelRef);
  const [sliderRef, sliderHandler] = useSlider();

  const { isLoading, requestFunc: getIdolsData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: "/idols",
      params: {
        pageSize: DATA_NUM_BY_DEVICE.MOBILE,
        cursor: nextCursor,
      },
    },
  });

  useEffect(() => {
    (async () => {
      if (!isIntersection || nextCursor === null) return;
      const result = await getIdolsData();

      if (!result?.data?.nextCursor) {
        setNextCursor(result?.data?.nextCursor);
        return;
      }

      setIdolsDataArr((prev) => [...prev, result?.data?.list]);
      setNextCursor(result?.data?.nextCursor);
    })();
  }, [isIntersection]);

  return (
    <div
      className={styles.mobileSlider}
      ref={sliderRef}
      onMouseDown={sliderHandler.mouseDown}
      onMouseUp={sliderHandler.mouseUp}
      onMouseMove={sliderHandler.mouseMove}
      onMouseLeave={sliderHandler.mouseLeave}
    >
      <div className={styles.content}>
        {idolsDataArr.map((idols, idx) => (
          <MobileIdolGrid
            key={idx}
            idols={idols}
            checkboxesRef={checkboxesRef}
            handleCheckInputChange={handleCheckInputChange}
          />
        ))}
        {isLoading && <Skeleton.AddFavorite isMobile />}
        <div className={styles.sentinel} ref={sentinelRef} />
      </div>
    </div>
  );
}

function MobileIdolGrid({ idols, checkboxesRef, handleCheckInputChange }) {
  return (
    <ul className={styles.idolGrid}>
      {idols?.map((idol) => (
        <li key={idol.id} className={styles.gridItem}>
          <input
            type="checkbox"
            id={idol.id}
            className={styles.chkItem}
            ref={(el) => checkboxesRef.current.push(el)}
            onChange={(e) => handleCheckInputChange(e, idol)}
          />
          <label htmlFor={idol.id} className={styles.labelItem}>
            <div className={styles.imgWrap}>
              <Image.Round src={idol.profilePicture} lazyMode={true} />
            </div>
          </label>
          <span className={styles.itemInfo}>
            <strong className={styles.itemTitle}>{idol.name}</strong>
            <p className={styles.itemCategory}>{idol.group}</p>
          </span>
        </li>
      ))}
    </ul>
  );
}

