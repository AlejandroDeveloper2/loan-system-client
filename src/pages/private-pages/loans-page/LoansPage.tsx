import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Coins,
  DollarCircle,
  HandCash,
  Triangle,
} from "iconoir-react";

import { useFilter, useModal, usePagination } from "@hooks/index";
import useLoansStore from "@zustand/LoansStore";

import { LoanFilters } from "@models/FiltersDataModels";
import {
  columnKeys,
  filterOptions,
  headers,
  optionsData,
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
import { formatMoney } from "@utils/helpers";

const LoansPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { loans, loanIndicators, getAllLoans, getLoanIndicators } =
    useLoansStore();
  const {
    searchValue,
    recordsToList,
    totalRecords,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  } = usePagination<ClientLoanData>(loans);

  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<LoanFilters>({ loanDate: "", paymentCycle: "" }, "Todos");

  const { ModalWindow, toggleModal } = useModal("Nuevo préstamo");

  useEffect(() => {
    getLoanIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAllLoans(
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      chosenFilter === "Todos" ? "" : chosenFilter
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  const getOptions = (recordId: string): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
      if (option.id === "btn-edit-loan")
        return {
          ...option,
          onClick: () => navigate(`/userPanel/loans/${recordId}`),
        };
      return {
        ...option,
        onClick: () => {
          console.log("cancelar préstamo");
        },
      };
    });
  };

  return (
    <>
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
          />
          <CardList.Card
            title="Capital invertido"
            value={formatMoney(loanIndicators.investedCapital)}
            Icon={Coins}
            captionText="Mes Actual"
            variant="light"
          />
          <CardList.Card
            title="Total prestamos activos"
            value={String(loanIndicators.totalActiveLoans)}
            Icon={DollarCircle}
            captionText="General"
            variant="primary"
          />
          <CardList.Card
            title="Prestamos activos"
            value={String(loanIndicators.activeLoans)}
            Icon={DollarCircle}
            captionText="Mes Actual"
            variant="light"
          />
          <CardList.Card
            title="Total Prestamos pagados"
            value={String(loanIndicators.totalLoansPaid)}
            Icon={HandCash}
            captionText="General"
            variant="primary"
          />
          <CardList.Card
            title="Prestamos pagados"
            value={String(loanIndicators.loansPaid)}
            Icon={HandCash}
            captionText="Mes Actual"
            variant="light"
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
        getOptions={getOptions}
        columnKeys={columnKeys}
        recordTitle="Solicitud"
        paginationConfig={{
          next,
          back,
          totalRecords,
          firstShownRecord,
          lastShownRecord,
        }}
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
