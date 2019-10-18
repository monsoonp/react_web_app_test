import React, {useState} from 'react';
import {ListItem, ListItemIcon, ListItemText}  from '@material-ui/core/';
import ListIcon from '@material-ui/icons/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function Menus(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [checkedNode, setCheckedNode] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  
  const checkNode = (e) => {
    //props.check(e);
    setCheckedNode(e);
  }
  const checkDisCon = (e) => {
    props.check({checked:checkedNode,choice:e});
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
          {props.node.map((node)=>{
              return(
                <MenuItem key={node.id} onClick={(e) => (checkNode(e.target.innerText))}>
                  <ListItemText>
                    <div
                      aria-controls="customized-menu2"
                      aria-haspopup="true"
                      variant="contained"
                      color="primary"
                      onClick={handleClick2}
                    >
                      {node.name}
                    </div>
                    <Menu
                      id="customized-menu2"
                      anchorEl={anchorEl2}
                      keepMounted
                      open={Boolean(anchorEl2)}
                      onClose={handleClose}
                      onClick={(e) => (checkDisCon(e.target.innerText))}
                    >
                      <MenuItem>
                        <ListItemText primary="source" />
                      </MenuItem>
                      <MenuItem>
                        <ListItemText primary="target" />
                      </MenuItem>
                      <MenuItem>
                        <ListItemText primary="both" />
                      </MenuItem>
                    </Menu>
                  </ListItemText>
                  
                </MenuItem>
              );
          })}
        </Menu>
      </ListItemText>
    </ListItem>
  );
}