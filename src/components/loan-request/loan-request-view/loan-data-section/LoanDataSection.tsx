import { DollarCircle, Calendar, Cutlery } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/LoanDataInitialValues";
import { LoanDataForm } from "@models/FormDataModels";

import { InputIndicator, InputText, RadioButtonList } from "@components/index";

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
          <InputText
            id="amount"
            name="amount"
            label="Monto solicitado *"
            type="number"
            placeholder="Digita el valor del monto que solicitas"
            value={fillForm().amount}
            errorMessage=""
            Icon={DollarCircle}
            disabled
            onChange={() => {}}
          />
          <RadioButtonList
            id="paymentCycle"
            label="Modalidad de pago *"
            errorMessage={""}
            radioButtons={[
              {
                id: "option-1",
                name: "paymentCycle",
                value: fillForm().paymentCycle,
                label: "Mensual",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "option-2",
                name: "paymentCycle",
                value: fillForm().paymentCycle,
                label: "Quincenal",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "option-3",
                name: "paymentCycle",
                value: fillForm().paymentCycle,
                label: "Semanal",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
          <InputIndicator
            id="deadline"
            name="deadline"
            label="Plazo *"
            userHint="(Indique el tiempo a pagar según Modalidad)"
            type="number"
            placeholder="Digita el tiempo"
            value={fillForm().deadline}
            indicatorLabel={
              fillForm().paymentCycle === "Mensual"
                ? "meses"
                : fillForm().paymentCycle === "Quincenal"
                ? "quincenas"
                : "semanas"
            }
            errorMessage={""}
            Icon={Calendar}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="description"
            name="description"
            label="Destino del prestamo *"
            type="text"
            placeholder="Digita el valor del monto que solicitas"
            value={fillForm().description}
            errorMessage={""}
            Icon={Cutlery}
            disabled
            onChange={() => {}}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default LoanDataSection;
