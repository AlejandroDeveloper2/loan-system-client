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
    filter: string
  ) => Promise<void>;
  getClient: (clientId: string) => Promise<void>;
  updateClient: (
    clientId: string,
    updatedClientData: UpdateClientDataForm
  ) => Promise<void>;
}

interface LoansStore {
  loading: boolean;
  loans: ClientLoanData[];
  loan: LoanUpdatedData;
  loanIndicators: LoanIndicator;
  getAllLoans: (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string
  ) => Promise<void>;
  getLoan: (loanId: string) => Promise<void>;
  createLoan: (loanData: CreateLoanDataForm) => Promise<void>;
  generatePaymentSchedule: (loanData: ApproveLoanDataForm) => Promise<void>;
  approveLoan: (loanId: string, loanData: ApproveLoanDataForm) => Promise<void>;
  getLoanIndicators: () => Promise<void>;
}

interface UserStore {
  user: User | null;
  loading: boolean;
  getUser: (userId: string) => Promise<void>;
  updateUser: (userId: string, userData: ProfileDataForm) => Promise<void>;
  updateUserPassword: (
    userId: string,
    userData: ChangePassDataForm
  ) => Promise<void>;
}

export type { AuthStore, LoanRequestStore, ClientStore, LoansStore, UserStore };
