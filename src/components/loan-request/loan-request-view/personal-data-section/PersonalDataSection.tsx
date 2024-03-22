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
  Triangle,
} from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";

import { PersonalDataForm } from "@models/FormDataModels";
import { initialValues } from "@constants/form-initial-values/PersonalDataInitialValues";

import { InfoCard } from "@components/index";

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
          <InfoCard
            Icon={AtSign}
            label="Correo Eléctronico"
            value={fillForm().email}
          />
          <InfoCard
            Icon={User}
            label="Nombre completo"
            value={fillForm().fullName}
          />
          <InfoCard
            Icon={User}
            label="Tipo de identificación"
            value={fillForm().typeOfIdentification}
          />
          <InfoCard
            Icon={Hashtag}
            label="Número de identificación"
            value={fillForm().identification}
          />
          <InfoCard
            Icon={Phone}
            label="Número de teléfono"
            value={fillForm().phone}
          />
          <InfoCard
            Icon={PeopleTag}
            label="Estado civil"
            value={fillForm().civilStatus}
          />
          <InfoCard
            Icon={Suitcase}
            label="Profesión u ocupación"
            value={fillForm().profession}
          />
          <InfoCard
            Icon={MapPin}
            label="Dirección de residencia"
            value={fillForm().address}
          />
          <InfoCard
            Icon={Home}
            label="Digita el número de la casa"
            value={fillForm().houseNumber}
          />
          <InfoCard
            Icon={MapsArrow}
            label="Sector de residencia"
            value={fillForm().sector}
          />
          <InfoCard
            Icon={Triangle}
            label="Tipo de residencia"
            value={fillForm().typeOfResidence}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default PersonalDataSection;
