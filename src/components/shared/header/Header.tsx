import { LogOut, Settings } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "@zustand/AuthStore";

import { Logo, IconOnlyButton, Avatar } from "@components/index";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.part}>
        <Logo />
        <Avatar />
      </div>
      <ul className={styles.controls}>
        <li>
          <IconOnlyButton
            Icon={Settings}
            id="btn_settings"
            type="button"
            title="Configuraciones"
            variant="outline"
            loading={false}
            onClick={() => navigate("/userPanel/userProfile")}
          />
        </li>
        <li>
          <IconOnlyButton
            Icon={LogOut}
            id="btn_logout"
            type="button"
            title="Cerrar sesión"
            variant="outline"
            loading={false}
            onClick={logout}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
