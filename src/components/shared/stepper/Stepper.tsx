import { Link, useLocation } from "react-router-dom";

import { StepperProps } from "@models/ComponentModels";

import styles from "./Stepper.module.css";

const Stepper = ({ steps }: StepperProps): JSX.Element => {
  const location = useLocation();

  return (
    <ul className={styles.stepper}>
      {steps.map((step, i) => (
        <li
          key={i}
          className={
            location.pathname === step.to ? styles.activeStep : styles.step
          }
        >
          <Link to={step.to} className={"buttonText"}>
            {i + 1 + ". " + step.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
