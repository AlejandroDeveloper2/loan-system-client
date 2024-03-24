import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSession } from "@hooks/index";

import { Header, Navigation } from "@components/index";

import styles from "./PrivateLayout.module.css";

const PrivateLayout = (): JSX.Element => {
  useSession(1000);
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.pageContent}>
        <Outlet />
      </section>
      <Navigation />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default PrivateLayout;
