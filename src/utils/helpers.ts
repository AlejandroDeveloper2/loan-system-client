import { toast } from "react-toastify";
import currency from "currency.js";

import {
  Client,
  IllustrationData,
  ReferencesData,
  VariantType,
} from "@models/DataModels";
import {
  PaymentType,
  ReferencesDataForm,
  UpdateClientDataForm,
} from "@models/FormDataModels";

import {
  IllustrationChangePass,
  IllustrationLogin,
  IllustrationRecoverPass,
} from "@assets/index";

export const loadIllustration = (path: string): IllustrationData | null => {
  const illustrationData =
    path === "/"
      ? { src: IllustrationLogin, alt: "Ilustración login" }
      : path === "/recoverPassword"
      ? {
          src: IllustrationRecoverPass,
          alt: "Ilustración recuperar contraseña",
        }
      : path === "/changePassword"
      ? { src: IllustrationChangePass, alt: "Ilustración cambiar contraseña" }
      : null;
  return illustrationData;
};

export const parseReferenceDate = (
  refrenceData: ReferencesDataForm
): ReferencesData => {
  return {
    reference: [
      {
        name: refrenceData.firstRelativeNames,
        phone: refrenceData.firstRelativePhone,
      },
      {
        name: refrenceData.secondRelativeNames,
        phone: refrenceData.secondRelativePhone,
      },
      {
        name: refrenceData.firstFriendNames,
        phone: refrenceData.firstFriendPhone,
      },
      {
        name: refrenceData.secondFriendNames,
        phone: refrenceData.secondFriendPhone,
      },
    ],
    interaction: refrenceData.interaction,
    referred: {
      name: refrenceData.referredName,
      phone: refrenceData.referredPhone,
    },
  };
};

export const setActiveNavItem = (pathName: string, itemTo: string): string => {
  if (pathName === itemTo) return "linkActive";
  return "link";
};

export const copyToClipboard = (
  textToCopy: string,
  successMessage: string
): void => {
  window.navigator.clipboard.writeText(textToCopy);
  toast.success(successMessage);
};

export const formatDate = (
  date: string,
  format: "numeric" | "mixted" = "mixted"
): string => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const numericDate = new Date(date).toLocaleDateString();

  if (format === "mixted") return formattedDate;
  return numericDate;
};

export const formatMoney = (moneyValue: number): string => {
  const formattedValue = currency(moneyValue, {
    symbol: "$",
    pattern: "! #",
    separator: ".",
    decimal: ",",
  });
  return formattedValue.format();
};

export const parseUpdatedClientInfo = (
  clientId: string,
  updatedClientData: UpdateClientDataForm
): Client => {
  const parsedClientData: Client = {
    id: clientId,
    email: updatedClientData.email,
    fullName: updatedClientData.fullName,
    typeOfIdentification: updatedClientData.typeOfIdentification,
    identification: updatedClientData.identification,
    phone: updatedClientData.phone,
    civilStatus: updatedClientData.civilStatus,
    profession: updatedClientData.profession,
    address: updatedClientData.address,
    houseNumber: updatedClientData.houseNumber,
    sector: updatedClientData.sector,
    typeOfResidence: updatedClientData.typeOfResidence,
    workingInformation: {
      companyName: updatedClientData.companyName,
      phone: updatedClientData.companyPhone,
      address: updatedClientData.companyAddress,
      timeWorking: updatedClientData.timeWorking,
      position: updatedClientData.position,
      bossName: updatedClientData.bossName,
      bossPhone: updatedClientData.bossPhone,
      salary: updatedClientData.salary,
      paymentOfPayroll: updatedClientData.paymentOfPayroll,
      otherIncome: updatedClientData.otherIncome,
      description: updatedClientData.description,
    },
    bankAccount: {
      accountType: updatedClientData.accountType,
      bank: updatedClientData.bank,
      name: updatedClientData.name,
      bankingApplication: updatedClientData.bankingApplication,
      transfers: updatedClientData.transfers,
      accountNumber: updatedClientData.accountNumber,
    },
  };
  return parsedClientData;
};

const getPaymentCycleBadgeMark = (
  paymentCycle: PaymentType | string
): VariantType => {
  const badgeVariant: VariantType =
    paymentCycle === "Mensual"
      ? "primary"
      : paymentCycle === "Quincenal"
      ? "neutral"
      : "light";
  return badgeVariant;
};

export const getBadgeVariant = (
  fieldKey: string,
  fieldValue: string
): VariantType => {
  if (fieldKey === "paymentCycle") {
    return getPaymentCycleBadgeMark(fieldValue);
  }
  return "light";
};
