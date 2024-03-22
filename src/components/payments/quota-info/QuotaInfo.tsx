import { PaymentsData } from "@models/DataModels";
import { QuotaInfoProps } from "@models/ComponentModels";
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

  return (
    <Tables<PaymentsData>
      headers={headers}
      recordsData={[{ ...quotaData }]}
      tableOptions={getQuotaTableOptions(
        [{ ...quotaData }],
        toggleLoadingTicket,
        toggleLoading,
        getLoanTicket,
        payLoanQuota
      )}
      columnKeys={columnKeys}
      recordTitle="Cuota"
    />
  );
};

export default QuotaInfo;
