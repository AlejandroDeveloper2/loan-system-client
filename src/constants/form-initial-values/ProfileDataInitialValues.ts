import { User } from "@models/DataModels";
import { ProfileDataForm, WrongInput } from "@models/FormDataModels";

export const getInitialValues = (user: User | null): ProfileDataForm => ({
  firstName: user ? user.firstName : "",
  lastName: user ? user.lastName : "",
  email: user ? user.email : "",
});

export const initialErrors: WrongInput = {
  firstName: {
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
