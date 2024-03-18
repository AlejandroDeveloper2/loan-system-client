import { EditPencil, Lock } from "iconoir-react";

import {
  initialErrors,
  initialValues,
} from "@constants/form-initial-values/UpdatePassInitialValues";
import { ChangePassDataForm } from "@models/FormDataModels";

import { useForm } from "@hooks/index";
import { validationSchema } from "./ValidateSchema";
import useUserStore from "@zustand/UsersStore";
import useAuthStore from "@zustand/AuthStore";

import { CustomForm } from "@components/index";

const UpdatedPasswordForm = (): JSX.Element => {
  const { updateUserPassword } = useUserStore();
  const auth = useAuthStore((state) => state.auth);

  const action = () => {
    updateUserPassword(auth?.sub ?? "", formData);
  };

  const { formData, errors, formRef, handleChange, handleSubmit } =
    useForm<ChangePassDataForm>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <CustomForm
      formTitle="Cambiar contraseña"
      Icon={Lock}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="updatePass-input-set" setStyle="gridForm">
        <CustomForm.Input
          id="currentPassword"
          name="currentPassword"
          label="Contraseña actual *"
          type="password"
          placeholder="Digita tu contraseña actual"
          value={formData.currentPassword}
          errorMessage={errors["currentPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="newPassword"
          name="newPassword"
          label="Nueva contraseña *"
          type="password"
          placeholder="Digita tu nueva contraseña "
          value={formData.newPassword}
          errorMessage={errors["newPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar nueva contraseña *"
          type="password"
          placeholder="Confirmar nueva contraseña "
          value={formData.confirmPassword}
          errorMessage={errors["confirmPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-update-pass"
        type="submit"
        title="Actualizar contraseña"
        Icon={EditPencil}
        label="Actualizar contraseña"
        variant="warning"
        loading={false}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default UpdatedPasswordForm;
