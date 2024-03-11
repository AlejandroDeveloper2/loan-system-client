import { ChangePasswordFormData, WrongInput } from "@models/FormDataModels";

export const initialValues: ChangePasswordFormData = {
  password: "",
  confirmPassword: "",
};

export const initialErrors: WrongInput = {
  password: {
    message: "",
    error: false,
  },

  confirmPassword: {
    message: "",
    error: false,
  },
};
