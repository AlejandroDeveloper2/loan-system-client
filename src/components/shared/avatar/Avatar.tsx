import { User, UserCircle } from "iconoir-react";
import { useEffect } from "react";

import useAuthStore from "@zustand/AuthStore";
import useUserStore from "@zustand/UsersStore";

import styles from "./Avatar.module.css";

const Avatar = (): JSX.Element => {
  const { auth } = useAuthStore();
  const { user, getUser } = useUserStore();

  useEffect(() => {
    if (auth) getUser(auth.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <div className={styles.avatarContainer}>
      <figure className={styles.avatar}>
        <UserCircle />
      </figure>
      <ul className={styles.userInfoList}>
        <li>
          <span className="buttonText"> Bienvenido: </span>{" "}
          <p className="buttonText">{user ? user.fistName : ""}</p>
        </li>
        <li>
          <User />
          <p id="role-text" className="buttonText">
            {user ? user.roles : ""}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
