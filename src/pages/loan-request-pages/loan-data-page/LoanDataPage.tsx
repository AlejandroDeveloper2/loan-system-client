import {
  Calendar,
  Cutlery,
  DollarCircle,
  FloppyDisk,
  HandCash,
} from "iconoir-react";

import { useForm, useFormStepper, useRadioButton } from "@hooks/index";

import { LoanDataForm, PaymentType } from "@models/FormDataModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/LoanDataInitialValues";
import { validationSchema } from "./ValidationSchema";

import { CustomForm } from "@components/index";

const LoanDataPage = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }

  const { saveStepFormData } = useFormStepper<LoanDataForm>(
    "/loanRequest/bankAccountData",
    "loan"
  );

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<LoanDataForm>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );

  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: PaymentType;
    option2: PaymentType;
    option3: PaymentType;
  }>(
    { option1: "Mensual", option2: "Quincenal", option3: "Semanal" },
    "",
    "paymentCycle",
    updateFormData
  );

  return (
    <CustomForm
      formTitle="Datos del préstamo"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="loan-info-input-set" setStyle="gridForm">
        <CustomForm.Input
          id="amount"
          name="amount"
          label="Monto solicitado *"
          type="number"
          placeholder="Digita el valor del monto que solicitas"
          value={formData.amount}
          errorMessage={errors["amount"].message}
          Icon={DollarCircle}
          onChange={handleChange}
        />
        <CustomForm.RadioButtonList
          id="paymentCycle"
          label="Modalidad de pago *"
          errorMessage={errors["paymentCycle"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "paymentCycle",
              value: radioButtonData.option1,
              label: "Mensual",
              checked: false,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "paymentCycle",
              value: radioButtonData.option2,
              label: "Quincenal",
              checked: false,
              onChange: handleRadioChange,
            },
            {
              id: "option-3",
              name: "paymentCycle",
              value: radioButtonData.option3,
              label: "Semanal",
              checked: false,
              onChange: handleRadioChange,
            },
          ]}
        />
        <CustomForm.InputIndicator
          id="deadline"
          name="deadline"
          label="Plazo *"
          userHint="(Indique el tiempo a pagar en meses)"
          type="number"
          placeholder="Digita el tiempo"
          value={formData.deadline}
          indicatorLabel={"meses"}
          errorMessage={errors["deadline"].message}
          Icon={Calendar}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="description"
          name="description"
          label="Destino del prestamo *"
          type="text"
          placeholder="Digita el valor del monto que solicitas"
          value={formData.description}
          errorMessage={errors["description"].message}
          Icon={Cutlery}
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

export default LoanDataPage;
