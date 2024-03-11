import { ErrorMessageProps } from "@models/ComponentModels";

import styles from "./ErrorMassage.module.css";

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return <p className={styles.errorMessage + " " + "paragraph"}>{message}</p>;
};

export default ErrorMessage;
