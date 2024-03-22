import { DollarCircle, Calendar, Cutlery, Triangle } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/LoanDataInitialValues";
import { LoanDataForm } from "@models/FormDataModels";

import { InfoCard } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const LoanDataSection = (): JSX.Element => {
  const { loanRequest } = useLoanRequestStore();

  const fillForm = (): LoanDataForm => {
    if (loanRequest) {
      return {
        amount: loanRequest.loan.amount,
        paymentCycle: loanRequest.loan.paymentCycle,
        deadline: loanRequest.loan.deadline,
        description: loanRequest.loan.description,
      };
    }
    return initialValues;
  };

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información del préstamo</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={DollarCircle}
            label="Monto solicitado"
            value={fillForm().amount}
          />
          <InfoCard
            Icon={Triangle}
            label="Modalidad de pago"
            value={fillForm().paymentCycle}
          />
          <InfoCard Icon={Calendar} label="Plazo" value={fillForm().deadline} />
          <InfoCard
            Icon={Cutlery}
            label="Destino del prestamo"
            value={fillForm().description}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default LoanDataSection;
