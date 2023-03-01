import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import ListDrawar from './SliderList';
import { IconButton } from '@mui/material';

const SliderButton = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}> <ListIcon color="secondary"/> </IconButton>
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <ListDrawar/>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default SliderButton;