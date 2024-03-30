import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import TableHeaderCell from "../components/TableHeaderCell";
import {
  Table,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { darkTheme } from "../theme/darkTheme";

export default {
  title: "Table/TableHeaderCell",
  component: TableHeaderCell,
} as Meta;

const Template: Story = () => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");

  const columns = [
    { id: "name", label: "Name", sortable: true },
    { id: "item1", label: "...", sortable: false },
    { id: "item2", label: "...", sortable: false },
    { id: "item3", label: "...", sortable: false },
    { id: "count", label: "Count", sortable: true },
  ];

  const handleSort = (columnId: string) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableHeaderCell
                  key={column.id}
                  column={column}
                  order={orderBy === column.id ? order : undefined}
                  orderBy={orderBy}
                  handleSort={() => handleSort(column.id)}
                />
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export const SortableHeaderCells = Template.bind({});
