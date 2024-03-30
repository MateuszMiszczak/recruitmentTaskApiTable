import { useMemo } from "react";
import { RowData, SortedData } from "../definitions/types";
import { useHandleSortOrder } from "../hooks/useHandleSortOrder";

export const useSortedData = ({
  data,
  isLoading,
  error,
}: SortedData): RowData[] => {
  const { order, orderBy } = useHandleSortOrder();

  const sortedData = useMemo(() => {
    if (!orderBy || isLoading || error) return data;

    return [...data].sort((a, b) => {
      if (orderBy === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (orderBy === "count") {
        return order === "asc" ? a.count - b.count : b.count - a.count;
      }
      return 0;
    });
  }, [data, order, orderBy, isLoading, error]);

  return sortedData;
};
