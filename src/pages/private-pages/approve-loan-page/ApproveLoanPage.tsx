/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  Calendar,
  Cash,
  Check,
  HandCash,
  Hashtag,
  Percentage,
  RefreshDouble,
  Settings,
} from "iconoir-react";
import { useNavigate, useParams } from "react-router-dom";

import { ApproveLoanDataForm } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/ApproveLoanInitialValues";

import { validationSchema } from "./ValidationSchema";
import { useForm, useLoading } from "@hooks/index";
import useLoansStore from "@zustand/LoansStore";

import {
  CustomForm,
  IconButton,
  InfoSection,
  Loader,
  LoanPaymentSchedule,
  Spinner,
} from "@components/index";

const ApproveLoanPage = (): JSX.Element => {
  const params = useParams();
  const loanParam = params as { loanId: string };
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const {
    loading: loadingLoan,
    loadingMessage: loadingMessageLoan,
    toggleLoading: toggleLoadingLoan,
  } = useLoading();
  const {
    loading: loadingApproveLoan,
    toggleLoading: toggleLoadingApproveLoan,
  } = useLoading();

  const { loan, generatePaymentSchedule, getLoan, approveLoan } =
    useLoansStore();

  const action = () => {
    generatePaymentSchedule(formData, toggleLoading);
  };

  const {
    formData,
    errors,
    formRef,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<ApproveLoanDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  useEffect(() => {
    getLoan(loanParam.loanId, toggleLoadingLoan);
  }, [loanParam]);

  useEffect(() => {
    if (loan) {
      updateFormInitialValues(loan);
    }
  }, [loan]);

  return (
    <>
      <h1 className="heading1">
        <HandCash />
        Aprobar préstamo
      </h1>
      <InfoSection
        sectionTitle="Detalles del préstamo"
        labelId="Id de préstamo"
        link="/userPanel/loans"
        recordId={loanParam.loanId}
      />
      {loadingLoan ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessageLoan} />
      ) : (
        <div className="formContainer">
          <CustomForm
            formTitle="Datos Básicos del Préstamo"
            Icon={HandCash}
            formRef={formRef}
            handleSubmit={handleSubmit}
          >
            <CustomForm.FieldSet id="approve-input-set" setStyle="gridForm">
              <CustomForm.Input
                id="amount"
                name="amount"
                label="Monto solicitado *"
                type="number"
                placeholder="Digita el monto solicitado"
                value={formData.amount}
                errorMessage={errors["amount"].message}
                Icon={Cash}
                disabled={loan.loanState !== "Pendiente"}
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
                disabled={loan.loanState !== "Pendiente"}
                onChange={handleChange}
              />
              <CustomForm.Input
                id="interest"
                name="interest"
                label="Tasa de interes *"
                type="number"
                placeholder="Digita la tasa de interés"
                value={formData.interest}
                errorMessage={errors["interest"].message}
                Icon={Percentage}
                disabled={loan.loanState !== "Pendiente"}
                onChange={handleChange}
              />
              <CustomForm.Input
                id="deadline"
                name="deadline"
                label="Número de pagos *"
                type="number"
                placeholder="Digita la cantidad de pagos"
                value={formData.deadline}
                errorMessage={errors["deadline"].message}
                Icon={Hashtag}
                disabled={loan.loanState !== "Pendiente"}
                onChange={handleChange}
              />
              <CustomForm.Input
                id="firstPaymentDate"
                name="firstPaymentDate"
                label="Fecha primer pago *"
                type="date"
                placeholder="Seleccione fecha de primer pago"
                value={formData.firstPaymentDate}
                errorMessage={errors["firstPaymentDate"].message}
                Icon={Calendar}
                disabled={loan.loanState !== "Pendiente"}
                onChange={handleChange}
              />
            </CustomForm.FieldSet>
            {loan.loanState !== "Pendiente" ? null : (
              <CustomForm.IconButton
                id="button-generate-schedule"
                type="submit"
                title="Generar calendario de pagos"
                Icon={Settings}
                label="Generar calendario de pago"
                variant="primary"
                loading={loading}
                onClick={() => {}}
              />
            )}

            {loading ? (
              <Loader message={loadingMessage} />
            ) : loan.paymentSchedules.length > 0 ? (
              <>
                <h2 className="heading2">Calendario de pagos</h2>
                <LoanPaymentSchedule />
                {loan.loanState !== "Pendiente" ? null : (
                  <IconButton
                    Icon={Check}
                    label="Aprobar préstamo"
                    id="btn-approve-loan"
                    type="button"
                    title="Aprobar préstamo"
                    variant="primary"
                    loading={loadingApproveLoan}
                    onClick={() => {
                      approveLoan(
                        loanParam.loanId,
                        formData,
                        toggleLoadingApproveLoan
                      );
                      navigate("/userPanel/loans");
                    }}
                  />
                )}
              </>
            ) : null}
          </CustomForm>
        </div>
      )}
    </>
  );
};

export default ApproveLoanPage;
