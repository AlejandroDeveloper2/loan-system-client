/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, GoogleDocs } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import { useDialog, useFilter, useLoading, usePagination } from "@hooks/index";

import { LoanRequestFilters } from "@models/FiltersDataModels";
import { ParsedLoanRequestData } from "@models/DataModels";
import { IconOnlyButtonProps } from "@models/ComponentModels";
import {
  columnKeys,
  filterOptions,
  headers,
  optionsData,
} from "@constants/tables-data/LoanRequestTableData";

import {
  CardList,
  Filters,
  IndicatorSection,
  InviteLinkSection,
  Tables,
} from "@components/index";

const LoanRequestPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();

  const {
    loanRequests,
    paginationData,
    getAllLoanRequests,
    approveLoanRequest,
    rejectLoanRequest,
  } = useLoanRequestStore();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<LoanRequestFilters>({ requestDate: "" }, "Todo");
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

  const { DialogBox, toggleDialog, updateElementId } = useDialog(
    "¿Desea aprobar la solicitud?",
    "Aprobar solicitud",
    approveLoanRequest
  );
  const {
    DialogBox: DialogBox2,
    toggleDialog: toggleDialog2,
    updateElementId: updateElementId2,
  } = useDialog(
    "¿Desea rechazar la solicitud?",
    "Rechazar solicitud",
    rejectLoanRequest
  );

  useEffect(() => {
    getAllLoanRequests(
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      toggleLoading,
      chosenFilter === "Todo" ? undefined : chosenFilter
    );
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  const getOptions = (
    request: ParsedLoanRequestData
  ): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
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
          toggleDialog2();
          updateElementId2(request.id);
        },
      };
    });
  };

  return (
    <>
      <DialogBox />
      <DialogBox2 />
      <h1 className="heading1">
        <GoogleDocs />
        Solicitudes
      </h1>
      <IndicatorSection>
        <CardList>
          <CardList.Card
            title="Total Solicitudes"
            value={String(loanRequests.length)}
            Icon={GoogleDocs}
            captionText="General"
            variant="neutral"
            loading={loading}
          />
        </CardList>
      </IndicatorSection>
      <InviteLinkSection />
      <Filters
        filterOptions={filterOptions}
        chosenFilter={chosenFilter}
        onChangeFilter={onChangeFilter}
      >
        <Filters.Input
          type="date"
          id="requestDate"
          name="requestDate"
          value={filtersData.requestDate}
          label="Fecha de creación"
          placeholder="Ingresa la fecha de la solicitud"
          Icon={Calendar}
          errorMessage=""
          onChange={onChangeFilterInput}
        />
      </Filters>
      <Tables<ParsedLoanRequestData>
        headers={headers}
        recordsData={loanRequests}
        getOptions={getOptions}
        columnKeys={columnKeys}
        recordTitle="Solicitud"
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
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
        />
      </Tables>
    </>
  );
};

export default LoanRequestPage;
