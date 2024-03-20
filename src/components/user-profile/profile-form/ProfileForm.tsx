/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { AtSign, EditPencil, User } from "iconoir-react";

import {
  initialErrors,
  getInitialValues,
} from "@constants/form-initial-values/ProfileDataInitialValues";
import { ProfileDataForm } from "@models/FormDataModels";

import useUserStore from "@zustand/UsersStore";
import useAuthStore from "@zustand/AuthStore";
import { useForm, useLoading } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { CustomForm, Spinner } from "@components/index";

const ProfileForm = (): JSX.Element => {
  const { user, updateUser, getUser } = useUserStore();
  const auth = useAuthStore((state) => state.auth);

  const { loading, toggleLoading } = useLoading();
  const {
    loading: loadingUser,
    loadingMessage,
    toggleLoading: toggleLoadingUser,
  } = useLoading();

  const action = () => {
    updateUser(auth?.sub ?? "", formData, toggleLoading);
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
    if (auth) getUser(auth.sub, toggleLoadingUser);
  }, [auth]);

  useEffect(() => {
    updateFormInitialValues(getInitialValues(user));
  }, [user]);

  return (
    <CustomForm
      formTitle="Datos Básicos"
      Icon={User}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      {loadingUser ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <>
          <CustomForm.FieldSet id="profile-input-set" setStyle="gridForm">
            <CustomForm.Input
              id="fistName"
              name="fistName"
              label="Primer Nombre *"
              type="text"
              placeholder="Digita tu primer nombre "
              value={formData.firstName}
              errorMessage={errors["firstName"].message}
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
            loading={loading}
            onClick={() => {}}
          />
        </>
      )}
    </CustomForm>
  );
};

export default ProfileForm;
