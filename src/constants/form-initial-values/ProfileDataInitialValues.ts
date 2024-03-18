import { User } from "@models/DataModels";
import { ProfileDataForm, WrongInput } from "@models/FormDataModels";

export const getInitialValues = (user: User | null): ProfileDataForm => ({
  fistName: user ? user.fistName : "",
  lastName: user ? user.lastName : "",
  email: user ? user.email : "",
});

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
