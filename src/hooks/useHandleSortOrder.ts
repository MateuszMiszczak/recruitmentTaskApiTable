import { useRecoilState } from "recoil";
import { sortOrderState, orderByState } from "../state/stateAtoms";

export const useHandleSortOrder = () => {
  const [order, setOrder] = useRecoilState(sortOrderState);
  const [orderBy, setOrderBy] = useRecoilState(orderByState);

  const handleSortOrder = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return { handleSortOrder, order, orderBy };
};
