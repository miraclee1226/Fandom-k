import styles from "./MyPage.module.scss";

export default function DeleteIcon() {
  return (
    <svg
      className={styles.deleteIconSize}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15.7143"
        cy="16.142"
        r="14.2857"
        fill="white"
        stroke="#02000E"
        strokeWidth="2.85714"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2121 11.6893C21.2807 11.6208 21.3352 11.5394 21.3724 11.4498C21.4095 11.3602 21.4287 11.2642 21.4288 11.1672C21.4288 11.0702 21.4098 10.9742 21.3727 10.8845C21.3357 10.7949 21.2813 10.7135 21.2128 10.6448C21.1442 10.5762 21.0628 10.5218 20.9733 10.4846C20.8837 10.4474 20.7876 10.4282 20.6907 10.4282C20.5937 10.4281 20.4976 10.4472 20.408 10.4842C20.3183 10.5213 20.2369 10.5756 20.1683 10.6442L15.7143 15.0982L11.2616 10.6442C11.123 10.5056 10.935 10.4277 10.739 10.4277C10.543 10.4277 10.355 10.5056 10.2165 10.6442C10.0779 10.7828 10 10.9708 10 11.1668C10 11.3628 10.0779 11.5507 10.2165 11.6893L14.6704 16.142L10.2165 20.5947C10.1478 20.6633 10.0934 20.7448 10.0563 20.8345C10.0191 20.9241 10 21.0202 10 21.1173C10 21.2143 10.0191 21.3104 10.0563 21.4001C10.0934 21.4898 10.1478 21.5712 10.2165 21.6399C10.355 21.7784 10.543 21.8563 10.739 21.8563C10.8361 21.8563 10.9322 21.8372 11.0218 21.8C11.1115 21.7629 11.193 21.7085 11.2616 21.6399L15.7143 17.1859L20.1683 21.6399C20.3069 21.7783 20.4948 21.856 20.6907 21.8559C20.8865 21.8557 21.0743 21.7778 21.2128 21.6392C21.3512 21.5006 21.4289 21.3127 21.4288 21.1168C21.4286 20.921 21.3507 20.7331 21.2121 20.5947L16.7581 16.142L21.2121 11.6893Z"
        fill="#112211"
        stroke="black"
        strokeWidth="0.714286"
      />
    </svg>
  );
}
