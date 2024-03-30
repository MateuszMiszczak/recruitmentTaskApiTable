import { useRecoilValue } from "recoil";
import { useFetchTags } from "../api/useFetchTags";
import {
  tableDataState,
  isLoadingState,
  errorState,
} from "../state/stateAtoms";
import { RowData, ErrorState } from "../definitions/types";

import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableRowComponent from "./TableRowComponent";

import { useHandleChangePage } from "../hooks/useHandleChangePage";
import { useHandleChangeRowsPerPage } from "../hooks/useHandleChangeRowsPerPage";
import { useHandleSortOrder } from "../hooks/useHandleSortOrder";
import { useSortedData } from "../hooks/useSortedData";
import { usePaginatedData } from "../hooks/usePaginatedData";

export default function StackOverflowTable() {
  useFetchTags();

  const data = useRecoilValue<RowData[]>(tableDataState);
  const isLoading = useRecoilValue<boolean>(isLoadingState);
  const error = useRecoilValue<ErrorState | null>(errorState);

  const { handleChangePage, page } = useHandleChangePage();
  const { handleChangeRowsPerPage, rowsPerPage } = useHandleChangeRowsPerPage();
  const { handleSortOrder, order, orderBy } = useHandleSortOrder();

  const sortedData = useSortedData({ data, isLoading, error });
  const paginatedData = usePaginatedData({ data: sortedData });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100, { label: "All", value: -1 }]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={() => null}
        labelDisplayedRows={() => null}
      />

      <TableContainer
        component={Paper}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          "::-webkit-scrollbar": {
            width: "0.4em",
          },
          "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(108, 122, 137)",
          },
        }}
      >
        <Table aria-label="simple table">
          <TableHeader
            order={order}
            orderBy={orderBy}
            handleSort={handleSortOrder}
          />
          <TableBody>
            {(isLoading || error
              ? Array.from({ length: rowsPerPage })
              : paginatedData
            ).map((row, index) => (
              <TableRowComponent
                key={`row-${index}`}
                row={row as RowData}
                rowIndex={page * rowsPerPage + index + 1}
                isLoading={isLoading}
                error={error}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ paddingRight: "26px", backgroundColor: "#0a0a0a" }}>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={() => {}}
        />
      </Box>
    </Box>
  );
}
