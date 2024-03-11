import { WorkDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: WorkDataForm = {
  companyName: "",
  phone: "",
  address: "",
  timeWorking: 0,
  position: "",
  bossName: "",
  bossPhone: "",
  salary: 0,
  paymentOfPayroll: "Mensual",
  otherIncome: 0,
  description: "",
};

export const initialErrors: WrongInput = {
  companyName: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  address: {
    message: "",
    error: false,
  },
  timeWorking: {
    message: "",
    error: false,
  },
  position: {
    message: "",
    error: false,
  },
  bossName: {
    message: "",
    error: false,
  },
  bossPhone: {
    message: "",
    error: false,
  },
  salary: {
    message: "",
    error: false,
  },
  paymentOfPayroll: {
    message: "",
    error: false,
  },
  otherIncome: {
    message: "",
    error: false,
  },
  description: {
    message: "",
    error: false,
  },
};
