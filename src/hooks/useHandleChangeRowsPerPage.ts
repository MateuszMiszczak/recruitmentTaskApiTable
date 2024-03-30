import { useRecoilState } from "recoil";
import { rowsPerPageState, pageState } from "../state/stateAtoms";

export const useHandleChangeRowsPerPage = () => {
  const [rowsPerPage, setRowsPerPage] = useRecoilState(rowsPerPageState);
  const setPage = useRecoilState(pageState)[1];
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return { handleChangeRowsPerPage, rowsPerPage };
};
