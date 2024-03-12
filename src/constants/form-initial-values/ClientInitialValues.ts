import { Client } from "@models/DataModels";
import { UpdateClientDataForm, WrongInput } from "@models/FormDataModels";

export const getInitialValues = (
  client: Client | null
): UpdateClientDataForm => ({
  email: client ? client.email : "",
  fullName: client ? client.fullName : "",
  typeOfIdentification: client ? client.typeOfIdentification : "",
  identification: client ? client.identification : "",
  phone: client ? client.phone : "",
  civilStatus: client ? client.civilStatus : "",
  profession: client ? client.profession : "",
  address: client ? client.address : "",
  houseNumber: client ? client.houseNumber : "",
  sector: client ? client.sector : "",
  typeOfResidence: client ? client.typeOfResidence : "",

  companyName: client ? client.workingInformation["companyName"] : "",
  companyPhone: client ? client.workingInformation["phone"] : "",
  companyAddress: client ? client.workingInformation["address"] : "",
  timeWorking: client ? client.workingInformation["timeWorking"] : 0,
  position: client ? client.workingInformation["position"] : "",
  bossName: client ? client.workingInformation["bossName"] : "",
  bossPhone: client ? client.workingInformation["bossPhone"] : "",
  salary: client ? client.workingInformation["salary"] : 0,
  paymentOfPayroll: client
    ? client.workingInformation["paymentOfPayroll"]
    : "Mensual",
  otherIncome: client ? client.workingInformation["otherIncome"] : 0,
  description: client ? client.workingInformation["description"] : "",

  accountType: client ? client.bankAccount.accountType : "",
  bank: client ? client.bankAccount.bank : "",
  name: client ? client.bankAccount.name : "",
  bankingApplication: client ? client.bankAccount.bankingApplication : false,
  transfers: client ? client.bankAccount.transfers : false,
  accountNumber: client ? client.bankAccount.accountNumber : "",
});

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },
  fullName: {
    message: "",
    error: false,
  },
  typeOfIdentification: {
    message: "",
    error: false,
  },
  identification: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  civilStatus: {
    message: "",
    error: false,
  },
  profession: {
    message: "",
    error: false,
  },
  address: {
    message: "",
    error: false,
  },
  houseNumber: {
    message: "",
    error: false,
  },
  sector: {
    message: "",
    error: false,
  },
  typeOfResidence: {
    message: "",
    error: false,
  },
  companyName: {
    message: "",
    error: false,
  },
  companyPhone: {
    message: "",
    error: false,
  },
  companyAddress: {
    message: "",
    error: false,
  },
  timeWorking: {
    message: "",
    error: false,
  },
  position: {
    message: "",
    error: false,
  },
  bossName: {
    message: "",
    error: false,
  },
  bossPhone: {
    message: "",
    error: false,
  },
  salary: {
    message: "",
    error: false,
  },
  paymentOfPayroll: {
    message: "",
    error: false,
  },
  otherIncome: {
    message: "",
    error: false,
  },
  description: {
    message: "",
    error: false,
  },
  accountType: {
    message: "",
    error: false,
  },

  bank: {
    message: "",
    error: false,
  },
  name: {
    message: "",
    error: false,
  },
  bankingApplication: {
    message: "",
    error: false,
  },
  transfers: {
    message: "",
    error: false,
  },
  accountNumber: {
    message: "",
    error: false,
  },
};
