import { useRecoilState } from "recoil";
import { pageState } from "../state/stateAtoms";

export const useHandleChangePage = () => {
  const [page, setPage] = useRecoilState(pageState);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return { handleChangePage, page };
};
