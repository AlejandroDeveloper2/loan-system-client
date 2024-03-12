import {
  AtSign,
  FloppyDisk,
  Hashtag,
  Home,
  MapPin,
  MapsArrow,
  PeopleTag,
  Phone,
  Suitcase,
  User,
} from "iconoir-react";

import { useForm, useFormStepper, useRadioButton } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { PersonalDataForm } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/PersonalDataInitialValues";

import { CustomForm } from "@components/index";

const PersonalDataPage = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }
  const { saveStepFormData } = useFormStepper<PersonalDataForm>(
    "/loanRequest/workData",
    "client"
  );
  const {
    formData,
    formRef,
    errors,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<PersonalDataForm>(
    initialValues,
    initialErrors,
    "add",
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
    <CustomForm
      formTitle="Datos Personales"
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
            { label: "Cédula extrangera", value: "CedulaExtrangera" },
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
              checked: false,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "typeOfResidence",
              value: radioButtonData.option2,
              label: "Alquilada",
              checked: false,
              onChange: handleRadioChange,
            },
          ]}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y continuar"
        Icon={FloppyDisk}
        label="Guardar y continuar"
        variant="primary"
        loading={false}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default PersonalDataPage;
