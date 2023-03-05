import { Pagination as MuiPagination } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { PaperContentNoState } from '../store/PaperContent';



export interface PaginationProps {
  count: number;
}




const Pagination = () => {
  const setPaperContentNo = useSetRecoilState(PaperContentNoState)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPaperContentNo(value);
  };

  return (
    <MuiPagination count={11} onChange={handleChange} color="primary" />
  )
}

export default Pagination;