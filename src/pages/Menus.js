import React from 'react';
import {ListItem, ListItemIcon, ListItemText}  from '@material-ui/core/';
import ListIcon from '@material-ui/icons/List';
//import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
//import SendIcon from '@material-ui/icons/Send';





export default function Menus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const testFunction = () => {
    props.check("헬로");
    handleClose();
  }
  return (
    <ListItem button name="changeTest">
      <ListItemIcon onClick={handleClick}>
            <ListIcon />
      </ListItemIcon>
      <ListItemText>
        <div
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Open Menu
        </div>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={testFunction}>
            <ListItemText primary="Change Name"/>
          </MenuItem>
          <MenuItem>
            <ListItemText primary="Drafts" />
          </MenuItem>
          <MenuItem>
            <ListItemText primary="Inbox" />
          </MenuItem>
        </Menu>
      </ListItemText>
    </ListItem>
  );
}