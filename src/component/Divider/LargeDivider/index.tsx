import { Divider, Typography } from "@mui/material";
import { DividerProps } from "../props";







const OutlineDivider = ({title}: DividerProps) => {
  return (
    <>
    <Typography>{title}</Typography>
    <Divider/>
    </>
  )
}

export default OutlineDivider;