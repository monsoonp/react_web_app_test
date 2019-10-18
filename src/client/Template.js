import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, withStyles,   } from '@material-ui/core/styles';
import {CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Link} from '@material-ui/core/';
import {ListSubheader}  from '@material-ui/core/';
//import ListIcon from '@material-ui/icons/List';
//import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import MainDiagram from 'components/MainDiagram_base';
import SideBar from 'components/SideBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const styles  = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      height: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    margin: 0,
    
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flex: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  preventer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 999,
  }
}));

function Template() {
    
    const classes = useStyles();
    //const {classes} = props;
    const [open, setOpen] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [checked, setChecked] = useState("tester");
    const check = (e) => {
      /*
      if(checked === "tester"){
        setChecked("헬로");
      }else{
        setChecked("tester");
      }
      */
     setChecked(e);
    }
    useEffect(()=>{
        
    },[])

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            {/*좌측 nav bar*/}
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
            >
              {open ? 
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                  </IconButton>
                </div>
                :
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
              }
              
               
              {/*main list*/}
              <Divider />
              <List>
                { open && <ListSubheader inset>Demo List</ListSubheader> }
                <SideBar check={check}/>
              </List>
              
              {/*sub list*/}
              <Divider />
            
            </Drawer>

            {/* main contents */}
            <div className={classes.content}>
              {/*<div className={classes.appBarSpacer} /> 상단 여백 - 상단 toolbar 용*/}
              {/*<div className={classes.preventer}/>*/}
              <Route path="/">
                <MainDiagram check={checked}/>
              </Route>

                    {/*
              <Container maxWidth="xl" className={classes.container}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Route exact path="/" component={Home}/>   exact 컴포넌트 주소 구분 
                    <Switch>
                        <Route path="/about/:name" component={About}/>  Switch 비교할 라우트를 위에, 매칭되는 첫번째 라우트
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Route path="/posts" component={Posts}/>
                  </Grid>
                </Grid>
              </Container>
                    */}
              
            </div>
        </div>
    );
}

export default withStyles(styles)(Template);