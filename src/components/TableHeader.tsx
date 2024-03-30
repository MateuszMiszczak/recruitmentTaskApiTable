import { TableHead, TableRow } from "@mui/material";
import TableHeaderCell from "./TableHeaderCell";
import { TableHeaderProps } from "../definitions/types";

export default function TableHeader({
  order,
  orderBy,
  handleSort,
}: TableHeaderProps) {
  const headers = [
    { id: "index", label: "#", sortable: false },
    { id: "name", label: "Name", sortable: true },
    { id: "has_synonyms", label: "Has synonyms", sortable: false },
    { id: "is_moderator_only", label: "Is moderator only", sortable: false },
    { id: "is_required", label: "Is required", sortable: false },
    { id: "count", label: "Count", sortable: true },
  ];

  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableHeaderCell
            key={header.id || index}
            column={header}
            order={order}
            orderBy={orderBy}
            handleSort={handleSort}
          />
        ))}
      </TableRow>
    </TableHead>
  );
}
