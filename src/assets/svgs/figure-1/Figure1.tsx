import styles from "./Figure1.module.css";

const Figure1 = (): JSX.Element => {
  return (
    <svg
      className={styles.figureSvg}
      viewBox="0 0 156 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M156 60H96V0H156V60Z" fill="var(--primary)" />
      <path d="M154 130H104V80H154V130Z" fill="var(--primary)" />
      <path d="M84 50H34V0H84V50Z" fill="var(--primary)" />
      <path d="M84 120H44V80H84V120Z" fill="var(--primary)" />
      <path d="M151 169H131V149H151V169Z" fill="var(--primary)" />
      <path d="M20 20H0V0H20V20Z" fill="var(--primary)" />
    </svg>
  );
};

export default Figure1;
