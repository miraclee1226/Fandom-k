import styles from "./LineGraph.module.scss";

export default function LineGraph({ width, percent }) {
  const graphLength = (width * percent) / 100;

  return (
    <svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      className={styles.lineGraph}
    >
      <line
        x1="0"
        y1="1"
        x2={width}
        y2="1"
        fill="none"
        stroke-width="1"
        stroke="#fff"
        stroke-linecap="round"
      />
      <line
        x1="0"
        y1="1"
        x2={graphLength}
        y2="1"
        fill="none"
        stroke-width="1"
        stroke="#FC4D04"
        stroke-dasharray={width}
        stroke-dashoffset="dashOffsetLine"
        stroke-linecap="round"
      />
    </svg>
  );
}
