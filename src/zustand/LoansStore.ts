import { create } from "zustand";
import { toast } from "react-toastify";

import { LoansStore } from "@models/StoreModels";
import { LoanFilters } from "@models/FiltersDataModels";
import {
  ClientLoanData,
  LoanIndicator,
  LoanUpdatedData,
  PaymentSchedule,
  ResponseGlobal,
  TableResponse,
} from "@models/DataModels";
import {
  ApproveLoanDataForm,
  CreateLoanDataForm,
  CreateLoanFinalDataForm,
} from "@models/FormDataModels";

import { LoansService } from "@services/Loans.service";
import { ClientsService } from "@services/Clients.service";

import { initialLoan } from "@constants/store-initial-values/LoanStoreInitialValues";

const loansService = new LoansService();
const clientsService = new ClientsService();

const useLoansStore = create<LoansStore>((set) => ({
  loans: [],
  loan: initialLoan,
  loanIndicators: {
    totalInvestedCapital: 0,
    investedCapital: 0,
    totalActiveLoans: 0,
    activeLoans: 0,
    totalLoansPaid: 0,
    loansPaid: 0,
  },
  paginationData: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
  },
  getAllLoans: async (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      toggleLoading("Cargando préstamos...", true);
      const { body: loans, pagination }: TableResponse<ClientLoanData> =
        await loansService.getAllLoans(
          token,
          page,
          limit,
          searchValue,
          loanFilters,
          filter
        );
      const updatedLoans: ClientLoanData[] = loans.map((loan) => {
        return {
          ...loan,
          numberOfPayments: `${loan.numberOfPayments}/${loan.deadline}`,
          amountInterest: loan.amount + loan.earnings,
        };
      });

      set({ loans: updatedLoans, paginationData: pagination });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los préstamos!");
    } finally {
      toggleLoading("", false);
    }
  },
  getLoan: async (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando préstamo...", true);
      const { body: loan }: ResponseGlobal<LoanUpdatedData> =
        await loansService.getLoan(token, loanId);
      set({ loan });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  createLoan: async (
    loanData: CreateLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Creando préstamo...", true);
      const { body: client } = await clientsService.getClient(
        token,
        loanData.client
      );

      const updatedLoanData: CreateLoanFinalDataForm = {
        client,
        amount: loanData.amount,
        paymentCycle: loanData.paymentCycle,
        deadline: loanData.deadline,
      };

      const { body: loan }: ResponseGlobal<ClientLoanData> =
        await loansService.createLoan(token, updatedLoanData);

      set(({ loans }) => ({
        loans: [
          ...loans,
          {
            ...loan,
            numberOfPayments: `${loan.numberOfPayments}/${loan.deadline}`,
            amountInterest: loan.amount + loan.earnings,
          },
        ],
      }));

      toast.success("¡El préstamo se ha creado exitosamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al crear el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  generatePaymentSchedule: async (
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Generando calendario de pagos...", true);
      const { body: paymentSchedules }: TableResponse<PaymentSchedule> =
        await loansService.generatePaymentSchedule(token, loanData);
      set(({ loan }) => ({
        loan: {
          ...loan,
          amount: loanData.amount,
          firstPaymentDate: loanData.firstPaymentDate,
          interest: loanData.interest,
          paymentCycle: loanData.paymentCycle,
          paymentSchedules,
        },
      }));
      toast.success("¡Calendario de pagos generado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al generar calendario de pagos!");
    } finally {
      toggleLoading("", false);
    }
  },

  approveLoan: async (
    loanId: string,
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Aprobando préstamo..", true);
      const { body: updatedLoan }: ResponseGlobal<ClientLoanData> =
        await loansService.approveLoan(token, loanId, loanData);
      set({ loan: updatedLoan });
      set(({ loans }) => ({
        loans: loans.map((loan) => {
          if (loan.id === loanId)
            return {
              ...updatedLoan,
              numberOfPayments: `${loan.numberOfPayments}/${loan.deadline}`,
              amountInterest: loan.amount + loan.earnings,
            };
          return loan;
        }),
      }));
      toast.success("¡Préstamo aprobado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al aprobar el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },

  getLoanIndicators: async (
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Obteniendo indicador...", true);
      const { body: loanIndicators }: ResponseGlobal<LoanIndicator> =
        await loansService.getLoanIndicators(token);
      set({ loanIndicators });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cargar indicadores!");
    } finally {
      toggleLoading("", false);
    }
  },

  cancelLoan: async (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cancelando préstamo...", true);
      const { body: updatedLoan }: ResponseGlobal<ClientLoanData> =
        await loansService.cancelLoan(token, loanId);
      set(({ loans }) => ({
        loans: loans.map((loan) => {
          if (loan.id === loanId) {
            return {
              ...updatedLoan,
              numberOfPayments: `${loan.numberOfPayments}/${loan.deadline}`,
              amountInterest: loan.amount + loan.earnings,
            };
          }
          return loan;
        }),
      }));
      toast.success("¡Préstamo cancelado!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cancelar el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
}));
export default useLoansStore;
