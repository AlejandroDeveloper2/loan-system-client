import { User, Phone, HelpSquare } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/ReferencesInitialValues";
import { ReferencesDataForm } from "@models/FormDataModels";

import { InfoCard } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const ReferencesDataSection = (): JSX.Element => {
  const { loanRequest } = useLoanRequestStore();

  const fillForm = (): ReferencesDataForm => {
    if (loanRequest) {
      return {
        firstRelativeNames: loanRequest.personalReference.reference[0]?.name,
        firstRelativePhone: loanRequest.personalReference.reference[0]?.phone,
        secondRelativeNames: loanRequest.personalReference.reference[1]?.name,
        secondRelativePhone: loanRequest.personalReference.reference[1]?.phone,
        firstFriendNames: loanRequest.personalReference.reference[2]?.name,
        firstFriendPhone: loanRequest.personalReference.reference[2]?.phone,
        secondFriendNames: loanRequest.personalReference.reference[3]?.name,
        secondFriendPhone: loanRequest.personalReference.reference[3]?.phone,
        interaction: loanRequest.personalReference.interaction,
        referredName: loanRequest.personalReference.referred.name,
        referredPhone: loanRequest.personalReference.referred.phone,
      };
    }
    return initialValues;
  };

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Referencias personales</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={User}
            label="Nombres del primer familiar"
            value={fillForm().firstRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={fillForm().firstRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Nombres del segundo familiar"
            value={fillForm().secondRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={fillForm().secondRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Primer nombre referencia (Amigo)"
            value={fillForm().firstFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={fillForm().firstFriendPhone}
          />
          <InfoCard
            Icon={User}
            label="Segundo nombre referencia (Amigo)"
            value={fillForm().secondFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={fillForm().secondFriendPhone}
          />
          <InfoCard
            Icon={HelpSquare}
            label="¿Porque medio se enteró de nosotros?"
            value={fillForm().interaction}
          />
          <InfoCard
            Icon={User}
            label="Nombre de la persona que lo recomendó"
            value={fillForm().referredName}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={fillForm().referredPhone}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ReferencesDataSection;
