import { RecoverPassFormData, WrongInput } from "@models/FormDataModels";

export const initialValues: RecoverPassFormData = {
  email: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },
};
