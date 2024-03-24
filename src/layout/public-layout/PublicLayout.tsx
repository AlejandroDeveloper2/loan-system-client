import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { loadIllustration } from "@utils/helpers";
import { useSession } from "@hooks/index";

import { steps } from "@constants/stepper-steps-data/StepsData";

import { Logo, Stepper } from "@components/index";

import styles from "./PublicLayout.module.css";
import { Figure1, Figure2 } from "@assets/index";

const PublicLayout = (): JSX.Element => {
  const location = useLocation();
  useSession(0);

  const illustrationData = loadIllustration(location.pathname);

  const pathnameArr = location.pathname
    .split("/")
    .filter((element) => element !== "");
  const isStepperLoaded: boolean =
    location.pathname.includes("loanRequest") && pathnameArr.length > 1;

  return (
    <main
      className={
        location.pathname === "/loanRequest"
          ? styles.mainContainerCentered
          : styles.mainContainer
      }
    >
      <Figure1 />
      <Figure2 />
      <section className={styles.contentSection}>
        <Logo
          title={
            location.pathname.includes("/loanRequest")
              ? "Solicitud de préstamo en Cash Money RD"
              : "Cash Money RD"
          }
        />
        {isStepperLoaded ? (
          <>
            <Stepper steps={steps} />
            <p className="paragraph" id="message-client-registered">
              Solicitud de préstamo para cliente nuevo. Siga los pasos y llene
              toda la información requerida
            </p>
          </>
        ) : null}
        <Outlet />
      </section>
      {illustrationData ? (
        <img
          className={styles.illustration}
          src={illustrationData.src}
          alt={illustrationData.alt}
          loading="lazy"
        />
      ) : null}
      {/* <footer className={styles.footer}>
        <p className="paragraph">
          Copyright © - Todos Los Derechos Reservados loansystem.com
        </p>
      </footer> */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default PublicLayout;
