import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import { ResponseGlobal, User } from "@models/DataModels";
import { ChangePassDataForm, ProfileDataForm } from "@models/FormDataModels";

export class UsersService {
  constructor() {}

  public async getUser(
    token: string,
    userId: string
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ResponseGlobal<User>>(
        `/user/${userId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }

  public async updateUser(
    token: string,
    userId: string,
    userData: ProfileDataForm
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.put<ResponseGlobal<User>>(
        `/user/${userId}`,
        userData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }

  public async updateUserPassword(
    token: string,
    userId: string,
    userData: ChangePassDataForm
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<User>>(
        `/user/${userId}`,
        {
          currentPassword: userData.currentPassword,
          newPassword: userData.newPassword,
        },
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }
}
