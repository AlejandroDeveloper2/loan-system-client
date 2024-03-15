import { LoanUpdatedData } from "@models/DataModels";
import { ApproveLoanDataForm, WrongInput } from "@models/FormDataModels";

export const getInitialValues = (
  loan: LoanUpdatedData
): ApproveLoanDataForm => ({
  amount: loan.amount > 0 ? loan.amount : 0,
  paymentCycle: loan.paymentCycle ? loan.paymentCycle : "",
  interest: loan.interest > 0 ? loan.interest : 0,
  deadline: loan.deadline > 0 ? loan.deadline : 0,
  firstPaymentDate: loan.firstPaymentDate ? loan.firstPaymentDate : "",
});

export const initialErrors: WrongInput = {
  amount: {
    message: "",
    error: false,
  },
  paymentCycle: {
    message: "",
    error: false,
  },

  interest: {
    message: "",
    error: false,
  },

  deadline: {
    message: "",
    error: false,
  },
  firstPaymentDate: {
    message: "",
    error: false,
  },
};
