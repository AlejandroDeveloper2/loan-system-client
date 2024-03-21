import { FieldErrorType } from "@models/FormDataModels";

const markWrongInput = (
  formRef: React.RefObject<HTMLFormElement>,
  inputKey: string,
  error: boolean
): void => {
  const $fieldset = formRef.current?.querySelector("fieldset");
  const $input = $fieldset?.querySelector(`#${inputKey}`);

  if (error) $input?.classList.add("errorInput");
  else $input?.classList.remove("errorInput");
};

export class FormValidations {
  constructor() {}

  public validateEmptyFields(
    field: string | number,
    key: string,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field === "" || field === 0) {
      error = {
        message: "El campo es obligatorio!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public validateEmail(
    field: string,
    key: string,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const emailExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailExp.test(field)) {
      error = {
        message: "El correo es invalido!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public comparePasswords(
    passwords: string[],
    key: string,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const [password, confirmPassword] = passwords;

    if (confirmPassword !== password) {
      error = {
        message: "Las contraseñas no coinciden!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public validatePassword(
    password: string,
    key: string,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const passwordExp =
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])/;

    if (password.length < 7) {
      error = {
        message: "La contraseña debe tener al menos 7 caracteres!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else if (!passwordExp.test(password)) {
      error = {
        message:
          "La contraseña debe contener al menos un digito, una mayuscula, una minuscula y un caracter especial!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public validateNumericFields(
    field: number,
    key: string,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const isNumberExp = /^[0-9]+$/;

    if (field < 0) {
      error = {
        message: "El número ingresado no puede ser negativo!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else if (!isNumberExp.test(String(field))) {
      error = {
        message: "El valor ingresado debe ser un número!",
        error: true,
      };
      markWrongInput(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      markWrongInput(formRef, key, false);
      return Promise.resolve(error);
    }
  }
}
