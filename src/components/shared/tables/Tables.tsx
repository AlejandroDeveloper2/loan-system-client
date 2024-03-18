import { Eye, Plus, Search } from "iconoir-react";

import { useScreenType } from "@hooks/index";
import { formatDate, formatMoney, getBadgeVariant } from "@utils/helpers";

import { TableToolsProps, TablesProps } from "@models/ComponentModels";

import {
  Badge,
  IconButton,
  IconOnlyButton,
  InputText,
  Select,
  Table,
  TableResponsive,
} from "@components/index";

import styles from "./Tables.module.css";

function Tables<T>(props: TablesProps<T>) {
  const {
    headers,
    recordsData,
    columnKeys,
    getOptions,
    recordTitle,
    paginationConfig,
    children,
  } = props;
  const screenType = useScreenType();

  if (screenType === "desktop")
    return (
      <>
        {children}
        <Table headers={headers} paginationConfig={paginationConfig}>
          {recordsData.length === 0 ? (
            <Table.EmptyRow />
          ) : (
            recordsData.map((record, i) => (
              <Table.Row key={i}>
                {columnKeys.map((columnKey, x) =>
                  columnKey.badgeValue ? (
                    <Table.Row.Column key={x}>
                      <Badge
                        label={
                          columnKey.fieldType === "currency"
                            ? formatMoney(Object(record)[columnKey.key])
                            : Object(record)[columnKey.key]
                        }
                        variant={getBadgeVariant(
                          columnKey.key,
                          Object(record)[columnKey.key]
                        )}
                      />
                    </Table.Row.Column>
                  ) : (
                    <Table.Row.Column
                      key={x}
                      value={
                        columnKey.fieldType === "currency"
                          ? formatMoney(Object(record)[columnKey.key])
                          : columnKey.fieldType === "date"
                          ? formatDate(Object(record)[columnKey.key])
                          : columnKey.fieldType === "subField"
                          ? Object(record)[columnKey.key][columnKey.subKey]
                          : Object(record)[columnKey.key]
                      }
                    />
                  )
                )}
                {getOptions ? (
                  <Table.Row.Column>
                    {getOptions(record).map((option) => (
                      <IconOnlyButton
                        key={option.id}
                        Icon={option.Icon}
                        id={option.id}
                        type={option.type}
                        title={option.title}
                        variant={option.variant}
                        loading={option.loading}
                        onClick={option.onClick}
                        disabled={option.disabled}
                      />
                    ))}
                  </Table.Row.Column>
                ) : null}
              </Table.Row>
            ))
          )}
        </Table>
      </>
    );
  return (
    <>
      {children}
      <TableResponsive paginationConfig={paginationConfig}>
        {recordsData.length === 0 ? (
          <TableResponsive.Empty />
        ) : (
          recordsData.map((record, i) => (
            <TableResponsive.Record
              key={i}
              title={recordTitle + "#" + (i + 1)}
              values={headers.map((header, x) => ({
                ...header,
                value:
                  header.label === "Opciones"
                    ? ""
                    : columnKeys[x].fieldType === "currency"
                    ? formatMoney(Object(record)[columnKeys[x].key])
                    : columnKeys[x].fieldType === "date"
                    ? formatDate(Object(record)[columnKeys[x].key])
                    : columnKeys[x].fieldType === "subField"
                    ? Object(record)[columnKeys[x].key][columnKeys[x].subKey]
                    : Object(record)[columnKeys[x].key],
              }))}
            >
              {getOptions
                ? getOptions(Object(record).id).map((option) => (
                    <IconOnlyButton
                      key={option.id}
                      Icon={option.Icon}
                      id={option.id}
                      type={option.type}
                      title={option.title}
                      variant={option.variant}
                      loading={option.loading}
                      onClick={option.onClick}
                    />
                  ))
                : null}
            </TableResponsive.Record>
          ))
        )}
      </TableResponsive>
    </>
  );
}

const TableTools = (props: TableToolsProps): JSX.Element => {
  const {
    recordsToList,
    searchValue,
    searchLabel,
    buttonLabel,
    onRecordsToListChange,
    onSearchChange,
    addRecordFunction,
  } = props;
  return (
    <div className={styles.tableTools}>
      {addRecordFunction && buttonLabel ? (
        <IconButton
          Icon={Plus}
          label={buttonLabel}
          id="btn-add"
          type="button"
          title={`Agregar ${buttonLabel}`}
          variant="primary"
          loading={false}
          onClick={addRecordFunction}
        />
      ) : null}
      <Select
        id="records-to-list-select"
        name="recordsToList"
        label="Requistros a mostrar"
        value={recordsToList}
        options={[
          { label: "10", value: "10" },
          { label: "15", value: "15" },
          { label: "20", value: "20" },
        ]}
        errorMessage={""}
        Icon={Eye}
        onChange={onRecordsToListChange}
      />
      <InputText
        id="input-search"
        name="input-search"
        type="text"
        label={searchLabel}
        placeholder="Buscar registro"
        value={searchValue}
        errorMessage={""}
        Icon={Search}
        onChange={onSearchChange}
      />
    </div>
  );
};

Tables.Tools = TableTools;

export default Tables;
