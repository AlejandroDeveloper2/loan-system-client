import {
  ChangePasswordFormData,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ChangePasswordFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  password: await formValidations
    .validateEmptyFields(formData.password, "password", formRef)
    .then(() =>
      formValidations.validatePassword(formData.password, "password", formRef)
    )
    .catch((error: FieldErrorType) => error),
  confirmPassword: await formValidations
    .validateEmptyFields(formData.confirmPassword, "confirmPassword", formRef)
    .then(() =>
      formValidations.comparePasswords(
        [formData.password, formData.confirmPassword],
        "confirmPassword",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
});
