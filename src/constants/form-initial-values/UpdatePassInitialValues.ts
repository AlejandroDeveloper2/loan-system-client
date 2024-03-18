import { ChangePassDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: ChangePassDataForm = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const initialErrors: WrongInput = {
  currentPassword: {
    message: "",
    error: false,
  },
  newPassword: {
    message: "",
    error: false,
  },
  confirmPassword: {
    message: "",
    error: false,
  },
};
