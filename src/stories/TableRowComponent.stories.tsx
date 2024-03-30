import React from "react";
import { Story, Meta } from "@storybook/react";
import TableRowComponent from "../components/TableRowComponent";
import { RowData, TemplateArgs } from "../definitions/types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { darkTheme } from "../theme/darkTheme";

const mockRowData: RowData = {
  name: "TypeScript",
  has_synonyms: true,
  is_moderator_only: false,
  is_required: true,
  count: 12223,
};

export default {
  title: "Table/TableRowComponent",
  component: TableRowComponent,
  decorators: [
    Story => (
      <ThemeProvider theme={darkTheme}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <Story />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story<TemplateArgs> = (args: TemplateArgs) => (
  <React.Fragment>
    <TableCell>
      <Typography>{`${args.rowIndex}.`}</Typography>
    </TableCell>
    {Object.keys(mockRowData).map((key, index) => (
      <TableCell key={index}>
        <Typography>
          {args.isLoading
            ? "Loading..."
            : args.error
              ? args.error.message
              : ["has_synonyms", "is_moderator_only", "is_required"].includes(
                    key
                  )
                ? args.row[key as keyof RowData]
                  ? "Yes"
                  : "No"
                : args.row[key as keyof RowData]}
        </Typography>
      </TableCell>
    ))}
  </React.Fragment>
);

export const DefaultRowLook = Template.bind({});
DefaultRowLook.args = {
  row: mockRowData,
  rowIndex: 1,
  isLoading: false,
  error: null,
};

export const LoadingStateCells = Template.bind({});
LoadingStateCells.args = {
  ...DefaultRowLook.args,
  isLoading: true,
};

export const ErrorStateCells = Template.bind({});
ErrorStateCells.args = {
  ...DefaultRowLook.args,
  error: { message: "Error: 404" },
};
