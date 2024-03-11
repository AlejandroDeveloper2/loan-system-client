import { User, UserCircle } from "iconoir-react";

import styles from "./Avatar.module.css";

const Avatar = (): JSX.Element => {
  return (
    <div className={styles.avatarContainer}>
      <figure className={styles.avatar}>
        <UserCircle />
      </figure>
      <ul className={styles.userInfoList}>
        <li>
          <span className="buttonText"> Bienvenido: </span>{" "}
          <p className="buttonText">Diego Alejandro</p>
        </li>
        <li>
          <User />
          <p id="role-text" className="buttonText">
            Administrador
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
