import { atom, RecoilState } from "recoil";
import {
  RowData,
  SortOrder,
  PageState,
  RowsPerPageState,
  ErrorState,
} from "../definitions/types";

export const tableDataState: RecoilState<RowData[]> = atom({
  key: "tableData",
  default: [] as RowData[],
});

export const isLoadingState: RecoilState<boolean> = atom({
  key: "isLoading",
  default: true,
});

export const errorState: RecoilState<ErrorState | null> =
  atom<ErrorState | null>({
    key: "error",
    default: null,
  });

export const pageState: RecoilState<PageState> = atom({
  key: "page",
  default: 0,
});

export const rowsPerPageState: RecoilState<RowsPerPageState> = atom({
  key: "rowsPerPage",
  default: 5,
});

export const sortOrderState: RecoilState<SortOrder> = atom<SortOrder>({
  key: "sortOrder",
  default: "asc",
});

export const orderByState: RecoilState<string> = atom({
  key: "orderBy",
  default: "",
});
