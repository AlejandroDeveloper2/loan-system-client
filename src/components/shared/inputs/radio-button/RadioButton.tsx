import {
  RadioButtonListProps,
  RadioButtonProps,
} from "@models/ComponentModels";

import { InputBase } from "../input-text/InputText";

import styles from "./RadioButton.module.css";

const RadioButton = (props: RadioButtonProps): JSX.Element => {
  const { id, name, value, label, disabled, checked, onChange } = props;

  return (
    <div className={styles.radioButton}>
      <input
        type="radio"
        id={id}
        defaultChecked={checked}
        name={name}
        value={value}
        disabled={disabled ? true : false}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.radioLabel + " " + "paragraph"}>
        {label}
      </label>
    </div>
  );
};

const RadioButtonList = (props: RadioButtonListProps): JSX.Element => {
  const { id, label, errorMessage, userHint, radioButtons } = props;
  return (
    <InputBase
      id={id}
      label={label}
      errorMessage={errorMessage}
      userHint={userHint}
    >
      <ul className={styles.radioButtonList}>
        {radioButtons.map((radioButton, i) => (
          <li key={i}>
            <RadioButton {...radioButton} />
          </li>
        ))}
      </ul>
    </InputBase>
  );
};

export default RadioButtonList;
