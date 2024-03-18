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
  loading: false,
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
  getAllLoans: async (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      set({ loading: true });
      const { body: loans }: TableResponse<ClientLoanData> =
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

      set({ loans: updatedLoans });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los préstamos!");
    } finally {
      set({ loading: false });
    }
  },
  getLoan: async (loanId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      // set({ loading: true });
      const { body: loan }: ResponseGlobal<LoanUpdatedData> =
        await loansService.getLoan(token, loanId);
      set({ loan });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener el préstamo!");
    }
    // } finally {
    //   set({ loading: false });
    // }
  },
  createLoan: async (loanData: CreateLoanDataForm): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
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

      set(({ loans }) => ({ loans: [...loans, loan] }));

      toast.success("¡El préstamo se ha creado exitosamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al crear el préstamo!");
    } finally {
      set({ loading: false });
    }
  },
  generatePaymentSchedule: async (
    loanData: ApproveLoanDataForm
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: paymentSchedules }: TableResponse<PaymentSchedule> =
        await loansService.generatePaymentSchedule(token, loanData);
      set(({ loan }) => ({ loan: { ...loan, paymentSchedules } }));
      toast.success("¡Calendario de pagos generado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al generar calendario de pagos!");
    } finally {
      set({ loading: false });
    }
  },

  approveLoan: async (
    loanId: string,
    loanData: ApproveLoanDataForm
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: updatedLoan }: ResponseGlobal<ClientLoanData> =
        await loansService.approveLoan(token, loanId, loanData);
      set({ loan: updatedLoan });
      set(({ loans }) => ({
        loans: loans.map((loan) => {
          if (loan.id === loanId) return updatedLoan;
          return loan;
        }),
      }));
      toast.success("¡Préstamo aprobado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al aprobar el préstamo!");
    } finally {
      set({ loading: false });
    }
  },

  getLoanIndicators: async (): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: loanIndicators }: ResponseGlobal<LoanIndicator> =
        await loansService.getLoanIndicators(token);
      set({ loanIndicators });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cargar indicadores!");
    } finally {
      set({ loading: false });
    }
  },

  cancelLoan: async (loanId: string): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      set({ loading: true });
      const { body: updatedLoan }: ResponseGlobal<ClientLoanData> =
        await loansService.cancelLoan(token, loanId);
      set(({ loans }) => ({
        loans: loans.map((loan) => {
          if (loan.id === loanId) {
            return updatedLoan;
          }
          return loan;
        }),
      }));
      toast.success("¡Préstamo cancelado!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cancelar el préstamo!");
    } finally {
      set({ loading: false });
    }
  },
}));
export default useLoansStore;
