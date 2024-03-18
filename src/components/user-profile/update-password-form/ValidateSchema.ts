import {
  ChangePassDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ChangePassDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  currentPassword: await formValidations
    .validateEmptyFields(formData.currentPassword, "currentPassword", formRef)
    .then(() =>
      formValidations.validatePassword(
        formData.currentPassword,
        "currentPassword",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  newPassword: await formValidations
    .validateEmptyFields(formData.newPassword, "newPassword", formRef)
    .then(() =>
      formValidations.validatePassword(
        formData.newPassword,
        "newPassword",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  confirmPassword: await formValidations
    .validateEmptyFields(formData.confirmPassword, "confirmPassword", formRef)
    .then(() =>
      formValidations.comparePasswords(
        [formData.newPassword, formData.confirmPassword],
        "confirmPassword",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
});
