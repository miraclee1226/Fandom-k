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
        strokeWidth="1"
        stroke="#fff"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="1"
        x2={graphLength}
        y2="1"
        fill="none"
        strokeWidth="1"
        stroke="#FC4D04"
        strokeDasharray={width}
        strokeDashoffset="dashOffsetLine"
        strokeLinecap="round"
      />
    </svg>
  );
}
