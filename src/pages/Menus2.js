import React from 'react';
import {ListItem, ListItemIcon, ListItemText}  from '@material-ui/core/';
import ListIcon from '@material-ui/icons/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function Menus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const testFunction = (e) => {
    console.log(e);
    props.check(e);
    handleClose();
  }
  return (
    <ListItem button name="changeTest">
      <ListItemIcon onClick={handleClick}>
            <DashboardIcon />
      </ListItemIcon>
      <ListItemText>
        <div
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Change Connect
        </div>
        <Menu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={(e) => (testFunction(e.target.innerText))}>
            <ListItemText primary="node3"/>
          </MenuItem>
          <MenuItem onClick={(e) => (testFunction(e.target.innerText))}>
            <ListItemText primary="node4" />
          </MenuItem>
          <MenuItem onClick={(e) => (testFunction(e.target.innerText))}>
            <ListItemText primary="node5" />
          </MenuItem>
        </Menu>
      </ListItemText>
    </ListItem>
  );
}