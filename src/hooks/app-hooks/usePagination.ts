import { ChangeEvent, useState } from "react";

const usePagination = <T>(records: T[]) => {
  //   const [updatedRecords, setUpdatedRecords] = useState<T[]>(records);
  const [searchValue, setSearchValue] = useState<string>("");
  const [recordsToList, setRecordsToList] = useState<string>("10");
  const [totalRecords] = useState<number>(records.length);
  const [currentPage, setCurrentPage] = useState<number>(0);
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
    if (currentPage === 0 && currentPage < records.length - 1) {
      setCurrentPage((currentPage) => currentPage + 1);
      if (currentPage === 0) {
        setFirstShownRecord((firstShownRecord) => firstShownRecord + 1);
      } else {
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
    if (currentPage > 1 && currentPage <= records.length) {
      setCurrentPage((currentPage) => currentPage - 1);
      if (currentPage === 1) {
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
    totalRecords,
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
