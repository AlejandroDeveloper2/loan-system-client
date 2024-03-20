import { AtSign, Send, Lock } from "iconoir-react";

import { useForm, useLoading } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { RecoverPassFormData } from "@models/FormDataModels";
import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/RecoverPassInitialValues";

import { CustomForm, CustomLink } from "@components/index";
import useAuthStore from "@zustand/AuthStore";

const RecoverPasswordPage = (): JSX.Element => {
  const { recoverPassword } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    recoverPassword(formData, toggleLoading);
  };

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<RecoverPassFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <CustomForm
      formTitle="Recuperar contraseña"
      Icon={Lock}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="login-input-set" setStyle="flexForm">
        <CustomForm.Input
          id="email"
          name="email"
          label="Correo eléctronico"
          type="text"
          placeholder="Digita tu correo"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-send"
        type="submit"
        title="Enviar solicitud de recuperación"
        Icon={Send}
        label="Enviar solicitud"
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

export default RecoverPasswordPage;
