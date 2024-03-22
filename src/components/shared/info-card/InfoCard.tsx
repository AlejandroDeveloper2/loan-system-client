import { InfoCardProps } from "@models/ComponentModels";

import styles from "./InfoCard.module.css";

const InfoCard = ({ Icon, label, value }: InfoCardProps): JSX.Element => {
  return (
    <article className={styles.infoCard}>
      <div className={styles.infoCardHead}>
        <Icon />
        <span className="buttonText">{label}</span>
      </div>
      <p className="buttonText">{value}</p>
    </article>
  );
};

export default InfoCard;
