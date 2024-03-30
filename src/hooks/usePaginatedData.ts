import { useMemo } from "react";
import { RowData, PaginatedData } from "../definitions/types";
import { useHandleChangePage } from "./useHandleChangePage";
import { useHandleChangeRowsPerPage } from "./useHandleChangeRowsPerPage";

export const usePaginatedData = ({ data }: PaginatedData): RowData[] => {
  const { page } = useHandleChangePage();
  const { rowsPerPage } = useHandleChangeRowsPerPage();

  const paginatedData = useMemo(() => {
    return rowsPerPage === -1
      ? data
      : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [data, page, rowsPerPage]);

  return paginatedData;
};
