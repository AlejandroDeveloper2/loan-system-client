import { LoanUpdatedData } from "@models/DataModels";

export const initialLoan: LoanUpdatedData = {
  amount: 0,
  paymentCycle: "Semanal",
  deadline: 0,
  interest: 0,
  firstPaymentDate: "",
  paymentSchedules: [],
};
