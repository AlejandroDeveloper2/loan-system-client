/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Coins,
  DollarCircle,
  HandCash,
  Triangle,
} from "iconoir-react";

import {
  useDialog,
  useFilter,
  useLoading,
  useModal,
  usePagination,
} from "@hooks/index";
import useLoansStore from "@zustand/LoansStore";
import useAuthStore from "@zustand/AuthStore";
import { formatMoney } from "@utils/helpers";
import { getLoanTableOptions } from "@utils/tableOptionsHelpers";

import { LoanFilters } from "@models/FiltersDataModels";
import {
  columnKeys,
  filterOptions,
  headers,
} from "@constants/tables-data/LoansTableData";
import { ClientLoanData } from "@models/DataModels";
import { IconOnlyButtonProps } from "@models/ComponentModels";

import {
  CardList,
  Filters,
  IndicatorSection,
  LoanForm,
  Tables,
} from "@components/index";

const LoansPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { loading: loadingIndicator, toggleLoading: toggleLoadingIndicator } =
    useLoading();

  const auth = useAuthStore((state) => state.auth);

  const {
    loans,
    loanIndicators,
    paginationData,
    getAllLoans,
    getLoanIndicators,
    cancelLoan,
    deleteLoan,
  } = useLoansStore();
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
  } = usePagination(paginationData);

  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<LoanFilters>({ loanDate: "", paymentCycle: "" }, "Todos");

  const { DialogBox, toggleDialog, updateElementId } = useDialog(
    "¿Desea Cancelar el préstamo?",
    "Cancelar préstamo",
    cancelLoan
  );
  const {
    DialogBox: DialogDelete,
    toggleDialog: toggleDialogDelete,
    updateElementId: updateLoanId,
  } = useDialog(
    "¿Desea eliminar el préstamo?",
    "Eliminar préstamo",
    deleteLoan
  );

  const { ModalWindow, toggleModal } = useModal("Nuevo préstamo");

  useEffect(() => {
    getLoanIndicators(toggleLoadingIndicator);
  }, []);

  useEffect(() => {
    getAllLoans(
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      chosenFilter === "Todos" ? "" : chosenFilter,
      toggleLoading
    );
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  const getTableOptions = (loan: ClientLoanData): IconOnlyButtonProps[] => {
    return getLoanTableOptions(
      loan,
      navigate,
      auth,
      toggleDialog,
      updateElementId,
      toggleDialogDelete,
      updateLoanId
    );
  };

  return (
    <>
      <DialogBox />
      <DialogDelete />
      <ModalWindow>
        <LoanForm toggleModal={toggleModal} />
      </ModalWindow>
      <h1 className="heading1">
        <HandCash />
        Préstamos
      </h1>
      <IndicatorSection>
        <CardList>
          <CardList.Card
            title="Total capital invertido"
            value={formatMoney(loanIndicators.totalInvestedCapital)}
            Icon={Coins}
            captionText="General"
            variant="primary"
            loading={loadingIndicator}
          />
          <CardList.Card
            title="Capital invertido"
            value={formatMoney(loanIndicators.investedCapital)}
            Icon={Coins}
            captionText="Mes Actual"
            variant="light"
            loading={loadingIndicator}
          />
          <CardList.Card
            title="Total prestamos activos"
            value={String(loanIndicators.totalActiveLoans)}
            Icon={DollarCircle}
            captionText="General"
            variant="primary"
            loading={loadingIndicator}
          />
          <CardList.Card
            title="Prestamos activos"
            value={String(loanIndicators.activeLoans)}
            Icon={DollarCircle}
            captionText="Mes Actual"
            variant="light"
            loading={loadingIndicator}
          />
          <CardList.Card
            title="Total Prestamos pagados"
            value={String(loanIndicators.totalLoansPaid)}
            Icon={HandCash}
            captionText="General"
            variant="primary"
            loading={loadingIndicator}
          />
          <CardList.Card
            title="Prestamos pagados"
            value={String(loanIndicators.loansPaid)}
            Icon={HandCash}
            captionText="Mes Actual"
            variant="light"
            loading={loadingIndicator}
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
          id="loanDate"
          name="loanDate"
          value={filtersData.loanDate}
          label="Fecha de creación"
          placeholder="Ingresa la fecha de creación del préstamo"
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
      <Tables<ClientLoanData>
        headers={headers}
        recordsData={loans}
        getTableOptions={getTableOptions}
        columnKeys={columnKeys}
        recordTitle="Préstamo"
        paginationConfig={{
          next,
          back,
          totalRecords: paginationData.totalElements,
          firstShownRecord,
          lastShownRecord,
        }}
        isLoading={loading}
        loadingMessage={loadingMessage}
      >
        <Tables.Tools
          recordsToList={recordsToList}
          searchValue={searchValue}
          searchLabel="Buscar solicitud"
          buttonLabel="Nuevo préstamo"
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
          addRecordFunction={toggleModal}
        />
      </Tables>
    </>
  );
};
export default LoansPage;
