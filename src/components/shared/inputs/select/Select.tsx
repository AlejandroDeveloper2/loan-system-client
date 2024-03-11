import { NavArrowRight } from "iconoir-react";

import { SelectProps } from "@models/ComponentModels";

import { InputBase } from "../input-text/InputText";

import stylesInput from "../input-text/InputText.module.css";
import styles from "./Select.module.css";

const Select = (props: SelectProps): JSX.Element => {
  const {
    id,
    name,
    label,
    value,
    options,
    errorMessage,
    userHint,
    disabled,
    Icon,
    onChange,
  } = props;

  return (
    <InputBase
      id={id}
      label={label}
      errorMessage={errorMessage}
      userHint={userHint}
    >
      <kbd className={stylesInput.inputBody} id={id}>
        <Icon />
        <select
          className={styles.select}
          id={id}
          name={name}
          value={value}
          disabled={disabled ? true : false}
          onChange={onChange}
        >
          <option value="" defaultValue={value}>
            -- Seleccione una opción --
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <NavArrowRight id="select-arrow" />
      </kbd>
    </InputBase>
  );
};

export default Select;
