import { Divider } from "@mui/material";
import { DividerProps } from "../props";



const InlineDivider = ({title}: DividerProps) => {
  return (
    <Divider textAlign="left">{title}</Divider>
  )
}

export default InlineDivider;