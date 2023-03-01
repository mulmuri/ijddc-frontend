import { FormControl, IconButton, Input, InputAdornment, SxProps } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import { StyleProps } from "../../../type/basic";


interface SearchBarProps extends StyleProps {
  onClick: () => void;
}



const SearchBar = ({onClick, style}: SearchBarProps) => {
  return (
    <FormControl sx={style} variant="standard">
      <Input
        id="SearchBar"
        type='text'
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClick}>
              <SearchIcon/>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchBar;