import { PersonalDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: PersonalDataForm = {
  email: "",
  fullName: "",
  typeOfIdentification: "",
  identification: "",
  phone: "",
  civilStatus: "",
  profession: "",
  address: "",
  houseNumber: "",
  sector: "",
  typeOfResidence: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },
  fullName: {
    message: "",
    error: false,
  },
  typeOfIdentification: {
    message: "",
    error: false,
  },
  identification: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  civilStatus: {
    message: "",
    error: false,
  },
  profession: {
    message: "",
    error: false,
  },
  address: {
    message: "",
    error: false,
  },
  houseNumber: {
    message: "",
    error: false,
  },
  sector: {
    message: "",
    error: false,
  },
  typeOfResidence: {
    message: "",
    error: false,
  },
};
