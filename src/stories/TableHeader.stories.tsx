import React from "react";
import { Story, Meta } from "@storybook/react";
import TableHeader from "../components/TableHeader";
import { Table, TableContainer, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../theme/darkTheme";

export default {
  title: "Table/TableHeader",
  component: TableHeader,
  decorators: [
    Story => (
      <ThemeProvider theme={darkTheme}>
        <TableContainer component={Paper}>
          <Table>
            <Story />
          </Table>
        </TableContainer>
      </ThemeProvider>
    ),
  ],
} as Meta;

const SortableTemplate: Story = args => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableHeader
      order={order}
      orderBy={orderBy}
      handleSort={handleSort}
      {...args}
    />
  );
};

export const DefaultHeaderLook = SortableTemplate.bind({});
DefaultHeaderLook.args = {
  order: "asc",
  orderBy: "name",
};
