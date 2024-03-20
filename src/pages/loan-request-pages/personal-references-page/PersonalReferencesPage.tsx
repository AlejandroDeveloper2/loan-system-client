import { Community, DoubleCheck, Phone, User } from "iconoir-react";

import {
  useForm,
  useFormStepper,
  useLoading,
  useRadioButton,
} from "@hooks/index";
import { validationSchema } from "./ValidationSchema";
import { parseReferenceDate } from "@utils/helpers";

import { ReferencesDataForm } from "@models/FormDataModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/ReferencesInitialValues";
import { ReferencesData } from "@models/DataModels";

import { CustomForm } from "@components/index";

const PersonalReferencesPage = (): JSX.Element => {
  const { loading, toggleLoading } = useLoading();

  function action() {
    const parsedData: ReferencesData = parseReferenceDate(formData);
    saveStepFormData(parsedData);
  }

  const { saveStepFormData } = useFormStepper<ReferencesData>(
    "/loanRequest/personalReferences",
    "personalReference",
    toggleLoading
  );

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<ReferencesDataForm>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );

  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
    option3: string;
  }>(
    {
      option1: "Referencia de un conocido",
      option2: "Redes sociales",
      option3: "Publicidad de sticker",
    },
    "",
    "interaction",
    updateFormData
  );

  return (
    <CustomForm
      formTitle="Referencias personales y de interacción"
      Icon={Community}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="references-info-input-set" setStyle="gridForm">
        <CustomForm.Input
          id="firstRelativeNames"
          name="firstRelativeNames"
          label="Nombres del primer familiar *"
          type="text"
          placeholder="Digita el nombre de tu primer familiar"
          value={formData.firstRelativeNames}
          errorMessage={errors.firstRelativeNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="firstRelativePhone"
          name="firstRelativePhone"
          label="Celular del familiar *"
          type="phone"
          placeholder="Digita el teléfono del familiar"
          value={formData.firstRelativePhone}
          errorMessage={errors.firstRelativePhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="secondRelativeNames"
          name="secondRelativeNames"
          label="Nombres del segundo familiar *"
          type="text"
          placeholder="Digita el nombre de tu segundo familiar"
          value={formData.secondRelativeNames}
          errorMessage={errors.secondRelativeNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="secondRelativePhone"
          name="secondRelativePhone"
          label="Celular del familiar *"
          type="phone"
          placeholder="Digita el teléfono del familiar"
          value={formData.secondRelativePhone}
          errorMessage={errors.secondRelativePhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="firstFriendNames"
          name="firstFriendNames"
          label="Primer nombre referencia (Amigo)*"
          type="text"
          placeholder="Digita el nombre de tu primer amigo"
          value={formData.firstFriendNames}
          errorMessage={errors.firstFriendNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="firstFriendPhone"
          name="firstFriendPhone"
          label="Celular *"
          type="phone"
          placeholder="Digita el teléfono de la referencia"
          value={formData.firstFriendPhone}
          errorMessage={errors.firstFriendPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="secondFriendNames"
          name="secondFriendNames"
          label="Segundo nombre referencia (Amigo)*"
          type="text"
          placeholder="Digita el nombre de tu segundo amigo"
          value={formData.secondFriendNames}
          errorMessage={errors.secondFriendNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="secondFriendPhone"
          name="secondFriendPhone"
          label="Celular *"
          type="phone"
          placeholder="Digita el teléfono de la referencia"
          value={formData.secondFriendPhone}
          errorMessage={errors.secondFriendPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <CustomForm.RadioButtonList
          id="interaction"
          label="¿Porque medio se enteró de nosotros? *"
          errorMessage={errors["interaction"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "interaction",
              value: radioButtonData.option1,
              label: "Referencia de un conocido",
              checked: false,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "interaction",
              value: radioButtonData.option2,
              label: "Redes sociales",
              checked: false,
              onChange: handleRadioChange,
            },
            {
              id: "option-3",
              name: "interaction",
              value: radioButtonData.option3,
              label: "Publicidad de sticker",
              checked: false,
              onChange: handleRadioChange,
            },
          ]}
        />
        <CustomForm.Input
          id="referredName"
          name="referredName"
          label="Nombre de la persona que lo recomendó *"
          type="text"
          placeholder="Digita el nombre de la persona"
          value={formData.referredName}
          errorMessage={errors.referredName.message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="referredPhone"
          name="referredPhone"
          label="Celular *"
          type="phone"
          placeholder="Digita el teléfono de la persona"
          value={formData.referredPhone}
          errorMessage={errors.referredPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y finalizar"
        Icon={DoubleCheck}
        label="Guardar y finalizar"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default PersonalReferencesPage;
