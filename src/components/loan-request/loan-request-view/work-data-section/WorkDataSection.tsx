import {
  AlignLeft,
  Building,
  Cash,
  Clock,
  Coins,
  MapPin,
  Phone,
  Suitcase,
  User,
} from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import { formatMoney } from "@utils/helpers";

import { initialValues } from "@constants/form-initial-values/WorkDataInitialValues";
import { WorkDataForm } from "@models/FormDataModels";

import { InfoCard } from "@components/index";

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
          <InfoCard
            Icon={Building}
            label="Empresa donde labora"
            value={fillForm().companyName}
          />
          <InfoCard
            Icon={Phone}
            label="Teléfono de la empresa"
            value={fillForm().phone}
          />
          <InfoCard
            Icon={MapPin}
            label="Dirección de la empresa"
            value={fillForm().address}
          />
          <InfoCard
            Icon={Clock}
            label="Tiempo trabajando en la empresa (En meses)"
            value={fillForm().timeWorking}
          />
          <InfoCard
            Icon={Suitcase}
            label="Posición que ocupa"
            value={fillForm().position}
          />
          <InfoCard
            Icon={User}
            label="Nombre de su jefe inmediato"
            value={fillForm().bossName}
          />
          <InfoCard
            Icon={Phone}
            label="Teléfono jefe inmediato"
            value={fillForm().bossPhone}
          />
          <InfoCard
            Icon={Cash}
            label="Salarío mensual"
            value={formatMoney(fillForm().salary)}
          />
          <InfoCard
            Icon={Coins}
            label="El Pago De Su Nomina Es:"
            value={fillForm().paymentOfPayroll}
          />
          <InfoCard
            Icon={Cash}
            label="Valor otros ingresos"
            value={formatMoney(fillForm().otherIncome)}
          />
          <InfoCard
            Icon={AlignLeft}
            label="Fuente otros ingresos"
            value={fillForm().description}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default WorkDataSection;
