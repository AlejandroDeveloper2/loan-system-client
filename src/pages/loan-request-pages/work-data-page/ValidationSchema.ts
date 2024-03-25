import {
  FieldErrorType,
  WorkDataForm,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: WorkDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  companyName: await formValidations
    .validateEmptyFields(formData.companyName, "companyName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  phone: await formValidations
    .validateEmptyFields(formData.phone, "phone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  address: await formValidations
    .validateEmptyFields(formData.address, "address", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  timeWorking: await formValidations
    .validateEmptyFields(String(formData.timeWorking), "timeWorking", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.timeWorking,
        "timeWorking",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  position: await formValidations
    .validateEmptyFields(formData.position, "position", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  bossName: await formValidations
    .validateEmptyFields(formData.bossName, "bossName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  bossPhone: await formValidations
    .validateEmptyFields(formData.bossPhone, "bossPhone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  salary: await formValidations
    .validateEmptyFields(String(formData.salary), "salary", formRef)
    .then(() =>
      formValidations.validateNumericFields(formData.salary, "salary", formRef)
    )
    .catch((error: FieldErrorType) => error),
  paymentOfPayroll: await formValidations
    .validateEmptyFields(formData.paymentOfPayroll, "paymentOfPayroll", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  otherIncome: await formValidations
    .validateEmptyFields(String(formData.otherIncome), "otherIncome", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.otherIncome,
        "otherIncome",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  description: await formValidations
    .validateEmptyFields(formData.description, "description", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
