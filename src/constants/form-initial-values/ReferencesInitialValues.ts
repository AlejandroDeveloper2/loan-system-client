import { ReferencesDataForm, WrongInput } from "@models/FormDataModels";

export const initialValues: ReferencesDataForm = {
  firstRelativeNames: "",
  firstRelativePhone: "",
  secondRelativeNames: "",
  secondRelativePhone: "",
  firstFriendNames: "",
  firstFriendPhone: "",
  secondFriendNames: "",
  secondFriendPhone: "",
  interaction: "",
  referredName: "",
  referredPhone: "",
};

export const initialErrors: WrongInput = {
  firstRelativeNames: {
    message: "",
    error: false,
  },

  firstRelativePhone: {
    message: "",
    error: false,
  },

  secondRelativeNames: {
    message: "",
    error: false,
  },

  secondRelativePhone: {
    message: "",
    error: false,
  },

  firstFriendNames: {
    message: "",
    error: false,
  },
  firstFriendPhone: {
    message: "",
    error: false,
  },
  secondFriendNames: {
    message: "",
    error: false,
  },
  secondFriendPhone: {
    message: "",
    error: false,
  },
  interaction: {
    message: "",
    error: false,
  },
  referredName: {
    message: "",
    error: false,
  },
  referredPhone: {
    message: "",
    error: false,
  },
  referred: {
    message: "",
    error: false,
  },
};
