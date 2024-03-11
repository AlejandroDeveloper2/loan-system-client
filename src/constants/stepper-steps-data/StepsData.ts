import { Step } from "@models/DataModels";

export const steps: Step[] = [
  {
    label: "Datos personales",
    to: "/loanRequest/personalData",
  },
  {
    label: "Información laboral",
    to: "/loanRequest/workData",
  },
  {
    label: "Datos del préstamo",
    to: "/loanRequest/loanData",
  },
  {
    label: "Cuenta bancaria",
    to: "/loanRequest/bankAccountData",
  },
  {
    label: "Referencias personales",
    to: "/loanRequest/personalReferences",
  },
];
