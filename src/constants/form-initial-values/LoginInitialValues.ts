import { LoginFormData, WrongInput } from "@models/FormDataModels";

export const initialValues: LoginFormData = {
  email: "",
  password: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },

  password: {
    message: "",
    error: false,
  },
};
