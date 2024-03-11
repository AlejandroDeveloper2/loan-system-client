import { create } from "zustand";
import { toast } from "react-toastify";

import { LoanRequestService } from "@services/LoanRequest.service";

import { LoanRequestStore } from "@models/StoreModels";
import {
  LoanRequestData,
  //LoanRequestData,
  ParsedLoanRequestData,
  RequestFormData,
  ResponseGlobal,
  ServerResponse,
  TableResponse,
} from "@models/DataModels";
import { LoanRequestFilters } from "@models/FiltersDataModels";

const loanRequestService = new LoanRequestService();

const useLoanRequestStore = create<LoanRequestStore>((set) => ({
  loading: false,
  clientExists: false,
  loanRequests: [],
  loanRequest: null,
  validateClient: async (identification: string): Promise<void> => {
    try {
      set({ loading: true });
      const { body } = await loanRequestService.validateClient(identification);
      set({ clientExists: body });
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      set({ loading: false });
    }
  },
  createLoanRequest: async (requestData: RequestFormData): Promise<void> => {
    try {
      set({ loading: true });
      await loanRequestService.createLoanRequest(requestData);
      toast.success(
        "¡Solicitud enviada correctamente, espera a ser contactado!"
      );
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      console.log(parsedError.message);
      toast.error("Ha ocurrido un error al enviar la solicituds!");
    } finally {
      set({ loading: false });
    }
  },
  approveLoanRequest: async (loanRequestId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    console.log(loanRequestId);
    try {
      set({ loading: true });
      await loanRequestService.approveLoanRequest(token, loanRequestId);
      set(({ loanRequests }) => ({
        loanRequests: loanRequests.filter(
          (request) => request.id !== loanRequestId
        ),
      }));
      toast.success("¡Solicitud aprobada correctamente!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar aprobar la solicitud!");
    } finally {
      set({ loading: false });
    }
  },
  rejectLoanRequest: async (loanRequestId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      await loanRequestService.rejectLoanRequest(token, loanRequestId);
      set(({ loanRequests }) => ({
        loanRequests: loanRequests.filter(
          (request) => request.id !== loanRequestId
        ),
      }));
      toast.success("¡Solicitud rechazada!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar rechazar la solicitud!");
    } finally {
      set({ loading: false });
    }
  },
  getAllLoanRequests: async (
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: LoanRequestFilters,
    filter?: string
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: loanRequests }: TableResponse<ParsedLoanRequestData> =
        await loanRequestService.getAllLoanRequests(
          token,
          page,
          limit,
          searchValue,
          loanRequestFilters,
          filter
        );

      set({ loanRequests });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar las solicitudes!");
    } finally {
      set({ loading: false });
    }
  },
  getLoanRequest: async (loanRequestId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: loanRequest }: ResponseGlobal<LoanRequestData> =
        await loanRequestService.getLoanRequest(token, loanRequestId);
      set({ loanRequest });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al obtener la información de la solicitud!"
      );
    } finally {
      set({ loading: false });
    }
  },
}));

export default useLoanRequestStore;
