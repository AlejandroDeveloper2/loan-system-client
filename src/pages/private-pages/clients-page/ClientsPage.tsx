import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Group } from "iconoir-react";

import { useFilter, usePagination } from "@hooks/index";
import useClientsStore from "@zustand/ClientsStore";

import {
  headers,
  columnKeys,
  optionsData,
  filterOptions,
} from "@constants/tables-data/ClientTableData";
import { Client } from "@models/DataModels";
import { ClientsFilters } from "@models/FiltersDataModels";

import { CardList, Filters, IndicatorSection, Tables } from "@components/index";
import { IconOnlyButtonProps } from "@models/ComponentModels";

const ClientsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { clients, getAllClients } = useClientsStore();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<ClientsFilters>({ initialDate: "", finalDate: "" }, "ASC");
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
  } = usePagination<Client>(clients);

  useEffect(() => {
    getAllClients(
      recordsToList,
      String(currentPage),
      searchValue,
      filtersData,
      chosenFilter
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  const getOptions = (recordId: string): IconOnlyButtonProps[] => {
    return optionsData.map((option) => {
      if (option.id === "btn-edit")
        return {
          ...option,
          onClick: () => {
            navigate(`/userPanel/clients/${recordId}`);
          },
        };
      return option;
    });
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
            value="0"
            Icon={Group}
            captionText="General"
            variant="primary"
          />
          <CardList.Card
            title="Clientes nuevos"
            value="0"
            Icon={Group}
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
        getOptions={getOptions}
        columnKeys={columnKeys}
        recordTitle="Cliente"
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
          searchLabel="Buscar cliente"
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
        />
      </Tables>
    </>
  );
};

export default ClientsPage;
