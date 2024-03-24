import { create } from "zustand";
import { toast } from "react-toastify";
import { decodeToken } from "react-jwt";

import { AuthService } from "@services/Auth.service";

import { AuthStore } from "@models/StoreModels";
import {
  ChangePasswordFormData,
  LoginFormData,
  RecoverPassFormData,
} from "@models/FormDataModels";
import { Auth, ServerResponse } from "@models/DataModels";

const authService = new AuthService();

const useAuthStore = create<AuthStore>((set, get) => ({
  auth: decodeToken<Auth>(localStorage.getItem("token") ?? ""),
  authStatus: "no authenticated",
  login: async (
    userCredencials: LoginFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Validando usuario...", true);
      const { token, refreshToken } = await authService.login(userCredencials);
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("refreshToken", refreshToken);
      const decodedToken = decodeToken<Auth>(token);
      set({ auth: decodedToken, authStatus: "authenticated" });
      toast.success("¡Inicio de sesión exitoso!");
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading("", false);
    }
  },
  logout: (): void => {
    window.localStorage.clear();
    set({ auth: null, authStatus: "no authenticated" });
  },

  recoverPassword: async (
    userEmail: RecoverPassFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Enviando solicitud...", true);
      await authService.recoverPassword(userEmail.email);
      toast.success(
        "¡Se ha enviado un mensaje a tu correo con las instrucciones!"
      );
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading("", false);
    }
  },
  changePassword: async (
    newUserPassword: ChangePasswordFormData,
    token,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Cambiando contraseña...", true);
      await authService.changePassword(newUserPassword.password, token);
      toast.success("¡Se reestablecido tu contraseña con exito!");
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading("", false);
    }
  },
  verifyAuthenticatedUser: async (): Promise<void> => {
    const refreshToken: string | null =
      window.localStorage.getItem("refreshToken");
    const token: string | null = window.localStorage.getItem("token");
    try {
      set({ authStatus: "checking" });
      if (refreshToken && token) {
        const res = await authService.verifyAuthenticatedUser({
          refreshToken,
          token,
        });
        window.localStorage.setItem("refreshToken", res.refreshToken);
        window.localStorage.setItem("token", res.token);

        set({ authStatus: "authenticated" });
      } else {
        get().logout();
      }
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    }
  },
}));
export default useAuthStore;
