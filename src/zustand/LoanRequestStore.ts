import { create } from "zustand";
import { toast } from "react-toastify";

import { LoanRequestService } from "@services/LoanRequest.service";

import { LoanRequestStore } from "@models/StoreModels";
import {
  LoanRequestData,
  ParsedLoanRequestData,
  RequestFormData,
  ResponseGlobal,
  ServerResponse,
  TableResponse,
} from "@models/DataModels";
import { LoanRequestFilters } from "@models/FiltersDataModels";

const loanRequestService = new LoanRequestService();

const useLoanRequestStore = create<LoanRequestStore>((set, get) => ({
  clientExists: false,
  loanRequests: [],
  loanRequest: null,
  paginationData: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
    limit: "",
  },
  validateClient: async (
    identification: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Validando cliente...", true);
      const { body } = await loanRequestService.validateClient(identification);
      set({ clientExists: body });
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading("", false);
    }
  },
  createLoanRequest: async (
    requestData: RequestFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Enviando información...", true);
      await loanRequestService.createLoanRequest(requestData);
      toast.success(
        "¡Solicitud enviada correctamente, espera a ser contactado!"
      );
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      console.log(parsedError.message);
      toast.error("Ha ocurrido un error al enviar la solicituds!");
    } finally {
      toggleLoading("", false);
    }
  },
  approveLoanRequest: async (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      toggleLoading("Aprobando solicitud...", true);
      const { body } = await loanRequestService.approveLoanRequest(
        token,
        loanRequestId
      );
      set(({ loanRequests }) => ({
        loanRequests: loanRequests.filter((request) => request.id !== body.id),
      }));

      await get().getAllLoanRequests(
        get().paginationData.page,
        get().paginationData.limit,
        "",
        {
          requestDate: "",
        },
        toggleLoading,
        ""
      );
      toast.success("¡Solicitud aprobada correctamente!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar aprobar la solicitud!");
    } finally {
      toggleLoading("", false);
    }
  },
  rejectLoanRequest: async (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Rechazando solicitud...", true);
      const { body } = await loanRequestService.rejectLoanRequest(
        token,
        loanRequestId
      );
      set(({ loanRequests }) => ({
        loanRequests: loanRequests.filter((request) => request.id !== body.id),
      }));
      await get().getAllLoanRequests(
        get().paginationData.page,
        get().paginationData.limit,
        "",
        {
          requestDate: "",
        },
        toggleLoading,
        ""
      );
      toast.success("¡Solicitud rechazada!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar rechazar la solicitud!");
    } finally {
      toggleLoading("", false);
    }
  },
  getAllLoanRequests: async (
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: LoanRequestFilters,
    toggleLoading: (message: string, isLoading: boolean) => void,
    filter?: string
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando solicitudes...", true);
      const {
        body: loanRequests,
        pagination,
      }: TableResponse<ParsedLoanRequestData> =
        await loanRequestService.getAllLoanRequests(
          token,
          page,
          limit,
          searchValue,
          loanRequestFilters,
          filter
        );

      set({ loanRequests, paginationData: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar las solicitudes!");
    } finally {
      toggleLoading("", false);
    }
  },
  getLoanRequest: async (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando solicitud...", true);
      const { body: loanRequest }: ResponseGlobal<LoanRequestData> =
        await loanRequestService.getLoanRequest(token, loanRequestId);
      set({ loanRequest });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al obtener la información de la solicitud!"
      );
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useLoanRequestStore;
