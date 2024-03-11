import { LogoProps } from "@models/ComponentModels";

import { LogoSvg } from "@assets/index";
import styles from "./Logo.module.css";

const Logo = ({ title }: LogoProps): JSX.Element => {
  return (
    <i className={styles.logoContainer}>
      <LogoSvg />
      {title ? <h1 className="heading1">{title}</h1> : null}
    </i>
  );
};

export default Logo;
