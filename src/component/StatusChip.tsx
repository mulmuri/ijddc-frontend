import { Chip } from "@mui/material";


export interface StatusChipProps {
  status: string;
  color: string;
}




const StatusChip = ({status, color}: StatusChipProps) => {
  return (
    <Chip label={status} sx={{color: color}}/>
  )
}


export default StatusChip;