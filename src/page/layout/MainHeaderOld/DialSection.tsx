import { Badge, Box, IconButton } from "@mui/material";
import { Fragment } from "react";
import SliderButton from "../MainSlider.tsx/SliderButton";
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


const DialSection = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <SliderButton/>
      <IconButton color="secondary" size="large" onClick={() => navigate("/paper/search")}>
        <SearchIcon/>
      </IconButton>
      <IconButton color="secondary" size="large" onClick={() => navigate("/auth/signin")}>
        <AccountCircleIcon/>
      </IconButton>
      <IconButton color="secondary" size="large" onClick={() => navigate("/member/notification")}>
        <Badge badgeContent={4} color="warning">
          <MailIcon color="secondary" />
        </Badge>
      </IconButton>
    </Box>
  )
}

export default DialSection;