import { ProfileDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: ProfileDataForm = {
  fistName: "",
  lastName: "",
  email: "",
};

export const initialErrors: WrongInput = {
  fistName: {
    message: "",
    error: false,
  },
  lastName: {
    message: "",
    error: false,
  },
  email: {
    message: "",
    error: false,
  },
};
