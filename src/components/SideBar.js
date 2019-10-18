import React, {useEffect, useState} from 'react';
import {ListItem, ListItemIcon, ListItemText}  from '@material-ui/core/';
//import ListIcon from '@material-ui/icons/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';
//import { NavLink } from 'react-router-dom';

import Menus from 'pages/Menus';
import Menus2 from 'pages/Menus2';

const SideBar=(props)=> {
    /*
    const activeStyle = {
    color: 'green',
    fontSize: '2rem'
    }
    */ 
    
    useEffect(()=>{

      return()=>{

      }
    },[])
    
    return(
        <div>
            <Menus check={props.check} />
            
            <Menus2 check={props.check} />

            <ListItem button id="increment">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            </ListItem>

            <ListItem button id="decrement">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            </ListItem>

            <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
            </ListItem>

            <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
            </ListItem>
            
        </div>
    );
}
export default SideBar;
/*
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
*/