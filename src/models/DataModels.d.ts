import {
  ReferredType,
  StepperFormNameType,
  PersonalDataForm,
  WorkDataForm,
  LoanDataForm,
  PaymentType,
  BankAccountDataForm,
} from "./FormDataModels";

type ScreenType = "mobile" | "tablet" | "desktop";
type UserRoleType = "ADMINISTRADOR" | "USER";
type AuthStatusType = "authenticated" | "no authenticated" | "checking";
type VariantType = "warning" | "primary" | "neutral" | "danger" | "light";
type LoanStateType = "Pendiente" | "Aprobado" | "Cancelado" | "Pagado";
type PaymentStatusType = "Pendiente" | "Pagado" | "Mora" | "Cancelado";

interface Step {
  label: string;
  to: string;
}

interface IllustrationData {
  src: string;
  alt: string;
}

interface Client extends PersonalDataForm {
  id: string;
  createdAt?: string;
  workingInformation: WorkDataForm;
  bankAccount: BankAccountDataForm;
}

interface LoanUpdatedData {
  amount: number;
  paymentCycle: PaymentType | string;
  deadline: number;
  interest: number;
  firstPaymentDate: string;
  paymentSchedules: PaymentSchedule[];
  loanState?: LoanStateType;
}

interface ClientLoanData {
  id: string;
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
  client: Client;
  loanState: LoanStateType;
  interest: number;
  earnings: number;
  firstPaymentDate: string;
  paymentSchedules: PaymentSchedule[];
  numberOfPayments: string;
  createdAt?: string;
  /*custom properties*/
  amountInterest: number;
}

interface PaymentSchedule {
  paymentDate: string;
  amount: number;
  quotaNumber: number;
  paymentCycle: PaymentType;
  paymentStatus: string;
}

interface LoanRequestData extends RequestFormData {
  id: string;
  createdAt: string;
}

interface ParsedLoanRequestData {
  id: string;
  createdAt: string;
  fullName: string;
  amount: number;
  state: string;
  paymentCycle: PaymentType;
  paymentStatus: PaymentStatusType;
}

interface FormStepData<T> {
  stepName: string;
  formData: { [x: StepperFormNameType]: T | null };
}

interface ReferencesData {
  reference: ReferredType[];
  interaction: string;
  referred: ReferredType;
}

interface PaginationConfig {
  totalRecords: number;
  firstShownRecord: number;
  lastShownRecord: number;
  next: () => void;
  back: () => void;
}

interface NavItem {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  title: string;
  to: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
}

interface ServerResponse {
  message: string;
  backendMessage: string;
}

interface Auth {
  sub: string;
  state: boolean;
  roles: UserRoleType;
  exp: number;
}

interface ResponseGlobal<T> {
  body: T;
}

interface RequestFormData {
  client: PersonalDataForm;
  workingInformation: WorkDataForm;
  loan: LoanDataForm;
  bankAccount: BankAccountDataForm;
  personalReference: ReferencesData;
}

interface Pagination {
  page: number;
  totalPages: number;
  totalElements: number;
}

interface TableResponse<T> {
  body: T[];
  pagination: Pagination;
}

interface Columnkey {
  key: string;
  fieldType: "text" | "date" | "currency" | "subField";
  subKeys: string[];
  badgeValue: boolean;
}

interface LoanIndicator {
  totalInvestedCapital: number;
  investedCapital: number;
  totalActiveLoans: number;
  activeLoans: number;
  totalLoansPaid: number;
  loansPaid: number;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRoleType;
  state: boolean;
  createdAt: string;
}

interface GeneralIndicators {
  totalClients: number;
  totalRequest: number;
  totalCapitalInvested: number;
  totalActiveLoans: number;
  totalProfits: number;
  totalLoansRepaid: number;
  totalLoansInArrears: number;
}

interface PaymentIndicators {
  totalBalance: number;
  raisedMoney: number;
  paymentsMade: number;
  overduePayments: number;
}

interface PaymentsData {
  id: string;
  paymentDate: string;
  amount: number;
  quotaNumber: number;
  paymentCycle: PaymentType | string;
  paymentStatus: PaymentStatusType | string;
  loan: ClientLoanData;
}

export type {
  ScreenType,
  UserRoleType,
  AuthStatusType,
  VariantType,
  LoanStateType,
  PaymentStatusType,
  Step,
  IllustrationData,
  Client,
  FormStepData,
  ClientLoanData,
  ReferencesData,
  ParsedLoanRequestData,
  LoanRequestData,
  PaginationConfig,
  NavItem,
  LoginResponse,
  ServerResponse,
  Auth,
  ResponseGlobal,
  RequestFormData,
  Pagination,
  TableResponse,
  Columnkey,
  PaymentSchedule,
  LoanUpdatedData,
  LoanIndicator,
  User,
  GeneralIndicators,
  PaymentIndicators,
  PaymentsData,
};
