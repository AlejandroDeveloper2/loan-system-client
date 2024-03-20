import { Lock, RefreshDouble } from "iconoir-react";
import { useParams } from "react-router-dom";

import { useForm, useLoading } from "@hooks/index";
import useAuthStore from "@zustand/AuthStore";
import { validationSchema } from "./ValidationSchema";

import { ChangePasswordFormData } from "@models/FormDataModels";
import {
  initialValues,
  initialErrors,
} from "@constants/form-initial-values/ChangePassInitialValues";

import { CustomForm, CustomLink } from "@components/index";

const ChangePasswordPage = (): JSX.Element => {
  const params = useParams();
  const urlToken = params as { token: string };

  const { changePassword } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    changePassword(formData, urlToken.token, toggleLoading);
  };

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<ChangePasswordFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <CustomForm
      formTitle="Restablecer contraseña"
      Icon={RefreshDouble}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="change-pass-input-set" setStyle="flexForm">
        <CustomForm.Input
          id="password"
          name="password"
          label="Nueva contraseña"
          type="password"
          placeholder="Digita tu nueva contraseña"
          value={formData.password}
          errorMessage={errors["password"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          placeholder="Confirma tu nueva contraseña"
          value={formData.confirmPassword}
          errorMessage={errors["confirmPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-recover"
        type="submit"
        title="Restablecer contraseña"
        Icon={RefreshDouble}
        label="Cambiar contraseña"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
      <CustomLink
        label="Volver al inicio de sesión"
        linkText="Click aqui"
        to="/"
      />
    </CustomForm>
  );
};

export default ChangePasswordPage;
