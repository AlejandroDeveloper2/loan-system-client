import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import { LoginResponse, ServerResponse } from "@models/DataModels";
import { LoginFormData } from "@models/FormDataModels";

export class AuthService {
  constructor() {}
  public async login(userCredencials: LoginFormData): Promise<LoginResponse> {
    let response: LoginResponse;
    try {
      const { data } = await axiosClient.post<LoginResponse>(
        "/auth/singIn",
        userCredencials
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }

    return response;
  }

  public async recoverPassword(email: string): Promise<void> {
    try {
      await axiosClient.post<void>("/auth/forgot-password", {
        email,
      });
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }
  }

  public async changePassword(password: string, token: string): Promise<void> {
    try {
      const { data } = await axiosClient.post(
        `/auth/change-password/${token}`,
        {
          password,
        }
      );
      console.log(data);
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }
  }
}
