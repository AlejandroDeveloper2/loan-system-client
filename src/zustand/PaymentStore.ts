import { create } from "zustand";
import { toast } from "react-toastify";

import { PaymentStore } from "@models/StoreModels";

import { PaymentsService } from "@services/Payments.service";

import { PaymentsFilters } from "@models/FiltersDataModels";
import {
  PaymentIndicators,
  PaymentStatusType,
  PaymentsData,
  ResponseGlobal,
  TableResponse,
} from "@models/DataModels";

const paymentsService = new PaymentsService();

const usePaymentStore = create<PaymentStore>((set) => ({
  payments: [],
  payment: null,
  paymentIndicators: {
    totalBalance: 0,
    raisedMoney: 0,
    paymentsMade: 0,
    overduePayments: 0,
  },
  pagination: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
  },
  getTodayPayments: async (
    page: number,
    limit: string,
    searchValue: string,
    paymentFilters: PaymentsFilters,
    filter: PaymentStatusType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando pagos...", true);
      const { body: payments, pagination }: TableResponse<PaymentsData> =
        await paymentsService.getTodayPayments(
          token,
          page,
          limit,
          searchValue,
          paymentFilters,
          filter
        );
      set({ payments, pagination });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los pagos!");
    } finally {
      toggleLoading("", false);
    }
  },
  getPayment: async (
    paymentId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando información del pago...", true);
      const { body: payment }: ResponseGlobal<PaymentsData> =
        await paymentsService.getPayment(token, paymentId);
      set({ payment });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener el pago!");
    } finally {
      toggleLoading("", false);
    }
  },
  payLoanQuota: async (
    paymentId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Pagando cuota...", true);
      const { body: updatedPayment }: ResponseGlobal<PaymentsData> =
        await paymentsService.payLoanQuota(token, paymentId);
      set(({ payments }) => ({
        payments: payments.map((payment) => {
          if (payment.id === paymentId) {
            return updatedPayment;
          }
          return payment;
        }),
      }));
      set({ payment: updatedPayment });
      toast.success("¡Cuota pagada exitosamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al pagar la cuota!");
    } finally {
      toggleLoading("", false);
    }
  },
  getPaymentIndicators: async (
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando indicadores...", true);
      const { body: paymentIndicators }: ResponseGlobal<PaymentIndicators> =
        await paymentsService.getPaymentIndicators(token);
      set({ paymentIndicators });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener los indicadores!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default usePaymentStore;
