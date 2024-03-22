/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Group } from "iconoir-react";

import { useFilter, useLoading, usePagination } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";
import { getClientTableOptions } from "@utils/tableOptionsHelpers";

import {
  headers,
  columnKeys,
  filterOptions,
} from "@constants/tables-data/ClientTableData";
import { Client } from "@models/DataModels";
import { ClientsFilters } from "@models/FiltersDataModels";
import { IconOnlyButtonProps } from "@models/ComponentModels";

import { CardList, Filters, IndicatorSection, Tables } from "@components/index";

const ClientsPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { clients, paginationData, getAllClients } = useClientsStore();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<ClientsFilters>({ initialDate: "", finalDate: "" }, "ASC");
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

  useEffect(() => {
    getAllClients(
      recordsToList,
      String(currentPage),
      searchValue,
      filtersData,
      chosenFilter,
      toggleLoading
    );
  }, [
    currentPage,
    filtersData,
    chosenFilter,
    recordsToList,
    searchValue,
    currentPage,
  ]);

  const getTableOptions = (client: Client): IconOnlyButtonProps[] => {
    return getClientTableOptions(client, navigate);
  };

  return (
    <>
      <h1 className="heading1">
        <Group />
        Clientes
      </h1>
      <IndicatorSection>
        <CardList>
          <CardList.Card
            title="Total clientes"
            value={String(clients.length)}
            Icon={Group}
            captionText="General"
            variant="primary"
            loading={loading}
          />
          <CardList.Card
            title="Clientes nuevos"
            value={String(clients.length)}
            Icon={Group}
            captionText="Mes Actual"
            variant="light"
            loading={loading}
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
          id="initialDate"
          name="initialDate"
          value={filtersData.initialDate}
          label="Desde"
          placeholder="Ingresa la fecha de inicio"
          Icon={Calendar}
          errorMessage=""
          onChange={onChangeFilterInput}
        />
        <Filters.Input
          type="date"
          id="finalDate"
          name="finalDate"
          value={filtersData.finalDate}
          label="Hasta"
          placeholder="Ingresa la fecha final"
          Icon={Calendar}
          errorMessage=""
          onChange={onChangeFilterInput}
        />
      </Filters>
      <Tables<Client>
        headers={headers}
        recordsData={clients}
        getTableOptions={getTableOptions}
        columnKeys={columnKeys}
        recordTitle="Cliente"
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
          searchLabel="Buscar cliente"
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
        />
      </Tables>
    </>
  );
};

export default ClientsPage;
