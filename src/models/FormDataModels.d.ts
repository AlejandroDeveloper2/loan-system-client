type PaymentType = "Semanal" | "Mensual" | "Quincenal";

type StepperFormNameType =
  | "client"
  | "workingInformation"
  | "loan"
  | "bankAccount"
  | "personalReference";

type FieldErrorType = {
  message: string;
  error: boolean;
};

type ReferredType = {
  name: string;
  phone: string;
};

interface WrongInput {
  [x: string]: FieldErrorType;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface RecoverPassFormData {
  email: string;
}

interface ChangePasswordFormData {
  password: string;
  confirmPassword: string;
}

interface PersonalDataForm {
  email: string;
  fullName: string;
  typeOfIdentification: string;
  identification: string;
  phone: string;
  civilStatus: string;
  profession: string;
  address: string;
  houseNumber: string;
  sector: string;
  typeOfResidence: string;
}

interface WorkDataForm {
  companyName: string;
  phone: string;
  address: string;
  timeWorking: number;
  position: string;
  bossName: string;
  bossPhone: string;
  salary: number;
  paymentOfPayroll: PaymentType;
  otherIncome: number;
  description: string;
}

interface LoanDataForm {
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
  description: string;
}

interface BankAccountDataForm {
  accountType: string;
  bank: string;
  name: string;
  bankingApplication: boolean | string;
  transfers: boolean | string;
  accountNumber: string;
}

interface ReferencesDataForm {
  firstRelativeNames: string;
  firstRelativePhone: string;
  secondRelativeNames: string;
  secondRelativePhone: string;
  firstFriendNames: string;
  firstFriendPhone: string;
  secondFriendNames: string;
  secondFriendPhone: string;
  interaction: string;
  referredName: string;
  referredPhone: string;
}

interface CreateLoanDataForm {
  amount: number;
  paymentMethod: PaymentType;
  interest: number;
  deadline: number;
  firstPaymentDate: string;
}

export type {
  PaymentType,
  StepperFormNameType,
  FieldErrorType,
  ReferredType,
  WrongInput,
  LoginFormData,
  RecoverPassFormData,
  ChangePasswordFormData,
  PersonalDataForm,
  WorkDataForm,
  LoanDataForm,
  BankAccountDataForm,
  ReferencesDataForm,
  CreateLoanDataForm,
};
