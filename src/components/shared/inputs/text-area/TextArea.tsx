import { TextAreaProps } from "@models/ComponentModels";

import { InputBase } from "../input-text/InputText";

import styles from "./TextArea.module.css";
import stylesInput from "../input-text/InputText.module.css";

const TextArea = (props: TextAreaProps): JSX.Element => {
  const {
    id,
    name,
    label,
    errorMessage,
    placeholder,
    value,
    autoResize,
    userHint,
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
      <kbd
        className={stylesInput.inputBody + " " + styles.textAreaBody}
        id={id}
      >
        <Icon />
        <textarea
          className={
            autoResize ? styles.autoResizeStyle : styles.noAutoResizeStyle
          }
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </kbd>
    </InputBase>
  );
};

export default TextArea;
