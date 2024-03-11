import {
  PersonalDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: PersonalDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  email: await formValidations
    .validateEmptyFields(formData.email, "email", formRef)
    .then(() => formValidations.validateEmail(formData.email, "email", formRef))
    .catch((error: FieldErrorType) => error),
  fullName: await formValidations
    .validateEmptyFields(formData.fullName, "fullName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  typeOfIdentification: await formValidations
    .validateEmptyFields(
      formData.typeOfIdentification,
      "typeOfIdentification",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  identification: await formValidations
    .validateEmptyFields(formData.identification, "identification", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  phone: await formValidations
    .validateEmptyFields(formData.phone, "phone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  civilStatus: await formValidations
    .validateEmptyFields(formData.civilStatus, "civilStatus", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  profession: await formValidations
    .validateEmptyFields(formData.profession, "profession", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  address: await formValidations
    .validateEmptyFields(formData.address, "address", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  houseNumber: await formValidations
    .validateEmptyFields(formData.houseNumber, "houseNumber", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  sector: await formValidations
    .validateEmptyFields(formData.sector, "sector", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  typeOfResidence: await formValidations
    .validateEmptyFields(formData.typeOfResidence, "typeOfResidence", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
