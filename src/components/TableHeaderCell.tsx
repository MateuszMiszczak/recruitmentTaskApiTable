import { TableCell, TableSortLabel } from "@mui/material";
import { TableHeaderCellProps } from "../definitions/types";

export default function TableHeaderCell({
  column,
  order,
  orderBy,
  handleSort,
}: TableHeaderCellProps) {
  return (
    <TableCell align={column.align || "left"}>
      {column.sortable ? (
        <TableSortLabel
          active={orderBy === column.id}
          direction={orderBy === column.id ? order : "asc"}
          onClick={() => handleSort && handleSort(column.id)}
        >
          {column.label}
        </TableSortLabel>
      ) : (
        column.label
      )}
    </TableCell>
  );
}
