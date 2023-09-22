import React, { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function DrawerMenu(props) {
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Users</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/post`}>Create post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
