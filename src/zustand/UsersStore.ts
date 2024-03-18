import { create } from "zustand";
import { toast } from "react-toastify";

import { UserStore } from "@models/StoreModels";
import { ResponseGlobal, User } from "@models/DataModels";
import { ChangePassDataForm, ProfileDataForm } from "@models/FormDataModels";

import { UsersService } from "@services/users.service";

const userService = new UsersService();

const useUserStore = create<UserStore>((set) => ({
  user: null,
  loading: false,
  getUser: async (userId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      set({ loading: true });
      const { body: user }: ResponseGlobal<User> = await userService.getUser(
        token,
        userId
      );
      set({ user });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al cargar la información del usuario!"
      );
    } finally {
      set({ loading: false });
    }
  },
  updateUser: async (
    userId: string,
    userData: ProfileDataForm
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: user }: ResponseGlobal<User> = await userService.updateUser(
        token,
        userId,
        userData
      );
      set({ user });
      toast.success("¡Perfil actualizado satisfactoriamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al editar el perfil de usuario!");
    } finally {
      set({ loading: false });
    }
  },

  updateUserPassword: async (
    userId: string,
    userData: ChangePassDataForm
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: user }: ResponseGlobal<User> =
        await userService.updateUserPassword(token, userId, userData);
      set({ user });
      toast.success("¡La contraseña se ha cambiado satisfactoriamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al editar la contraseña!");
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;
