import {
  LoginFormData,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: LoginFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  email: await formValidations
    .validateEmptyFields(formData.email, "email", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  password: await formValidations
    .validateEmptyFields(formData.password, "password", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
