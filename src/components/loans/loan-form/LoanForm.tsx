/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  Cash,
  FloppyDisk,
  HandCash,
  Hashtag,
  RefreshDouble,
  User,
} from "iconoir-react";

import { useForm, useLoading } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";
import useLoansStore from "@zustand/LoansStore";
import { validationSchema } from "./ValidationSchema";

import { CreateLoanDataForm } from "@models/FormDataModels";
import { LoanFormProps } from "@models/ComponentModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/LoanInitialValues";

import { CustomForm, Spinner } from "@components/index";

const LoanForm = ({ toggleModal }: LoanFormProps): JSX.Element => {
  function action() {
    createLoan(formData, toggleLoadingSaveLoan).then(() => {
      toggleModal();
    });
  }

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { loading: loadingSaveLoan, toggleLoading: toggleLoadingSaveLoan } =
    useLoading();

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
    getAllClients(
      "10",
      "",
      "",
      { initialDate: "", finalDate: "" },
      "",
      toggleLoading
    );
  }, []);

  return (
    <CustomForm
      formTitle="Datos básicos del préstamo"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      {loading ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <>
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
              label="Tiempo del préstamo en meses *"
              type="number"
              placeholder="Digita el tiempo en meses"
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
            loading={loadingSaveLoan}
            onClick={() => {}}
          />
        </>
      )}
    </CustomForm>
  );
};

export default LoanForm;
