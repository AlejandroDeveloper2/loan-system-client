import { NavigateFunction } from "react-router-dom";
import { Edit, Eye } from "iconoir-react";

import { optionsData as clientOptionsData } from "@constants/tables-data/ClientTableData";
import { optionsData as requestOptionsData } from "@constants/tables-data/LoanRequestTableData";
import { optionsData as loanOptionsData } from "@constants/tables-data/LoansTableData";
import { optionsData as paymentOptionsData } from "@constants/tables-data/PaymentTableData";
import { optionsData as quotaOptionsData } from "@constants/tables-data/QuotaToPayTableData";

import { IconOnlyButtonProps } from "@models/ComponentModels";
import {
  Auth,
  Client,
  ClientLoanData,
  ParsedLoanRequestData,
  PaymentsData,
  UserRoleType,
} from "@models/DataModels";

export const getClientTableOptions = (
  client: Client,
  navigate: NavigateFunction
): IconOnlyButtonProps[] => {
  return clientOptionsData.map((option) => {
    if (option.id === "btn-edit")
      return {
        ...option,
        onClick: () => {
          navigate(`/userPanel/clients/${client.id}`);
        },
      };
    return option;
  });
};

export const getLoanRequestTableOptions = (
  request: ParsedLoanRequestData,
  navigate: NavigateFunction,
  auth: Auth | null,
  toggleDialog: () => void,
  updateElementId: (id: string) => void,
  toggleRejectDialog: () => void,
  updateRejectElementId: (id: string) => void
): IconOnlyButtonProps[] => {
  const userRole: UserRoleType = auth ? auth.roles : "ADMINISTRADOR";

  return requestOptionsData.map((option) => {
    if (option.id === "btn-view")
      return {
        ...option,
        onClick: () => navigate(`/userPanel/loanRequests/${request.id}`),
      };
    if (option.id === "btn-approve")
      return {
        ...option,
        disabled: request.state === "Aprobado" ? true : undefined,
        onClick: () => {
          toggleDialog();
          updateElementId(request.id);
        },
      };
    return {
      ...option,
      disabled:
        request.state === "Rechazado"
          ? true
          : userRole === "ADMINISTRADOR"
          ? undefined
          : true,
      onClick: () => {
        toggleRejectDialog();
        updateRejectElementId(request.id);
      },
    };
  });
};

export const getLoanTableOptions = (
  loan: ClientLoanData,
  navigate: NavigateFunction,
  auth: Auth | null,
  toggleDialog: () => void,
  updateElementId: (id: string) => void,
  toggleDialogDelete: () => void,
  updateLoanId: (id: string) => void
): IconOnlyButtonProps[] => {
  const userRole: UserRoleType = auth ? auth.roles : "ADMINISTRADOR";
  return loanOptionsData.map((option) => {
    if (option.id === "btn-edit-loan")
      return {
        ...option,
        Icon: loan.loanState !== "Pendiente" ? Eye : Edit,
        variant: loan.loanState !== "Pendiente" ? "primary" : "warning",
        title:
          loan.loanState !== "Pendiente"
            ? "Ver detalle del préstamo"
            : "Editar préstamo",
        onClick: () => navigate(`/userPanel/loans/${loan.id}`),
      };
    if (option.id === "btn-delete-loan")
      return {
        ...option,
        disabled:
          loan.loanState === "Cancelado"
            ? userRole === "ADMINISTRADOR"
              ? undefined
              : true
            : true,
        onClick: () => {
          toggleDialogDelete();
          updateLoanId(loan.id);
        },
      };
    return {
      ...option,
      disabled:
        loan.loanState !== "Pendiente"
          ? true
          : userRole === "ADMINISTRADOR"
          ? undefined
          : true,
      onClick: () => {
        toggleDialog();
        updateElementId(loan.id);
      },
    };
  });
};

export const getPaymentTableOptions = (
  payment: PaymentsData,
  navigate: NavigateFunction
): IconOnlyButtonProps[] => {
  return paymentOptionsData.map((option) => {
    return {
      ...option,
      onClick: () => {
        navigate(`/userPanel/payments/${payment.id}`);
      },
    };
  });
};

export const getQuotaTableOptions = (
  payment: PaymentsData,
  toggleLoadingTicket: (message: string, isLoading: boolean) => void,
  toggleLoading: (message: string, isLoading: boolean) => void,
  getLoanTicket: (
    loanId: string,
    toggleLoadingTicket: (message: string, isLoading: boolean) => void
  ) => void,
  payLoanQuota: (
    paymentId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => void
): IconOnlyButtonProps[] => {
  return quotaOptionsData.map((option) => {
    if (option.id === "btn-download-ticket")
      return {
        ...option,
        disabled: payment.paymentStatus === "Pagado" ? undefined : true,
        onClick: () => {
          getLoanTicket(payment.loan.id, toggleLoadingTicket);
        },
      };
    return {
      ...option,
      disabled: payment.paymentStatus === "Pagado" ? true : undefined,
      onClick: () => {
        payLoanQuota(payment.id, toggleLoading);
      },
    };
  });
};
