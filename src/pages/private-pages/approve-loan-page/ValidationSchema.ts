import {
  ApproveLoanDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ApproveLoanDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  amount: await formValidations
    .validateEmptyFields(String(formData.amount), "amount", formRef)
    .then(() =>
      formValidations.validateNumericFields(formData.amount, "amount", formRef)
    )
    .catch((error: FieldErrorType) => error),
  paymentCycle: await formValidations
    .validateEmptyFields(formData.paymentCycle, "paymentCycle", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  interest: await formValidations
    .validateEmptyFields(String(formData.interest), "interest", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.interest,
        "interest",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  deadline: await formValidations
    .validateEmptyFields(String(formData.deadline), "deadline", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.interest,
        "deadline",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  firstPaymentDate: await formValidations
    .validateEmptyFields(
      String(formData.firstPaymentDate),
      "firstPaymentDate",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
