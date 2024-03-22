import {
  AppWindow,
  Bank,
  CreditCard,
  HandCard,
  PiggyBank,
} from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/BankAccountInitialValues";
import { BankAccountDataForm } from "@models/FormDataModels";

import { InfoCard } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const BankDataSection = (): JSX.Element => {
  const { loanRequest } = useLoanRequestStore();

  const fillForm = (): BankAccountDataForm => {
    if (loanRequest) {
      return {
        accountType: loanRequest.bankAccount.accountType,
        bank: loanRequest.bankAccount.bank,
        name: loanRequest.bankAccount.name,
        bankingApplication: loanRequest.bankAccount.bankingApplication,
        transfers: loanRequest.bankAccount.transfers,
        accountNumber: loanRequest.bankAccount.accountNumber,
      };
    }
    return initialValues;
  };

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información de cuenta bancaria</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={PiggyBank}
            label="Tipo de cuenta"
            value={fillForm().accountType}
          />
          <InfoCard Icon={Bank} label="Banco" value={fillForm().bank} />
          <InfoCard
            Icon={Bank}
            label="Nombre del banco (Si escogió otro)"
            value={fillForm().name}
          />
          <InfoCard
            Icon={AppWindow}
            label="¿Tiene descargada la app del banco?"
            value={fillForm().bankingApplication ? "Si" : "No"}
          />
          <InfoCard
            Icon={HandCard}
            label="¿Sabe como realizar tranferencias bancarias?"
            value={fillForm().transfers ? "Si" : "No"}
          />
          <InfoCard
            Icon={CreditCard}
            label="Número de cuenta"
            value={fillForm().accountNumber}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default BankDataSection;
