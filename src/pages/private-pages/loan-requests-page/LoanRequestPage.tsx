/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleDocs } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import useAuthStore from "@zustand/AuthStore";
import { useDialog, useFilter, useLoading, usePagination } from "@hooks/index";
import { getLoanRequestTableOptions } from "@utils/tableOptionsHelpers";

import { LoanRequestFilters } from "@models/FiltersDataModels";
import { ParsedLoanRequestData } from "@models/DataModels";
import { IconOnlyButtonProps } from "@models/ComponentModels";
import {
  columnKeys,
  filterOptions,
  headers,
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
  const auth = useAuthStore((state) => state.auth);

  const {
    loanRequests,
    paginationData,
    getAllLoanRequests,
    approveLoanRequest,
    rejectLoanRequest,
  } = useLoanRequestStore();
  const { filtersData, chosenFilter, onChangeFilter } =
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
    toggleDialog: toggleRejectDialog,
    updateElementId: updateRejectElementId,
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

  const getTableOptions = (
    request: ParsedLoanRequestData
  ): IconOnlyButtonProps[] => {
    return getLoanRequestTableOptions(
      request,
      navigate,
      auth,
      toggleDialog,
      updateElementId,
      toggleRejectDialog,
      updateRejectElementId
    );
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
      ></Filters>
      <Tables<ParsedLoanRequestData>
        headers={headers}
        recordsData={loanRequests}
        getTableOptions={getTableOptions}
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
