import {
  Auth,
  AuthStatusType,
  Client,
  RequestFormData,
  ParsedLoanRequestData,
  ClientLoanData,
  LoanRequestData,
  LoanUpdatedData,
  LoanIndicator,
  User,
  Pagination,
  GeneralIndicators,
  PaymentsData,
  PaymentIndicators,
} from "./DataModels";
import {
  LoginFormData,
  RecoverPassFormData,
  ChangePasswordFormData,
  UpdateClientDataForm,
  CreateLoanDataForm,
  ApproveLoanDataForm,
  ChangePassDataForm,
  ProfileDataForm,
} from "./FormDataModels";

import {
  ClientsFilters,
  LoanRequestFilters,
  LoanFilters,
} from "./FiltersDataModels";

interface AuthStore {
  auth: Auth | null;
  authStatus: AuthStatusType;
  login: (
    userCredencials: LoginFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  logout: () => void;
  recoverPassword: (
    userEmail: RecoverPassFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  changePassword: (
    newUserPassword: ChangePasswordFormData,
    token: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  verifyAuthenticatedUser: () => Promise<void>;
}

interface LoanRequestStore {
  clientExists: boolean;
  loanRequests: ParsedLoanRequestData[];
  loanRequest: LoanRequestData | null;
  paginationData: Pagination;
  validateClient: (
    identification: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  createLoanRequest: (
    requestData: RequestFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  approveLoanRequest: (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  rejectLoanRequest: (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getAllLoanRequests: (
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: LoanRequestFilters,
    toggleLoading: (message: string, isLoading: boolean) => void,
    filter?: string
  ) => Promise<void>;
  getLoanRequest: (
    loanRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface ClientStore {
  clients: Client[];
  client: Client | null;
  paginationData: Pagination;
  getAllClients: (
    limit: string,
    page: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getClient: (
    clientId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateClient: (
    clientId: string,
    updatedClientData: UpdateClientDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface LoansStore {
  loans: ClientLoanData[];
  loan: LoanUpdatedData;
  loanIndicators: LoanIndicator;
  paginationData: Pagination;
  getAllLoans: (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  createLoan: (
    loanData: CreateLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  generatePaymentSchedule: (
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  approveLoan: (
    loanId: string,
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getLoanIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  cancelLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  deleteLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getLoanTicket: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface UserStore {
  user: User | null;
  getUser: (
    userId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateUser: (
    userId: string,
    userData: ProfileDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateUserPassword: (
    userData: ChangePassDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface IndicatorsStore {
  generalIndicators: GeneralIndicators;
  getGeneralIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}
interface PaymentStore {
  payments: PaymentsData[];
  payment: PaymentsData | null;
  paymentIndicators: PaymentIndicators;
  pagination: Pagination;
  getTodayPayments: (
    page: number,
    limit: string,
    searchValue: string,
    paymentFilters: PaymentsFilters,
    filter: PaymentStatusType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getPayment: (
    paymentId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  payLoanQuota: (
    paymentId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getPaymentIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

export type {
  AuthStore,
  LoanRequestStore,
  ClientStore,
  LoansStore,
  UserStore,
  IndicatorsStore,
  PaymentStore,
};
