import { Bank, CreditCard } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/BankAccountInitialValues";
import { BankAccountDataForm } from "@models/FormDataModels";

import { InputText, RadioButtonList, TextArea } from "@components/index";

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
          <RadioButtonList
            id="accountType"
            label="Tipo de cuenta *"
            errorMessage=""
            radioButtons={[
              {
                id: "accountType1",
                name: "accountType",
                value: fillForm().accountType,
                label: "Ahorros / Nómina",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "accountType2",
                name: "accountType",
                value: fillForm().accountType,
                label: "Corriente",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
          <RadioButtonList
            id="bank"
            label="Banco *"
            errorMessage={""}
            radioButtons={[
              {
                id: "bank1",
                name: "bank",
                value: fillForm().bank,
                label: "Popular",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "bank2",
                name: "bank",
                value: fillForm().bank,
                label: "Banreservas",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "bank3",
                name: "bank",
                value: fillForm().bank,
                label: "BHD",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "bank4",
                name: "bank",
                value: fillForm().bank,
                label: "Otro",
                onChange: () => {},
              },
            ]}
          />
          <InputText
            id="name"
            name="name"
            label="Nombre del banco (Si escogió otro)"
            type="text"
            placeholder="Digita el nombre del banco"
            value={fillForm().name}
            errorMessage={""}
            Icon={Bank}
            disabled
            onChange={() => {}}
          />
          <RadioButtonList
            id="bankingApplication"
            label="¿Tiene descargada la app del banco? *"
            errorMessage={""}
            radioButtons={[
              {
                id: "bankAppYes",
                name: "bankingApplication",
                value: String(fillForm().bankingApplication),
                label: "Si",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "bankAppNot",
                name: "bankingApplication",
                value: String(fillForm().bankingApplication),
                label: "No",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
          <RadioButtonList
            id="transfers"
            label="¿Sabe como realizar tranferencias bancarias? *"
            errorMessage={""}
            radioButtons={[
              {
                id: "transfersYes",
                name: "transfers",
                value: String(fillForm().transfers),
                label: "Si",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "transfersNot",
                name: "transfers",
                value: String(fillForm().transfers),
                label: "No",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
          <TextArea
            id="accountNumber"
            name="accountNumber"
            label="Número de cuenta *"
            placeholder="Describe los datos de tu cuenta"
            value={fillForm().accountNumber}
            errorMessage={""}
            userHint="(Esta cuenta podrá ser usada para depositar el monto de su préstamo solicitado.)"
            Icon={CreditCard}
            disabled
            onChange={() => {}}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default BankDataSection;
