import { Settings } from "iconoir-react";

import { LoaderProps } from "@models/ComponentModels";

import styles from "./Loader.module.css";

const Loader = ({ message }: LoaderProps): JSX.Element => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.icons}>
        <Settings className={styles.settingOne} />
        <Settings className={styles.settingTwo} />
      </div>

      <p className="paragraph">{message}</p>
    </div>
  );
};

export default Loader;
