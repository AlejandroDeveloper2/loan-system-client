import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ClientLoanData,
  LoanIndicator,
  LoanUpdatedData,
  PaymentSchedule,
  ResponseGlobal,
  TableResponse,
} from "@models/DataModels";
import { LoanFilters } from "@models/FiltersDataModels";
import {
  ApproveLoanDataForm,
  CreateLoanFinalDataForm,
} from "@models/FormDataModels";

export class LoansService {
  constructor() {}

  public async getAllLoans(
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string
  ): Promise<TableResponse<ClientLoanData>> {
    let response: TableResponse<ClientLoanData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        loanState: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: loanFilters.loanDate,
        paymentCycle: loanFilters.paymentCycle,
      },
    };
    try {
      const { data } = await axiosClient.get<TableResponse<ClientLoanData>>(
        "/loan",
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getLoan(
    token: string,
    loanId: string
  ): Promise<ResponseGlobal<LoanUpdatedData>> {
    let response: ResponseGlobal<LoanUpdatedData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<LoanUpdatedData>>(
        `/loan/${loanId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async createLoan(
    token: string,
    loanData: CreateLoanFinalDataForm
  ): Promise<ResponseGlobal<ClientLoanData>> {
    let response: ResponseGlobal<ClientLoanData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.post<ResponseGlobal<ClientLoanData>>(
        "/loan",
        loanData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async generatePaymentSchedule(
    token: string,
    loanData: ApproveLoanDataForm
  ): Promise<TableResponse<PaymentSchedule>> {
    let response: TableResponse<PaymentSchedule>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.post<TableResponse<PaymentSchedule>>(
        "/loan/generate-payment-schedule",
        loanData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async approveLoan(
    token: string,
    loanId: string,
    loanData: ApproveLoanDataForm
  ): Promise<ResponseGlobal<ClientLoanData>> {
    let response: ResponseGlobal<ClientLoanData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.patch<ResponseGlobal<ClientLoanData>>(
        `/loan/approve/${loanId}`,
        loanData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getLoanIndicators(
    token: string
  ): Promise<ResponseGlobal<LoanIndicator>> {
    let response: ResponseGlobal<LoanIndicator>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<LoanIndicator>>(
        "/loan/indicators",
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async cancelLoan(
    token: string,
    loanId: string
  ): Promise<ResponseGlobal<ClientLoanData>> {
    let response: ResponseGlobal<ClientLoanData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.patch<ResponseGlobal<ClientLoanData>>(
        `/loan/cancel/${loanId}`,
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
}
