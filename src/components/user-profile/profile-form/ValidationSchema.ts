import {
  ProfileDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ProfileDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  email: await formValidations
    .validateEmptyFields(String(formData.email), "email", formRef)
    .then(() => formValidations.validateEmail(formData.email, "email", formRef))
    .catch((error: FieldErrorType) => error),
  fistName: await formValidations
    .validateEmptyFields(formData.fistName, "fistName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  lastName: await formValidations
    .validateEmptyFields(String(formData.lastName), "lastName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
