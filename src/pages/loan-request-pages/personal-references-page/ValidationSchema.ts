import {
  ReferencesDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ReferencesDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  firstRelativeNames: await formValidations
    .validateEmptyFields(
      formData.firstRelativeNames,
      "firstRelativeNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstRelativePhone: await formValidations
    .validateEmptyFields(
      formData.firstRelativePhone,
      "firstRelativePhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondRelativeNames: await formValidations
    .validateEmptyFields(
      formData.secondRelativeNames,
      "secondRelativeNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondRelativePhone: await formValidations
    .validateEmptyFields(
      formData.secondRelativePhone,
      "secondRelativePhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstFriendNames: await formValidations
    .validateEmptyFields(formData.firstFriendNames, "firstFriendNames", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstFriendPhone: await formValidations
    .validateEmptyFields(formData.firstFriendPhone, "firstFriendPhone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondFriendNames: await formValidations
    .validateEmptyFields(
      String(formData.secondFriendNames),
      "secondFriendNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondFriendPhone: await formValidations
    .validateEmptyFields(
      String(formData.secondFriendPhone),
      "secondFriendPhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  interaction: await formValidations
    .validateEmptyFields(String(formData.interaction), "interaction", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  referredName: await formValidations
    .validateEmptyFields(String(formData.referredName), "referredName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  referredPhone: await formValidations
    .validateEmptyFields(
      String(formData.referredPhone),
      "referredPhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
