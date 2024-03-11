import {
  BankAccountDataForm,
  FieldErrorType,
  WrongInput,
} from "@models/FormDataModels";

import { FormValidations } from "@utils/FormValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: BankAccountDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
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
