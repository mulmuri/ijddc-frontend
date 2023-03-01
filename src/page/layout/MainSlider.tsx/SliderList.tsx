import { Box, List, ListSubheader } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { navInfoList } from '../MainHeaderOld/navInfo';

const ListDrawar = () => {
  const infoList = navInfoList;

  const navigate = useNavigate();

  return (
  <Box
    sx={{ width: 250 }}
    role="presentation"
  >
    <>
    {infoList.map((info) => (
      <List
        key={info.title.text}
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div">
            {info.title.text}
          </ListSubheader>
        }
      >
        {info.index.map((indexinfo) => (
          <ListItem key={indexinfo.text} disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(`/${info.title.link}/${indexinfo.link}`)}>
              <ListItemText primary={indexinfo.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    ))}
    </>
  </Box>
  )
};

export default ListDrawar;