import { ChangeEvent, useState, useEffect } from "react";

const usePagination = <T>(records: T[]) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [recordsToList, setRecordsToList] = useState<string>("10");
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [firstShownRecord, setFirstShownRecord] = useState<number>(1);
  const [lastShownRecord, setLastShownRecord] = useState<number>(
    window.parseInt(recordsToList)
  );
  const [totalPages] = useState<number>(
    records.length / window.parseInt(recordsToList)
  );

  useEffect(() => {
    setTotalRecords(records.length);
  }, [records]);

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onRecordsToListChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRecordsToList(e.target.value);
  };

  const next = (): void => {
    if (currentPage === 0 && currentPage < totalPages) {
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
    if (currentPage >= 1 && currentPage <= totalPages) {
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
