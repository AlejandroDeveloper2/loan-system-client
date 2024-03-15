import { CreateLoanDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: CreateLoanDataForm = {
  client: "",
  amount: 0,
  paymentCycle: "",
  deadline: 0,
};

export const initialErrors: WrongInput = {
  client: {
    message: "",
    error: false,
  },
  amount: {
    message: "",
    error: false,
  },

  paymentCycle: {
    message: "",
    error: false,
  },

  deadline: {
    message: "",
    error: false,
  },
};
