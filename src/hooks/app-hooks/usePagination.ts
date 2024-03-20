import { ChangeEvent, useState } from "react";

import { Pagination } from "@models/DataModels";

const usePagination = (paginationData: Pagination) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [recordsToList, setRecordsToList] = useState<string>("5");
  const [currentPage, setCurrentPage] = useState<number>(paginationData.page);
  const [firstShownRecord, setFirstShownRecord] = useState<number>(1);
  const [lastShownRecord, setLastShownRecord] = useState<number>(
    window.parseInt(recordsToList)
  );

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onRecordsToListChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRecordsToList(e.target.value);
  };

  const next = (): void => {
    if (currentPage >= 0 && currentPage < paginationData.totalPages - 1) {
      setCurrentPage((currentPage) => currentPage + 1);
      if (currentPage === 0) {
        setFirstShownRecord(
          (firstShownRecord) =>
            firstShownRecord + window.parseInt(recordsToList)
        );
      }

      setLastShownRecord(
        (lastShownRecord) => lastShownRecord + window.parseInt(recordsToList)
      );
    }
  };

  const back = (): void => {
    if (currentPage >= 1 && currentPage <= paginationData.totalPages - 1) {
      setCurrentPage((currentPage) => currentPage - 1);
      if (currentPage === 0) {
        setFirstShownRecord(1);
      } else {
        setFirstShownRecord(
          (firstShownRecord) =>
            firstShownRecord - window.parseInt(recordsToList)
        );
      }

      setLastShownRecord(
        (lastShownRecord) => lastShownRecord - window.parseInt(recordsToList)
      );
    }
  };

  return {
    searchValue,
    recordsToList,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  };
};
export default usePagination;
