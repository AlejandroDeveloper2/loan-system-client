import { useEffect } from "react";
import {
  Cash,
  FloppyDisk,
  HandCash,
  Hashtag,
  RefreshDouble,
  User,
} from "iconoir-react";

import { useForm } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";
import useLoansStore from "@zustand/LoansStore";
import { validationSchema } from "./ValidationSchema";

import { CreateLoanDataForm } from "@models/FormDataModels";
import { LoanFormProps } from "@models/ComponentModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/LoanInitialValues";

import { CustomForm } from "@components/index";

const LoanForm = ({ toggleModal }: LoanFormProps): JSX.Element => {
  function action() {
    createLoan(formData);
    toggleModal();
  }

  const { clients, getAllClients } = useClientsStore();
  const { createLoan } = useLoansStore();

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<CreateLoanDataForm>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  useEffect(() => {
    getAllClients("10", "", "", { initialDate: "", finalDate: "" }, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomForm
      formTitle="Datos básicos del préstamo"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="loan-input-set" setStyle="gridForm">
        <CustomForm.Select
          id="client"
          name="client"
          label="Seleccionar cliente *"
          value={formData.client}
          errorMessage={errors["client"].message}
          options={clients.map((client) => ({
            label: client.fullName,
            value: client.id,
          }))}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="amount"
          name="amount"
          label="Monto solicitado *"
          type="number"
          placeholder="Digita el monto del préstamo"
          value={formData.amount}
          errorMessage={errors["amount"].message}
          Icon={Cash}
          onChange={handleChange}
        />
        <CustomForm.Select
          id="paymentCycle"
          name="paymentCycle"
          label="Ciclo de pago *"
          value={formData.paymentCycle}
          errorMessage={errors["paymentCycle"].message}
          options={[
            { label: "Mensual", value: "Mensual" },
            { label: "Quincenal", value: "Quincenal" },
            { label: "Semanal", value: "Semanal" },
          ]}
          Icon={RefreshDouble}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="deadline"
          name="deadline"
          label="Número de cuotas *"
          type="number"
          placeholder="Digita la cantidad de cuotas"
          value={formData.deadline}
          errorMessage={errors["deadline"].message}
          Icon={Hashtag}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-save-loan"
        type="submit"
        title="Crear préstamo"
        Icon={FloppyDisk}
        label="Crear préstamo"
        variant="primary"
        loading={false}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default LoanForm;
