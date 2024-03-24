import { AxiosError } from "axios";

import {
  LoanRequestData,
  ParsedLoanRequestData,
  RequestFormData,
  ResponseGlobal,
  ServerResponse,
  TableResponse,
} from "@models/DataModels";

import axiosClient from "@config/AxiosClient";
import { LoanRequestFilters } from "@models/FiltersDataModels";
// import { formatDate } from "@utils/helpers";

export class LoanRequestService {
  constructor() {}

  public async validateClient(
    identification: string
  ): Promise<ResponseGlobal<boolean>> {
    let response: ResponseGlobal<boolean>;
    try {
      const { data } = await axiosClient.get<ResponseGlobal<boolean>>(
        `/clients/search-by-id?identification=${identification}`
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

  public async createLoanRequest(requestData: RequestFormData): Promise<void> {
    try {
      await axiosClient.post<void>("/loan-application", requestData);
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }
  }

  public async approveLoanRequest(
    token: string,
    loanRequestId: string
  ): Promise<ResponseGlobal<{ id: string }>> {
    let response: ResponseGlobal<{ id: string }>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<{ id: string }>>(
        `/loan-application/approve/${loanRequestId}`,
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

  public async rejectLoanRequest(
    token: string,
    loanRequestId: string
  ): Promise<ResponseGlobal<{ id: string }>> {
    let response: ResponseGlobal<{ id: string }>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.delete<ResponseGlobal<{ id: string }>>(
        `/loan-application/reject/${loanRequestId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getAllLoanRequests(
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: LoanRequestFilters,
    filter?: string
  ): Promise<TableResponse<ParsedLoanRequestData>> {
    let response: TableResponse<ParsedLoanRequestData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        paymentCycle: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: loanRequestFilters.requestDate,
      },
    };

    try {
      const { data } = await axiosClient.get<
        TableResponse<ParsedLoanRequestData>
      >("/loan-application", config);
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getLoanRequest(
    token: string,
    requestId: string
  ): Promise<ResponseGlobal<LoanRequestData>> {
    let response: ResponseGlobal<LoanRequestData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<LoanRequestData>>(
        `/loan-application/${requestId}`,
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
