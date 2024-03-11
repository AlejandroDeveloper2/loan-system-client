import { Link } from "react-router-dom";

import { CustomLinkProps } from "@models/ComponentModels";

import styles from "./CustomLink.module.css";

const CustomLink = (props: CustomLinkProps): JSX.Element => {
  const { label, linkText, to } = props;

  return (
    <p className={"captionText" + "" + styles.customLinkStyle}>
      {label}
      <Link to={to} className={styles.link}>
        {linkText}
      </Link>
    </p>
  );
};

export default CustomLink;
