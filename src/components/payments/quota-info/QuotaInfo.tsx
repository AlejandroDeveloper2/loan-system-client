import { PaymentsData } from "@models/DataModels";
import { IconOnlyButtonProps, QuotaInfoProps } from "@models/ComponentModels";
import {
  columnKeys,
  headers,
} from "@constants/tables-data/QuotaToPayTableData";

import usePaymentStore from "@zustand/PaymentStore";
import useLoansStore from "@zustand/LoansStore";
import { useLoading } from "@hooks/index";
import { getQuotaTableOptions } from "@utils/tableOptionsHelpers";

import { Tables } from "@components/index";

const QuotaInfo = ({ quotaData }: QuotaInfoProps): JSX.Element => {
  const { payLoanQuota } = usePaymentStore();
  const { getLoanTicket } = useLoansStore();

  const { toggleLoading } = useLoading();
  const { toggleLoading: toggleLoadingTicket } = useLoading();

  const getTableOptions = (payment: PaymentsData): IconOnlyButtonProps[] => {
    return getQuotaTableOptions(
      payment,
      toggleLoadingTicket,
      toggleLoading,
      getLoanTicket,
      payLoanQuota
    );
  };

  return (
    <Tables<PaymentsData>
      headers={headers}
      recordsData={[{ ...quotaData }]}
      getTableOptions={getTableOptions}
      columnKeys={columnKeys}
      recordTitle="Cuota"
    />
  );
};

export default QuotaInfo;
