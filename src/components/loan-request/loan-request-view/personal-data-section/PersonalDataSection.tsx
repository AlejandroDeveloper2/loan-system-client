import {
  AtSign,
  User,
  Hashtag,
  Phone,
  PeopleTag,
  Suitcase,
  MapPin,
  Home,
  MapsArrow,
} from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { PersonalDataForm } from "@models/FormDataModels";
import { initialValues } from "@constants/form-initial-values/PersonalDataInitialValues";

import { InputText, RadioButtonList, Select } from "@components/index";

import styles from "@components/shared/custom-form/CustomForm.module.css";

const PersonalDataSection = (): JSX.Element => {
  const { loanRequest } = useLoanRequestStore();

  const fillForm = (): PersonalDataForm => {
    if (loanRequest) {
      return {
        email: loanRequest.client.email,
        fullName: loanRequest.client.fullName,
        typeOfIdentification: loanRequest.client.typeOfIdentification,
        identification: loanRequest.client.identification,
        phone: loanRequest.client.phone,
        civilStatus: loanRequest.client.civilStatus,
        profession: loanRequest.client.profession,
        address: loanRequest.client.address,
        houseNumber: loanRequest.client.houseNumber,
        sector: loanRequest.client.sector,
        typeOfResidence: loanRequest.client.typeOfResidence,
      };
    }
    return initialValues;
  };

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información personal</h2>
        <fieldset className={styles.fieldset}>
          <InputText
            id="email"
            name="email"
            label="Correo Electronico *"
            type="text"
            placeholder="Digita tu correo electrónico"
            value={fillForm().email}
            errorMessage=""
            Icon={AtSign}
            disabled
            onChange={() => {}}
          />
          <InputText
            id="fullName"
            name="fullName"
            label="Nombre completo *"
            type="text"
            placeholder="Digita tu nombre completo"
            value={fillForm().fullName}
            errorMessage=""
            disabled
            Icon={User}
            onChange={() => {}}
          />
          <Select
            id="typeOfIdentification"
            name="typeOfIdentification"
            label="Tipo de identificación *"
            value={fillForm().typeOfIdentification}
            errorMessage=""
            disabled
            options={[
              { label: "Cédula", value: "Cedula" },
              { label: "Cédula extrangera", value: "CedulaExtranjera" },
            ]}
            Icon={User}
            onChange={() => {}}
          />
          <InputText
            id="identification"
            name="identification"
            label="Número de identificación *"
            type="text"
            placeholder="Digita tu identificación"
            value={fillForm().identification}
            errorMessage={""}
            disabled
            Icon={Hashtag}
            onChange={() => {}}
          />
          <InputText
            id="phone"
            name="phone"
            label="Número de teléfono"
            type="phone"
            placeholder="Digita tu número de telefono"
            value={fillForm().phone}
            errorMessage=""
            disabled
            Icon={Phone}
            onChange={() => {}}
          />
          <Select
            id="civilStatus"
            name="civilStatus"
            label="Estado civil *"
            value={fillForm().civilStatus}
            errorMessage=""
            disabled
            options={[
              { label: "Casado", value: "Casado" },
              { label: "Soltero", value: "Soltero" },
              { label: "Viudo", value: "Viudo" },
            ]}
            Icon={PeopleTag}
            onChange={() => {}}
          />
          <InputText
            id="profession"
            name="profession"
            label="Profesión u ocupación *"
            type="text"
            placeholder="Digita tu ocupación o profesión "
            value={fillForm().profession}
            errorMessage=""
            disabled
            Icon={Suitcase}
            onChange={() => {}}
          />
          <InputText
            id="address"
            name="address"
            label="Dirección de residencia *"
            type="text"
            placeholder="Digita la dirección de recidencia "
            value={fillForm().address}
            errorMessage=""
            disabled
            Icon={MapPin}
            onChange={() => {}}
          />
          <InputText
            id="houseNumber"
            name="houseNumber"
            label="Número de casa *"
            type="text"
            placeholder="Digita el número de la casa "
            value={fillForm().houseNumber}
            errorMessage={""}
            disabled
            Icon={Home}
            onChange={() => {}}
          />
          <InputText
            id="sector"
            name="sector"
            label="Sector de residencia *"
            type="text"
            placeholder="Digita el sector de tu residencia "
            value={fillForm().sector}
            errorMessage=""
            disabled
            Icon={MapsArrow}
            onChange={() => {}}
          />
          <RadioButtonList
            id="typeOfResidence"
            label="Tipo de residencia *"
            errorMessage=""
            radioButtons={[
              {
                id: "option-1",
                name: "typeOfResidence",
                value: fillForm().typeOfResidence,
                label: "Propia",
                disabled: true,
                onChange: () => {},
              },
              {
                id: "option-2",
                name: "typeOfResidence",
                value: fillForm().typeOfResidence,
                label: "Alquilada",
                disabled: true,
                onChange: () => {},
              },
            ]}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default PersonalDataSection;
