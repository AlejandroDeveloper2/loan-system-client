import { User } from "iconoir-react";

import useAuthStore from "@zustand/AuthStore";

import {
  InfoSection,
  ProfileForm,
  UpdatedPasswordForm,
} from "@components/index";

const UserProfilePage = (): JSX.Element => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <>
      <h1 className="heading1">
        <User />
        Mi perfil de usuario
      </h1>
      <InfoSection
        sectionTitle="Detalles de mi perfil"
        labelId="Rol de usuario"
        link="/userPanel"
        recordId={auth ? String(auth.roles) : "Rol de usuario"}
        buttonLabel="Volver al panel de usuario"
      />
      <div className="formContainer">
        <ProfileForm />
      </div>

      <div className="formContainer">
        <UpdatedPasswordForm />
      </div>
    </>
  );
};

export default UserProfilePage;
