import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';


export default function DrawerMenu(props) {
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
          <Link to="/users/1/post">Create post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
