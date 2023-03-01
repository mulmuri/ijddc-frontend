import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { StyleProps } from "../../../type/basic";



export interface SearchType {
  name: string;
}

export interface TypeSelectorProps extends StyleProps {
  types: SearchType[]
}

const TypeSelector = ({style, types}: TypeSelectorProps) => {
  const [typeValue, setTypeValue] = useState('');

  const defaultValue = types[0].name || ''

  const handleChange = (event: SelectChangeEvent) => {
    setTypeValue(types[Number(event.target.value)].name);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, ...style }} >
      <Select
        id="type-selector"
        value={typeValue}
        onChange={handleChange}
        label="선택"
        defaultValue={defaultValue}
      >
        {types.map((type) => <MenuItem value={type.name}>{type.name}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default TypeSelector;