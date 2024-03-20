import { SpinnerProps } from "@models/ComponentModels";

import styles from "./Spinner.module.css";

const Spinner = ({ className, message }: SpinnerProps): JSX.Element => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.ldsFacebook}>
        <div className={styles[className]}></div>
        <div className={styles[className]}></div>
        <div className={styles[className]}></div>
      </div>
      {message ? <p className="paragraph">{message}</p> : null}
    </div>
  );
};

export default Spinner;
