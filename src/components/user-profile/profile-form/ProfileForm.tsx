import { useEffect } from "react";
import { AtSign, EditPencil, User } from "iconoir-react";

import {
  initialErrors,
  getInitialValues,
} from "@constants/form-initial-values/ProfileDataInitialValues";
import { ProfileDataForm } from "@models/FormDataModels";

import useUserStore from "@zustand/UsersStore";
import useAuthStore from "@zustand/AuthStore";
import { useForm } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { CustomForm } from "@components/index";

const ProfileForm = (): JSX.Element => {
  const { user, updateUser, getUser } = useUserStore();
  const auth = useAuthStore((state) => state.auth);

  const action = () => {
    updateUser(auth?.sub ?? "", formData);
  };

  const {
    formData,
    errors,
    formRef,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<ProfileDataForm>(
    getInitialValues(user),
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  useEffect(() => {
    if (auth) getUser(auth.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    updateFormInitialValues(getInitialValues(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <CustomForm
      formTitle="Datos Básicos"
      Icon={User}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <CustomForm.FieldSet id="profile-input-set" setStyle="gridForm">
        <CustomForm.Input
          id="fistName"
          name="fistName"
          label="Primer Nombre *"
          type="text"
          placeholder="Digita tu primer nombre "
          value={formData.fistName}
          errorMessage={errors["fistName"].message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="lastName"
          name="lastName"
          label="Apellido *"
          type="text"
          placeholder="Digita tu apellido"
          value={formData.lastName}
          errorMessage={errors["lastName"].message}
          Icon={User}
          onChange={handleChange}
        />
        <CustomForm.Input
          id="email"
          name="email"
          label="Correo *"
          type="text"
          placeholder="Digita tu correo"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
      </CustomForm.FieldSet>
      <CustomForm.IconButton
        id="button-update-profile"
        type="submit"
        title="Actualizar perfil"
        Icon={EditPencil}
        label="Actualizar perfil"
        variant="warning"
        loading={false}
        onClick={() => {}}
      />
    </CustomForm>
  );
};

export default ProfileForm;
