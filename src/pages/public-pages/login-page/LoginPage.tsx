import { Lock, LogIn, RefreshDouble, AtSign } from "iconoir-react";

import { useForm } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";
import useAuthStore from "@zustand/AuthStore";

import { LoginFormData } from "@models/FormDataModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/LoginInitialValues";

import { CustomForm, CustomLink } from "@components/index";

const LoginPage = (): JSX.Element => {
  const { loading, login } = useAuthStore();

  const action = () => {
    login(formData);
  };

  const { formData, formRef, errors, handleChange, handleSubmit, clearForm } =
    useForm<LoginFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <CustomForm
      formTitle="Iniciar sesión"
      Icon={LogIn}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="login-input-set" setStyle="flexForm">
        <CustomForm.Input
          id="email"
          name="email"
          label="Correo eléctronico"
          type="text"
          placeholder="Digita tu correo eléctronico"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          placeholder="Digita tu contraseña"
          value={formData.password}
          errorMessage={errors["password"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-login"
        type="submit"
        title="Ingresar al sistema"
        Icon={LogIn}
        label="Iniciar sesión"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
      <CustomForm.IconButton
        id="button-clear"
        type="button"
        title="Limpiar formulario"
        Icon={RefreshDouble}
        label="Limpiar"
        variant="neutral"
        loading={false}
        onClick={clearForm}
      />
      <CustomLink
        label="¿Olvidaste tu contraseña?"
        linkText="Recupérala aqui"
        to="/recoverPassword"
      />
    </CustomForm>
  );
};

export default LoginPage;
