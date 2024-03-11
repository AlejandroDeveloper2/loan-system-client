import { BankAccountDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: BankAccountDataForm = {
  accountType: "",
  bank: "",
  name: "",
  bankingApplication: false,
  transfers: false,
  accountNumber: "",
};

export const initialErrors: WrongInput = {
  accountType: {
    message: "",
    error: false,
  },

  bank: {
    message: "",
    error: false,
  },
  name: {
    message: "",
    error: false,
  },
  bankingApplication: {
    message: "",
    error: false,
  },
  transfers: {
    message: "",
    error: false,
  },
  accountNumber: {
    message: "",
    error: false,
  },
};
