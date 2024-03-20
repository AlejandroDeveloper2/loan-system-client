import { WrongInput } from "@models/FormDataModels";

export const initialValues = {
  amount: 0,
  paymentCycle: "",
  interest: 0,
  deadline: 0,
  firstPaymentDate: "",
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

  interest: {
    message: "",
    error: false,
  },

  deadline: {
    message: "",
    error: false,
  },
  firstPaymentDate: {
    message: "",
    error: false,
  },
};
