import { InputBaseProps, InputProps } from "@models/ComponentModels";

import { ErrorMessage } from "@components/index";

import styles from "./InputText.module.css";

export const InputBase = (props: InputBaseProps): JSX.Element => {
  const { children, id, label, errorMessage, userHint } = props;

  return (
    <div className={styles.inputContainer}>
      <label className="paragraph" htmlFor={id}>
        {label}
        {userHint ? (
          <span className={"captionText" + " " + styles.hintText}>
            {userHint}
          </span>
        ) : null}
      </label>
      {children}
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

const InputText = (props: InputProps): JSX.Element => {
  const {
    id,
    type,
    name,
    value,
    label,
    placeholder,
    errorMessage,
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
      <kbd className={styles.inputBody} id={id}>
        <Icon />
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </kbd>
    </InputBase>
  );
};

export default InputText;
