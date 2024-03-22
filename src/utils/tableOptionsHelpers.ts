import { NavigateFunction } from "react-router-dom";
import { Edit, Eye } from "iconoir-react";

import { optionsData as clientOptionsData } from "@constants/tables-data/ClientTableData";
import { optionsData as requestOptionsData } from "@constants/tables-data/LoanRequestTableData";
import { optionsData as loanOptionsData } from "@constants/tables-data/LoansTableData";
import { optionsData as paymentOptionsData } from "@constants/tables-data/PaymentTableData";
import { optionsData as quotaOptionsData } from "@constants/tables-data/QuotaToPayTableData";

import { IconOnlyButtonProps } from "@models/ComponentModels";
import {
  Client,
  ClientLoanData,
  ParsedLoanRequestData,
  PaymentsData,
} from "@models/DataModels";

export const getClientTableOptions = (
  clients: Client[],
  navigate: NavigateFunction
): IconOnlyButtonProps[] => {
  let options: IconOnlyButtonProps[] = clientOptionsData;

  clients.forEach((client) => {
    options = clientOptionsData.map((option) => {
      if (option.id === "btn-edit")
        return {
          ...option,
          onClick: () => {
            navigate(`/userPanel/clients/${client.id}`);
          },
        };
      return option;
    });
  });
  return options;
};

export const getLoanRequestTableOptions = (
  requests: ParsedLoanRequestData[],
  navigate: NavigateFunction,
  toggleDialog: () => void,
  updateElementId: (id: string) => void,
  toggleRejectDialog: () => void,
  updateRejectElementId: (id: string) => void
): IconOnlyButtonProps[] => {
  let options: IconOnlyButtonProps[] = requestOptionsData;

  requests.forEach((request) => {
    options = requestOptionsData.map((option) => {
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
        disabled: request.state === "Rechazado" ? true : undefined,
        onClick: () => {
          toggleRejectDialog();
          updateRejectElementId(request.id);
        },
      };
    });
  });

  return options;
};

export const getLoanTableOptions = (
  loans: ClientLoanData[],
  navigate: NavigateFunction,
  toggleDialog: () => void,
  updateElementId: (id: string) => void,
  toggleDialogDelete: () => void,
  updateLoanId: (id: string) => void
): IconOnlyButtonProps[] => {
  let options: IconOnlyButtonProps[] = loanOptionsData;

  loans.forEach((loan) => {
    options = loanOptionsData.map((option) => {
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
          disabled: loan.loanState === "Cancelado" ? undefined : true,
          onClick: () => {
            toggleDialogDelete();
            updateLoanId(loan.id);
          },
        };
      return {
        ...option,
        disabled: loan.loanState !== "Pendiente" ? true : undefined,
        onClick: () => {
          toggleDialog();
          updateElementId(loan.id);
        },
      };
    });
  });
  return options;
};

export const getPaymentTableOptions = (
  payments: PaymentsData[],
  navigate: NavigateFunction
): IconOnlyButtonProps[] => {
  let options: IconOnlyButtonProps[] = paymentOptionsData;

  payments.forEach((payment) => {
    options = paymentOptionsData.map((option) => {
      return {
        ...option,
        onClick: () => {
          navigate(`/userPanel/payments/${payment.id}`);
        },
      };
    });
  });
  return options;
};

export const getQuotaTableOptions = (
  payments: PaymentsData[],
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
  let options: IconOnlyButtonProps[] = quotaOptionsData;

  payments.forEach((payment) => {
    options = quotaOptionsData.map((option) => {
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
  });

  return options;
};
