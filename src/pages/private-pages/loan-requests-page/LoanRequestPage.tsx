import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, GoogleDocs } from "iconoir-react";

import useLoanRequestStore from "@zustand/LoanRequestStore";
import { useDialog, useFilter, usePagination } from "@hooks/index";

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

  const {
    loanRequests,
    getAllLoanRequests,
    approveLoanRequest,
    rejectLoanRequest,
  } = useLoanRequestStore();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<LoanRequestFilters>({ requestDate: "" }, "Todo");
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
  } = usePagination<ParsedLoanRequestData>(loanRequests);

  const { DialogBox, chosenOption, toggleDialog } = useDialog(
    "¿Desea aprobar la solicitud?",
    "Aprobar solicitud"
  );
  const {
    DialogBox: DialogBox2,
    chosenOption: chosenOption2,
    toggleDialog: toggleDialog2,
  } = useDialog("¿Desea rechazar la solicitud?", "Rechazar solicitud");

  useEffect(() => {
    getAllLoanRequests(
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      chosenFilter === "Todo" ? undefined : chosenFilter
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  const getOptions = (recordId: string): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
      if (option.id === "btn-view")
        return {
          ...option,
          onClick: () => navigate(`/userPanel/loanRequests/${recordId}`),
        };
      if (option.id === "btn-approve")
        return {
          ...option,
          onClick: () => {
            toggleDialog();
            if (chosenOption === "Yes") approveLoanRequest(recordId);
          },
        };
      return {
        ...option,
        onClick: () => {
          toggleDialog2();
          if (chosenOption2 === "Yes") rejectLoanRequest(recordId);
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
            title="Solicitudes nuevas"
            value="0"
            Icon={GoogleDocs}
            captionText="Hoy"
            variant="light"
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
          totalRecords,
          firstShownRecord,
          lastShownRecord,
        }}
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
