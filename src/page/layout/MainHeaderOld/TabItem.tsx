import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TabProps } from "../../../type/header"





const TabItem = ({title, index}: TabProps) => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const handleFocus = () => {
    setOpen(!open);
  };

  return (
    <Box>
    <List
      sx={{ width: '100%', minWidth: 240, maxWidth: 360, bgcolor: 'background.default', color: 'secondary.main' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      onMouseEnter={handleFocus} onMouseLeave={handleFocus}
    >
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary={title.text} onClick={() => navigate(title.link)}/>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {index.map((index) => (
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={index.text} onClick={() => navigate(title.link + "/" + index.link)} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </List>
    </Box>
  )
/*
  return (
    <Button onClick={() => {navigate(link)}}>
      <Typography color="white">
      {text}
      </Typography>
    </Button>
  )
*/
}

export default TabItem