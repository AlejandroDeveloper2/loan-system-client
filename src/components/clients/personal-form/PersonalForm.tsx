import { useParams } from "react-router-dom";
import {
  User,
  AtSign,
  Hashtag,
  Phone,
  PeopleTag,
  Suitcase,
  MapPin,
  Home,
  MapsArrow,
  Edit,
} from "iconoir-react";

import { useForm, useRadioButton } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";
import { validationSchema } from "./ValidationSchema";

import { PersonalDataForm } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/PersonalDataInitialValues";

import { CustomForm } from "@components/index";

const PersonalForm = (): JSX.Element => {
  const params = useParams();
  const clientParam = params as { clientId: string };

  function action() {
    updateClient<PersonalDataForm>(clientParam.clientId, formData);
  }

  function fillForm(): PersonalDataForm {
    if (client)
      return {
        email: client.email,
        fullName: client.fullName,
        typeOfIdentification: client.typeOfIdentification,
        identification: client.identification,
        phone: client.phone,
        civilStatus: client.civilStatus,
        profession: client.profession,
        address: client.address,
        houseNumber: client.houseNumber,
        sector: client.sector,
        typeOfResidence: client.typeOfResidence,
      };
    return initialValues;
  }

  const { loading, client, updateClient } = useClientsStore();
  const {
    formData,
    formRef,
    errors,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<PersonalDataForm>(
    fillForm(),
    initialErrors,
    validationSchema,
    action
  );
  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
  }>(
    { option1: "Propia", option2: "Alquilada" },
    formData.typeOfResidence,
    "typeOfResidence",
    updateFormData
  );
  return (
    <div className="formContainer">
      <CustomForm
        formTitle="Información personal"
        Icon={User}
        formRef={formRef}
        handleSubmit={handleSubmit}
      >
        <CustomForm.FieldSet id="personal-data-input-set" setStyle="gridForm">
          <CustomForm.Input
            id="email"
            name="email"
            label="Correo Electronico *"
            type="text"
            placeholder="Digita tu correo electrónico"
            value={formData.email}
            errorMessage={errors["email"].message}
            Icon={AtSign}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="fullName"
            name="fullName"
            label="Nombre completo *"
            type="text"
            placeholder="Digita tu nombre completo"
            value={formData.fullName}
            errorMessage={errors["fullName"].message}
            Icon={User}
            onChange={handleChange}
          />
          <CustomForm.Select
            id="typeOfIdentification"
            name="typeOfIdentification"
            label="Tipo de identificación *"
            value={formData.typeOfIdentification}
            errorMessage={errors["typeOfIdentification"].message}
            options={[
              { label: "Cédula", value: "Cedula" },
              { label: "Cédula extrangera", value: "CedulaExtranjera" },
            ]}
            Icon={User}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="identification"
            name="identification"
            label="Número de identificación *"
            type="text"
            placeholder="Digita tu identificación"
            value={formData.identification}
            errorMessage={errors["identification"].message}
            Icon={Hashtag}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="phone"
            name="phone"
            label="Número de teléfono"
            type="phone"
            placeholder="Digita tu número de telefono"
            value={formData.phone}
            errorMessage={errors["phone"].message}
            Icon={Phone}
            onChange={handleChange}
          />
          <CustomForm.Select
            id="civilStatus"
            name="civilStatus"
            label="Estado civil *"
            value={formData.civilStatus}
            errorMessage={errors["civilStatus"].message}
            options={[
              { label: "Casado", value: "Casado" },
              { label: "Soltero", value: "Soltero" },
              { label: "Viudo", value: "Viudo" },
            ]}
            Icon={PeopleTag}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="profession"
            name="profession"
            label="Profesión u ocupación *"
            type="text"
            placeholder="Digita tu ocupación o profesión "
            value={formData.profession}
            errorMessage={errors["profession"].message}
            Icon={Suitcase}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="address"
            name="address"
            label="Dirección de residencia *"
            type="text"
            placeholder="Digita la dirección de recidencia "
            value={formData.address}
            errorMessage={errors["address"].message}
            Icon={MapPin}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="houseNumber"
            name="houseNumber"
            label="Número de casa *"
            type="text"
            placeholder="Digita el número de la casa "
            value={formData.houseNumber}
            errorMessage={errors["houseNumber"].message}
            Icon={Home}
            onChange={handleChange}
          />
          <CustomForm.Input
            id="sector"
            name="sector"
            label="Sector de residencia *"
            type="text"
            placeholder="Digita el sector de tu residencia "
            value={formData.sector}
            errorMessage={errors["sector"].message}
            Icon={MapsArrow}
            onChange={handleChange}
          />
          <CustomForm.RadioButtonList
            id="typeOfResidence"
            label="Tipo de residencia *"
            errorMessage={errors["typeOfResidence"].message}
            radioButtons={[
              {
                id: "option-1",
                name: "typeOfResidence",
                value: radioButtonData.option1,
                label: "Propia",
                onChange: handleRadioChange,
              },
              {
                id: "option-2",
                name: "typeOfResidence",
                value: radioButtonData.option2,
                label: "Alquilada",
                onChange: handleRadioChange,
              },
            ]}
          />
        </CustomForm.FieldSet>
        <CustomForm.IconButton
          id="button-update-personal-info"
          type="submit"
          title="Actualizar información personal"
          Icon={Edit}
          label="Actualizar información"
          variant="warning"
          loading={loading}
          onClick={() => {}}
        />
      </CustomForm>
    </div>
  );
};

export default PersonalForm;
