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
  workingInformation: WorkDataForm;
  bankAccount: BankAccountDataForm;
}

interface ClientWorkData extends WorkDataForm {
  id: string;
}

interface ClientLoanData extends LoanDataForm {
  id: string;
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
  fieldType: "text" | "date" | "currency";
  badgeValue: boolean;
}

export type {
  ScreenType,
  UserRoleType,
  AuthStatusType,
  Step,
  IllustrationData,
  Client,
  ClientWorkData,
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
};
