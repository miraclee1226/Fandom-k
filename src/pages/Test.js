import { useEffect, useRef, useState } from "react";
import Image from "components/Image";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useRequest from "hooks/useRequest";
import "./test.scss";

export default function Test() {
  const [idolsDataArr, setIdolsDataArr] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);
  const sentinelRef = useRef(null);
  const isIntersection = useIntersectionObserver(sentinelRef);

  const { requestFunc: getIdolsData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: "/idols",
      params: {
        pageSize: 6,
        cursor: nextCursor,
      },
    },
  });

  useEffect(() => {
    (async () => {
      if (!isIntersection) return;
      const result = await getIdolsData();

      if (!result?.data?.nextCursor) return;

      setIdolsDataArr((prev) => [...prev, result?.data?.list]);
      setNextCursor(result?.data?.nextCursor);
    })();
  }, [isIntersection]);

  return (
    <div className="body">
      <div className="slider">
        <div className="content">
          {idolsDataArr.map((idols, idx) => (
            <MobileIdolGrid key={idx} idols={idols} />
          ))}
          <div className="sentinel" ref={sentinelRef} />
        </div>
      </div>
    </div>
  );
}

function MobileIdolGrid({ idols }) {
  return (
    <div className="idolGrid">
      {idols?.map((idol) => (
        <div key={idol.id}>
          <img src={idol.profilePicture} alt="img" />
        </div>
      ))}
    </div>
  );
}
