import { User, Phone } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { initialValues } from "@constants/form-initial-values/ReferencesInitialValues";
import { ReferencesDataForm } from "@models/FormDataModels";

import { InputText, RadioButtonList } from "@components/index";

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
          <InputText
            id="firstRelativeNames"
            name="firstRelativeNames"
            label="Nombres del primer familiar *"
            type="text"
            placeholder="Digita el nombre de tu primer familiar"
            value={fillForm().firstRelativeNames}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="firstRelativePhone"
            name="firstRelativePhone"
            label="Celular del familiar *"
            type="phone"
            placeholder="Digita el teléfono del familiar"
            value={fillForm().firstRelativePhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="secondRelativeNames"
            name="secondRelativeNames"
            label="Nombres del segundo familiar *"
            type="text"
            placeholder="Digita el nombre de tu segundo familiar"
            value={fillForm().secondRelativeNames}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="secondRelativePhone"
            name="secondRelativePhone"
            label="Celular del familiar *"
            type="phone"
            placeholder="Digita el teléfono del familiar"
            value={fillForm().secondRelativePhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="firstFriendNames"
            name="firstFriendNames"
            label="Primer nombre referencia (Amigo)*"
            type="text"
            placeholder="Digita el nombre de tu primer amigo"
            value={fillForm().firstFriendNames}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="firstFriendPhone"
            name="firstFriendPhone"
            label="Celular *"
            type="phone"
            placeholder="Digita el teléfono de la referencia"
            value={fillForm().firstFriendPhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="secondFriendNames"
            name="secondFriendNames"
            label="Segundo nombre referencia (Amigo)*"
            type="text"
            placeholder="Digita el nombre de tu segundo amigo"
            value={fillForm().secondFriendNames}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="secondFriendPhone"
            name="secondFriendPhone"
            label="Celular *"
            type="phone"
            placeholder="Digita el teléfono de la referencia"
            value={fillForm().secondFriendPhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
          <RadioButtonList
            id="interaction"
            label="¿Porque medio se enteró de nosotros? *"
            errorMessage={""}
            radioButtons={[
              {
                id: "option-1",
                name: "interaction",
                value: fillForm().interaction,
                label: "Referencia de un conocido",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "option-2",
                name: "interaction",
                value: fillForm().interaction,
                label: "Redes sociales",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "option-3",
                name: "interaction",
                value: fillForm().interaction,
                label: "Publicidad de sticker",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
          <InputText
            id="referredName"
            name="referredName"
            label="Nombre de la persona que lo recomendó *"
            type="text"
            placeholder="Digita el nombre de la persona"
            value={fillForm().referredName}
            errorMessage={""}
            Icon={User}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="referredPhone"
            name="referredPhone"
            label="Celular *"
            type="phone"
            placeholder="Digita el teléfono de la persona"
            value={fillForm().referredPhone}
            errorMessage={""}
            Icon={Phone}
            disabled
            onChange={() => {}}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ReferencesDataSection;
