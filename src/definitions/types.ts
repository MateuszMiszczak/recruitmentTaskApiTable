import { RecoilState } from "recoil";

export type AtomState<T> = RecoilState<T>;

export interface RowData {
  name: string;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
}

export interface ErrorState {
  message?: string;
  code?: number;
  status: number;
}

export type SortOrder = "asc" | "desc";
export type PageState = number;
export type RowsPerPageState = number;

export interface TableHeaderProps {
  order: SortOrder;
  orderBy: string;
  handleSort: (property: string) => void;
}

export interface TableHeaderCellProps {
  column: {
    id: string;
    label: string;
    sortable?: boolean;
    align?: "inherit" | "left" | "center" | "right" | "justify";
  };
  order?: "asc" | "desc";
  orderBy?: string;
  handleSort?: (id: string) => void;
}

export interface TableRowComponentProps {
  row: RowData;
  rowIndex: number;
  isLoading: boolean;
  error: ErrorState | null;
}

export interface PaginatedData {
  data: RowData[];
}

export interface SortedData {
  data: RowData[];
  isLoading: boolean;
  error: ErrorState | null;
}

export interface TemplateArgs {
  row: RowData;
  rowIndex: number;
  isLoading: boolean;
  error: { message: string; status?: number } | null;
}
