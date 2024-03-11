import { InputIndicatorProps } from "@models/ComponentModels";

import { InputText } from "@components/index";

import styles from "./InputIndicator.module.css";

const InputIndicator = (props: InputIndicatorProps): JSX.Element => {
  const { indicatorLabel } = props;

  return (
    <div className={styles.inputIndicator}>
      <InputText {...props} />
      <div className={styles.indicator}>
        <p className="paragraph">{indicatorLabel}</p>
      </div>
    </div>
  );
};

export default InputIndicator;
