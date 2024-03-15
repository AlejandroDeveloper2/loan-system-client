import {
  CreateLoanDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: CreateLoanDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  client: await formValidations
    .validateEmptyFields(formData.client, "client", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  amount: await formValidations
    .validateEmptyFields(formData.amount, "amount", formRef)
    .then(() =>
      formValidations.validateNumericFields(formData.amount, "amount", formRef)
    )
    .catch((error: FieldErrorType) => error),
  paymentCycle: await formValidations
    .validateEmptyFields(formData.paymentCycle, "paymentCycle", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  deadline: await formValidations
    .validateEmptyFields(formData.deadline, "deadline", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.deadline,
        "deadline",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
});
