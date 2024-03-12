import {
  AlignLeft,
  Building,
  Cash,
  Clock,
  MapPin,
  Phone,
  Suitcase,
  User,
} from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/WorkDataInitialValues";
import { WorkDataForm } from "@models/FormDataModels";

import { InputText, RadioButtonList, TextArea } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const WorkDataSection = (): JSX.Element => {
  const { loanRequest } = useLoanRequestStore();

  const fillForm = (): WorkDataForm => {
    if (loanRequest) {
      return {
        companyName: loanRequest.workingInformation.companyName,
        phone: loanRequest.workingInformation.phone,
        address: loanRequest.workingInformation.address,
        timeWorking: loanRequest.workingInformation.timeWorking,
        position: loanRequest.workingInformation.position,
        bossName: loanRequest.workingInformation.bossName,
        bossPhone: loanRequest.workingInformation.bossPhone,
        salary: loanRequest.workingInformation.salary,
        paymentOfPayroll: loanRequest.workingInformation.paymentOfPayroll,
        otherIncome: loanRequest.workingInformation.otherIncome,
        description: loanRequest.workingInformation.description,
      };
    }
    return initialValues;
  };

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información laboral</h2>
        <fieldset className={styles.fieldset}>
          <InputText
            id="companyName"
            name="companyName"
            label="Empresa donde labora *"
            type="text"
            placeholder="Digita el nombre de la empresa"
            value={fillForm().companyName}
            errorMessage={""}
            Icon={Building}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="phone"
            name="phone"
            label="Teléfono de la empresa *"
            type="phone"
            placeholder="Digita el número de telefono de la empresa"
            value={fillForm().phone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="address"
            name="address"
            label="Dirección de la empresa *"
            type="text"
            placeholder="Digita la dirección de la empresa"
            value={fillForm().address}
            errorMessage={""}
            Icon={MapPin}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="timeWorking"
            name="timeWorking"
            label="Tiempo trabajando en la empresa (En meses) *"
            type="number"
            placeholder="Digita el tiempo trabajando en la empresa"
            value={fillForm().timeWorking}
            errorMessage={""}
            Icon={Clock}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="position"
            name="position"
            label="Posición que ocupa"
            type="text"
            placeholder="Digita tu cargo en la empresa"
            value={fillForm().position}
            errorMessage={""}
            Icon={Suitcase}
            disabled
            onChange={() => {}}
          />

          <InputText
            id="bossName"
            name="bossName"
            label="Nombre de su jefe inmediato *"
            type="text"
            placeholder="Digita el nombre de su jefe "
            value={fillForm().bossName}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="bossPhone"
            name="bossPhone"
            label="Teléfono jefe inmediato *"
            type="phone"
            placeholder="Digita el número de teléfono de su jefe"
            value={fillForm().bossPhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="salary"
            name="salary"
            label="Salarío mensual *"
            type="number"
            placeholder="Digita tu salarío mensual "
            value={fillForm().salary}
            errorMessage={""}
            Icon={Cash}
            disabled
            onChange={() => {}}
          />
          <RadioButtonList
            id="paymentOfPayroll"
            label="El Pago De Su Nomina Es: *"
            errorMessage={""}
            radioButtons={[
              {
                id: "option-1",
                name: "paymentOfPayroll",
                value: "Mensual",
                label: "Mensual",
                disabled: true,
                checked: fillForm().paymentOfPayroll === "Mensual",
                onChange: () => {},
              },
              {
                id: "option-2",
                name: "paymentOfPayroll",
                value: "Quincenal",
                label: "Quincenal",
                disabled: true,
                checked: fillForm().paymentOfPayroll === "Quincenal",
                onChange: () => {},
              },
              {
                id: "option-3",
                name: "paymentOfPayroll",
                value: "Semanal",
                label: "Semanal",
                disabled: true,
                checked: fillForm().paymentOfPayroll === "Semanal",
                onChange: () => {},
              },
            ]}
          />
          <InputText
            id="otherIncome"
            name="otherIncome"
            label="Valor otros ingresos *"
            type="number"
            placeholder="Digita el valor de otros ingresos"
            value={fillForm().otherIncome}
            errorMessage={""}
            Icon={Cash}
            disabled
            onChange={() => {}}
          />
          <TextArea
            id="description"
            name="description"
            label="Fuente otros ingresos *"
            placeholder="Describe la fuente de otros ingresos"
            value={fillForm().description}
            errorMessage={""}
            Icon={AlignLeft}
            disabled
            onChange={() => {}}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default WorkDataSection;
