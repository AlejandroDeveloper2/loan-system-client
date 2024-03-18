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
  getInitialValues,
} from "@constants/form-initial-values/ApproveLoanInitialValues";

import { validationSchema } from "./ValidationSchema";
import { useForm } from "@hooks/index";
import useLoansStore from "@zustand/LoansStore";

import {
  CustomForm,
  IconButton,
  InfoSection,
  Loader,
  LoanPaymentSchedule,
} from "@components/index";

const ApproveLoanPage = (): JSX.Element => {
  const params = useParams();
  const loanParam = params as { loanId: string };
  const navigate = useNavigate();

  const { loading, loan, generatePaymentSchedule, getLoan, approveLoan } =
    useLoansStore();

  const action = () => {
    generatePaymentSchedule(formData);
  };

  const {
    formData,
    errors,
    formRef,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<ApproveLoanDataForm>(
    getInitialValues(loan),
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  useEffect(() => {
    getLoan(loanParam.loanId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanParam]);

  useEffect(() => {
    if (loan) updateFormInitialValues(getInitialValues(loan));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              id="interest"
              name="interest"
              label="Tasa de interes *"
              type="number"
              placeholder="Digita la tasa de interés"
              value={formData.interest}
              errorMessage={errors["interest"].message}
              Icon={Percentage}
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
              onChange={handleChange}
            />
          </CustomForm.FieldSet>
          {loan.loanState === "Aprobado" ? null : (
            <CustomForm.IconButton
              id="button-generate-schedule"
              type="submit"
              title="Generar calendario de pagos"
              Icon={Settings}
              label="Generar calendario de pago"
              variant="primary"
              loading={false}
              onClick={() => {}}
            />
          )}

          {loading ? (
            <Loader message="ganerando calendario de pagos..." />
          ) : loan.paymentSchedules.length > 0 ? (
            <>
              <h2 className="heading2">Calendario de pagos</h2>
              <LoanPaymentSchedule />
              {loan.loanState === "Aprobado" ? null : (
                <IconButton
                  Icon={Check}
                  label="Aprobar préstamo"
                  id="btn-approve-loan"
                  type="button"
                  title="Aprobar préstamo"
                  variant="primary"
                  loading={loading}
                  onClick={() => {
                    approveLoan(loanParam.loanId, formData);
                    navigate("/userPanel/loans");
                  }}
                />
              )}
            </>
          ) : null}
        </CustomForm>
      </div>
    </>
  );
};

export default ApproveLoanPage;
