import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  PaymentIndicators,
  PaymentStatusType,
  PaymentsData,
  ResponseGlobal,
  TableResponse,
} from "@models/DataModels";
import { PaymentsFilters } from "@models/FiltersDataModels";

export class PaymentsService {
  constructor() {}

  public async getTodayPayments(
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    paymentFilters: PaymentsFilters,
    filter: PaymentStatusType
  ): Promise<TableResponse<PaymentsData>> {
    let response: TableResponse<PaymentsData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        paymentStatus: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: paymentFilters.startDate,
        paymentCycle: paymentFilters.paymentCycle,
      },
    };
    try {
      const { data } = await axiosClient.get<TableResponse<PaymentsData>>(
        "/payment-schedule",
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getPayment(
    token: string,
    paymentId: string
  ): Promise<ResponseGlobal<PaymentsData>> {
    let response: ResponseGlobal<PaymentsData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ResponseGlobal<PaymentsData>>(
        `/payment-schedule/${paymentId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async payLoanQuota(
    token: string,
    paymentId: string
  ): Promise<ResponseGlobal<PaymentsData>> {
    let response: ResponseGlobal<PaymentsData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<PaymentsData>>(
        `/payment-schedule/make-payment/${paymentId}`,
        {},
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getPaymentIndicators(
    token: string
  ): Promise<ResponseGlobal<PaymentIndicators>> {
    let response: ResponseGlobal<PaymentIndicators>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<PaymentIndicators>>(
        "/payment-schedule/indicators",
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
