import {
  Auth,
  AuthStatusType,
  Client,
  RequestFormData,
  ParsedLoanRequestData,
  ClientLoanData,
  LoanRequestData,
} from "./DataModels";
import {
  LoginFormData,
  RecoverPassFormData,
  ChangePasswordFormData,
  CreateLoanDataForm,
} from "./FormDataModels";

import { ClientsFilters, LoanRequestFilters } from "./FiltersDataModels";

interface AuthStore {
  loading: boolean;
  auth: Auth | null;
  authStatus: AuthStatusType;
  login: (userCredencials: LoginFormData) => Promise<void>;
  logout: () => void;
  recoverPassword: (userEmail: RecoverPassFormData) => Promise<void>;
  changePassword: (
    newUserPassword: ChangePasswordFormData,
    token: string
  ) => Promise<void>;
  verifyAuthenticatedUser: () => void;
}

interface LoanRequestStore {
  loading: boolean;
  clientExists: boolean;
  loanRequests: ParsedLoanRequestData[];
  loanRequest: LoanRequestData | null;
  validateClient: (identification: string) => Promise<void>;
  createLoanRequest: (requestData: RequestFormData) => Promise<void>;
  approveLoanRequest: (loanRequestId: string) => Promise<void>;
  rejectLoanRequest: (loanRequestId: string) => Promise<void>;
  getAllLoanRequests: (
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: LoanRequestFilters,
    filter?: string
  ) => Promise<void>;
  getLoanRequest: (loanRequestId: string) => Promise<void>;
}

interface ClientStore {
  loading: boolean;
  clients: Client[];
  client: Client | null;
  getAllClients: (
    limit: string,
    page: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter?: string
  ) => Promise<void>;
  getClient: (clientId: string) => Promise<void>;
  updateClient: <T>(clientId: string, updatedClientData: T) => Promise<void>;
}

interface LoansStore {
  loading: boolean;
  loans: ClientLoanData[];
  getAllLoans: (
    limit: string,
    page: string,
    searchValue: string,
    loanFilters: ClientsFilters,
    filter?: string
  ) => Promise<void>;
  generatePaymentSchedule: (loanInfo: CreateLoanDataForm) => Promise<void>;
  // createLoan: (loanData: string) => Promise<void>;
}

export type { AuthStore, LoanRequestStore, ClientStore, LoansStore };
