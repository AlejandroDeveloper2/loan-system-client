import {
  ResponsiveTableProps,
  TableResponsiveRecordProps,
} from "@models/ComponentModels";

import { Pagination } from "@components/index";

import styles from "./TableResponsive.module.css";

const TableResponsive = (props: ResponsiveTableProps): JSX.Element => {
  const { children, paginationConfig } = props;

  return (
    <ol className={styles.tableResponsiveContainer}>
      {children}
      {paginationConfig ? (
        <Pagination paginationConfig={paginationConfig} />
      ) : null}
    </ol>
  );
};

const TableRecord = (props: TableResponsiveRecordProps): JSX.Element => {
  const { children, values, title } = props;
  return (
    <div className={styles.tableResponsiveRecord}>
      <div className={styles.head}>
        <h3 className="heading3">{title}</h3>
      </div>
      <ul className={styles.tableResponsiveBody}>
        {values.map(({ Icon, label, value }, i) => (
          <li key={i}>
            <Icon id="icon-header" />
            <span className="paragraph">{label}</span>
            <p className="paragraph">{value}</p>
          </li>
        ))}
        <li>{children}</li>
      </ul>
    </div>
  );
};

const EmptyTable = (): JSX.Element => {
  return (
    <div className={styles.emptyTable}>
      <p className="buttonText">¡No hay registros aún!</p>
    </div>
  );
};

TableResponsive.Record = TableRecord;
TableResponsive.Empty = EmptyTable;

export default TableResponsive;
