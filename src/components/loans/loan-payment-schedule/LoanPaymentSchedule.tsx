import { PaymentSchedule } from "@models/DataModels";
import {
  columnKeys,
  headers,
} from "@constants/tables-data/PaymentScheduleTableData";

import useLoansStore from "@zustand/LoansStore";

import { Tables } from "@components/index";

const LoanPaymentSchedule = (): JSX.Element => {
  const { loan } = useLoansStore();

  return (
    <Tables<PaymentSchedule>
      headers={headers}
      recordsData={loan.paymentSchedules}
      columnKeys={columnKeys}
      recordTitle="Cuota"
    />
  );
};

export default LoanPaymentSchedule;
