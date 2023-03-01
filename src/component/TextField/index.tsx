import { ResponsiveTextField } from "../Responsive";




export interface InputProps {
  isError: boolean;
  errMsg?: string;
  defaultValue?: string;
}




const InputForm = ({isError, errMsg, defaultValue}: InputProps) => {
  return (
  <ResponsiveTextField
    error={isError}
    defaultValue={defaultValue}
    helperText={errMsg}
  />
  )
}

export default InputForm;