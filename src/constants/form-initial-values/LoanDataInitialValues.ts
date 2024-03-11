import { LoanDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: LoanDataForm = {
  amount: 0,
  paymentCycle: "Mensual",
  deadline: 0,
  description: "",
};

export const initialErrors: WrongInput = {
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
  description: {
    message: "",
    error: false,
  },
};
