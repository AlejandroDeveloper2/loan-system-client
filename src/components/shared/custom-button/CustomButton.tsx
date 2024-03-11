import {
  BaseButtonProps,
  IconButtonProps,
  LabeledButtonProps,
  IconOnlyButtonProps,
} from "@models/ComponentModels";

import { Spinner } from "@components/index";

import styles from "./CustomButton.module.css";

const BaseButton = (props: BaseButtonProps): JSX.Element => {
  const { children, id, type, title, variant, disabled, loading, onClick } =
    props;
  return (
    <button
      id={id}
      type={type}
      title={title}
      className={styles[variant] + " " + styles.baseButtonStyle}
      disabled={disabled ? disabled : loading ? true : false}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export const LabeledButton = (props: LabeledButtonProps): JSX.Element => {
  const { children, label } = props;

  return (
    <BaseButton {...props}>
      {children}
      <span className="buttonText">{label}</span>
    </BaseButton>
  );
};

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { Icon } = props;

  return (
    <LabeledButton {...props}>
      <Icon />
    </LabeledButton>
  );
};

export const IconOnlyButton = (props: IconOnlyButtonProps): JSX.Element => {
  const { Icon } = props;
  return (
    <BaseButton {...props}>
      <Icon />
    </BaseButton>
  );
};

export default BaseButton;
