import {
  UpdateClientDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: UpdateClientDataForm,
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
  companyName: await formValidations
    .validateEmptyFields(formData.companyName, "companyName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  companyPhone: await formValidations
    .validateEmptyFields(formData.companyPhone, "companyPhone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  companyAddress: await formValidations
    .validateEmptyFields(formData.companyAddress, "companyAddress", formRef)
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
  accountType: await formValidations
    .validateEmptyFields(formData.accountType, "accountType", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  bank: await formValidations
    .validateEmptyFields(formData.bank, "bank", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  name: { message: "", error: false },
  bankingApplication: await formValidations
    .validateEmptyFields(
      String(formData.bankingApplication),
      "bankingApplication",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  transfers: await formValidations
    .validateEmptyFields(String(formData.transfers), "transfers", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  accountNumber: await formValidations
    .validateEmptyFields(
      String(formData.accountNumber),
      "accountNumber",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
