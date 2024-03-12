import { Bank, CreditCard, FloppyDisk } from "iconoir-react";

import { useForm, useFormStepper, useRadioButton } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { BankAccountDataForm } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/BankAccountInitialValues";

import { CustomForm } from "@components/index";

const BankAccountDataPage = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }

  const { saveStepFormData } = useFormStepper<BankAccountDataForm>(
    "/loanRequest/personalReferences",
    "bankAccount"
  );

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<BankAccountDataForm>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );

  const {
    radioButtonData: accountType,
    handleRadioChange: handleAccountTypeChange,
  } = useRadioButton<{
    accountType1: string;
    accountType2: string;
  }>(
    { accountType1: "Ahorro", accountType2: "Corriente" },
    "",
    "accountType",
    updateFormData
  );

  const { radioButtonData: bank, handleRadioChange: handleBankChange } =
    useRadioButton<{
      bank1: string;
      bank2: string;
      bank3: string;
      bank4: string;
    }>(
      {
        bank1: "Popular",
        bank2: "Banreservas",
        bank3: "BHD",
        bank4: "Otro",
      },
      "",
      "bank",
      updateFormData
    );
  const { radioButtonData: bankApp, handleRadioChange: handleBankAppChange } =
    useRadioButton<{
      bankAppYes: true;
      bankAppNot: false;
    }>(
      {
        bankAppYes: true,
        bankAppNot: false,
      },
      "",
      "bankingApplication",
      updateFormData
    );
  const {
    radioButtonData: transfers,
    handleRadioChange: handleTransfersChange,
  } = useRadioButton<{
    transfersYes: true;
    transfersNot: false;
  }>(
    {
      transfersYes: true,
      transfersNot: false,
    },
    "",
    "transfers",
    updateFormData
  );

  return (
    <CustomForm
      formTitle="Información cuenta bancaria"
      Icon={Bank}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="bank-info-input-set" setStyle="gridForm">
        <CustomForm.RadioButtonList
          id="accountType"
          label="Tipo de cuenta *"
          errorMessage={errors["accountType"].message}
          radioButtons={[
            {
              id: "accountType1",
              name: "accountType",
              value: accountType.accountType1,
              label: "Ahorros / Nómina",
              checked: false,
              onChange: handleAccountTypeChange,
            },
            {
              id: "accountType2",
              name: "accountType",
              value: accountType.accountType2,
              label: "Corriente",
              checked: false,
              onChange: handleAccountTypeChange,
            },
          ]}
        />
        <CustomForm.RadioButtonList
          id="bank"
          label="Banco *"
          errorMessage={errors["bank"].message}
          radioButtons={[
            {
              id: "bank1",
              name: "bank",
              value: bank.bank1,
              label: "Popular",
              checked: false,
              onChange: handleBankChange,
            },
            {
              id: "bank2",
              name: "bank",
              value: bank.bank2,
              label: "Banreservas",
              checked: false,
              onChange: handleBankChange,
            },
            {
              id: "bank3",
              name: "bank",
              value: bank.bank3,
              label: "BHD",
              checked: false,
              onChange: handleBankChange,
            },
            {
              id: "bank4",
              name: "bank",
              value: bank.bank4,
              label: "Otro",
              checked: false,
              onChange: handleBankChange,
            },
          ]}
        />
        <CustomForm.Input
          id="name"
          name="name"
          label="Nombre del banco (Si escogió otro)"
          type="text"
          placeholder="Digita el nombre del banco"
          value={formData.name}
          errorMessage={errors.name.message}
          Icon={Bank}
          onChange={handleChange}
        />
        <CustomForm.RadioButtonList
          id="bankingApplication"
          label="¿Tiene descargada la app del banco? *"
          errorMessage={errors["bankingApplication"].message}
          radioButtons={[
            {
              id: "bankAppYes",
              name: "bankingApplication",
              value: String(bankApp.bankAppYes),
              label: "Si",
              checked: false,
              onChange: handleBankAppChange,
            },
            {
              id: "bankAppNot",
              name: "bankingApplication",
              value: String(bankApp.bankAppNot),
              label: "No",
              checked: false,
              onChange: handleBankAppChange,
            },
          ]}
        />
        <CustomForm.RadioButtonList
          id="transfers"
          label="¿Sabe como realizar tranferencias bancarias? *"
          errorMessage={errors["transfers"].message}
          radioButtons={[
            {
              id: "transfersYes",
              name: "transfers",
              value: String(transfers.transfersYes),
              label: "Si",
              checked: false,
              onChange: handleTransfersChange,
            },
            {
              id: "transfersNot",
              name: "transfers",
              value: String(transfers.transfersNot),
              label: "No",
              checked: false,
              onChange: handleTransfersChange,
            },
          ]}
        />
        <CustomForm.TextArea
          id="accountNumber"
          name="accountNumber"
          label="Número de cuenta *"
          placeholder="Describe los datos de tu cuenta"
          value={formData.accountNumber}
          errorMessage={errors["accountNumber"].message}
          userHint="(Esta cuenta podrá ser usada para depositar el monto de su préstamo solicitado.)"
          Icon={CreditCard}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y continuar"
        Icon={FloppyDisk}
        label="Guardar y continuar"
        variant="primary"
        loading={false}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default BankAccountDataPage;
