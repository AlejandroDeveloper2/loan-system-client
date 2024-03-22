import { PaymentsData } from "@models/DataModels";
import { IconOnlyButtonProps, QuotaInfoProps } from "@models/ComponentModels";
import {
  columnKeys,
  headers,
  optionsData,
} from "@constants/tables-data/QuotaToPayTableData";

import usePaymentStore from "@zustand/PaymentStore";
import useLoansStore from "@zustand/LoansStore";
import { useLoading } from "@hooks/index";

import { Tables } from "@components/index";

const QuotaInfo = ({ quotaData }: QuotaInfoProps): JSX.Element => {
  const { payLoanQuota } = usePaymentStore();
  const { getLoanTicket } = useLoansStore();

  const { loading, toggleLoading } = useLoading();
  const { loading: loadingTicket, toggleLoading: toggleLoadingTicket } =
    useLoading();

  const getOptions = (payment: PaymentsData): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
      if (option.id === "btn-download-ticket")
        return {
          ...option,
          loading: loadingTicket,
          disabled: payment.paymentStatus === "Pagado" ? undefined : true,
          onClick: () => {
            getLoanTicket(payment.loan.id, toggleLoadingTicket);
          },
        };
      return {
        ...option,
        loading,
        disabled: payment.paymentStatus === "Pagado" ? true : undefined,
        onClick: () => {
          payLoanQuota(payment.id, toggleLoading);
        },
      };
    });
  };

  return (
    <Tables<PaymentsData>
      headers={headers}
      recordsData={[{ ...quotaData }]}
      getOptions={getOptions}
      columnKeys={columnKeys}
      recordTitle="Cuota"
    />
  );
};

export default QuotaInfo;
