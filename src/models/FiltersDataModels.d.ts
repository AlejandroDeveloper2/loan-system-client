import { PaymentType } from "./FormDataModels";

interface ClientsFilters {
  initialDate: string;
  finalDate: string;
}

interface LoanRequestFilters {
  requestDate: string;
}

interface LoanFilters {
  loanDate: string;
  paymentCycle: PaymentType | string;
}

interface PaymentsFilters {
  startDate: string;
  paymentCycle: PaymentType | string;
}

export type {
  ClientsFilters,
  LoanRequestFilters,
  LoanFilters,
  PaymentsFilters,
};
