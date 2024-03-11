import styles from "./Figure2.module.css";

const Figure2 = (): JSX.Element => {
  return (
    <svg
      className={styles.figureSvg2}
      viewBox="0 0 100 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 69.8718H38.4615V108.333H0V69.8718Z" fill="white" />
      <path d="M1.28205 25H33.3333V57.0513H1.28205V25Z" fill="white" />
      <path
        d="M46.1538 76.2821H78.2051V108.333H46.1538V76.2821Z"
        fill="white"
      />
      <path
        d="M46.1538 31.4103H71.7949V57.0513H46.1538V31.4103Z"
        fill="white"
      />
      <path d="M3.20513 0H16.0256V12.8205H3.20513V0Z" fill="white" />
      <path d="M87.1795 95.5128H100V108.333H87.1795V95.5128Z" fill="white" />
    </svg>
  );
};

export default Figure2;
