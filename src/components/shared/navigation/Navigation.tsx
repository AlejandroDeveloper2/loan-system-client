import { Link, useLocation } from "react-router-dom";

import { setActiveNavItem } from "@utils/helpers";

import { navItems } from "@constants/nav-items-data/NavItemsData";

import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navItems.map((navItem, i) => (
          <li key={i}>
            <Link
              to={navItem.to}
              className={
                styles[setActiveNavItem(location.pathname, navItem.to)]
              }
            >
              <navItem.Icon />
            </Link>
            <strong className={styles.itemFloatingTag}>
              <span className="captionText">{navItem.title}</span>
            </strong>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
