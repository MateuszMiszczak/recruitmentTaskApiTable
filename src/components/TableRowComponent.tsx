import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { TableRowComponentProps, RowData } from "../definitions/types";
import LoadingCircle from "./LoadingCircle";
import { capitalizeFirstLetter } from "../hooks/useCapitalizeFirstLetter";

export default function TableRowComponent({
  row,
  rowIndex,
  isLoading,
  error,
}: TableRowComponentProps) {
  const renderName = (): React.ReactNode => capitalizeFirstLetter(row.name);
  const renderHasSynonyms = (): React.ReactNode =>
    row.has_synonyms ? "Yes" : "No";
  const renderIsModeratorOnly = (): React.ReactNode =>
    row.is_moderator_only ? "Yes" : "No";
  const renderIsRequired = (): React.ReactNode =>
    row.is_required ? "Yes" : "No";
  const renderCount = (): React.ReactNode => row.count;

  type ColumnKeys = keyof RowData;
  type RenderFunction = () => React.ReactNode;

  const columnRenderFunctions: Record<ColumnKeys, RenderFunction> = {
    name: renderName,
    has_synonyms: renderHasSynonyms,
    is_moderator_only: renderIsModeratorOnly,
    is_required: renderIsRequired,
    count: renderCount,
  };

  const renderCellContent = (columnKey: ColumnKeys): React.ReactNode => {
    if (isLoading) {
      return (
        <div className="flex gap-4">
          <p>Loading</p>
          <LoadingCircle />
        </div>
      );
    }

    if (error) {
      return `Error: ${error.message}`;
    }

    const renderFunction = columnRenderFunctions[columnKey];
    return renderFunction ? renderFunction() : null;
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {`${rowIndex}.`}
      </TableCell>
      {Object.keys(columnRenderFunctions).map(columnKey => (
        <TableCell key={columnKey}>
          {renderCellContent(columnKey as ColumnKeys)}
        </TableCell>
      ))}
    </TableRow>
  );
}
