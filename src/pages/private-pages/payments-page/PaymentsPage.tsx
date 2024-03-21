/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Cash, Coins, CoinsSwap, Triangle } from "iconoir-react";

import { formatMoney, getCurrentDate } from "@utils/helpers";
import { useFilter, useLoading, usePagination } from "@hooks/index";
import usePaymentStore from "@zustand/PaymentStore";

import { PaymentsFilters } from "@models/FiltersDataModels";
import { PaymentsData } from "@models/DataModels";
import { IconOnlyButtonProps } from "@models/ComponentModels";
import {
  columnKeys,
  filterOptions,
  headers,
  optionsData,
} from "@constants/tables-data/PaymentTableData";

import { CardList, Filters, IndicatorSection, Tables } from "@components/index";

const PaymentsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { loading: loadingIndicators, toggleLoading: toggleLoadingIndicators } =
    useLoading();

  const {
    payments,
    pagination,
    paymentIndicators,
    getTodayPayments,
    getPaymentIndicators,
  } = usePaymentStore();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<PaymentsFilters>(
      { startDate: getCurrentDate(), paymentCycle: "" },
      "Todos"
    );

  const {
    searchValue,
    recordsToList,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  } = usePagination(pagination);

  useEffect(() => {
    getTodayPayments(
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      chosenFilter === "Todos" ? "" : chosenFilter,
      toggleLoading
    );
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  useEffect(() => {
    getPaymentIndicators(toggleLoadingIndicators);
  }, []);

  const getOptions = (payment: PaymentsData): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
      return {
        ...option,
        onClick: () => {
          navigate(`/userPanel/payments/${payment.id}`);
        },
      };
    });
  };

  return (
    <>
      <h1 className="heading1">
        <CoinsSwap />
        Pagos
      </h1>
      <IndicatorSection>
        <CardList>
          <CardList.Card
            title="Total dinero recaudado"
            value={formatMoney(paymentIndicators.totalBalance)}
            Icon={Coins}
            captionText="General"
            variant="primary"
            loading={loadingIndicators}
          />
          <CardList.Card
            title="Dinero recaudado hoy"
            value={formatMoney(paymentIndicators.raisedMoney)}
            Icon={Coins}
            captionText="Hoy"
            variant="light"
            loading={loadingIndicators}
          />
          <CardList.Card
            title="Pagos realizados hoy"
            value={String(paymentIndicators.paymentsMade)}
            Icon={CoinsSwap}
            captionText="Hoy"
            variant="primary"
            loading={loadingIndicators}
          />
          <CardList.Card
            title="Total pagos en mora"
            value={String(paymentIndicators.overduePayments)}
            Icon={Cash}
            captionText="General"
            variant="danger"
            loading={loadingIndicators}
          />
        </CardList>
      </IndicatorSection>
      <Filters
        filterOptions={filterOptions}
        chosenFilter={chosenFilter}
        onChangeFilter={onChangeFilter}
      >
        <Filters.Input
          type="date"
          id="startDate"
          name="startDate"
          value={filtersData.startDate}
          label="Fecha de pago"
          placeholder="Ingresa la fecha de pago de la cuota"
          Icon={Calendar}
          errorMessage=""
          onChange={onChangeFilterInput}
        />
        <Filters.Select
          id="paymentCycle"
          name="paymentCycle"
          value={filtersData.paymentCycle}
          label="Ciclo de pago"
          options={[
            { label: "Mensual", value: "Mensual" },
            { label: "Quincenal", value: "Quincenal" },
            { label: "Semanal", value: "Semanal" },
          ]}
          Icon={Triangle}
          errorMessage=""
          onChange={onChangeFilterInput}
        />
      </Filters>
      <Tables<PaymentsData>
        headers={headers}
        recordsData={payments}
        getOptions={getOptions}
        columnKeys={columnKeys}
        recordTitle=""
        paginationConfig={{
          next,
          back,
          totalRecords: pagination.totalElements,
          firstShownRecord,
          lastShownRecord,
        }}
        isLoading={loading}
        loadingMessage={loadingMessage}
      >
        <Tables.Tools
          recordsToList={recordsToList}
          searchValue={searchValue}
          searchLabel="Buscar pago"
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
        />
      </Tables>
    </>
  );
};

export default PaymentsPage;
