import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Drawer, CssBaseline, AppBar, 
        List, Typography, Divider, IconButton, ListItem, 
        ListItemText, MenuItem, ListItemIcon, Link,
        Menu, Button, ListSubheader, Toolbar, Collapse } 
        from "@material-ui/core";
import { red, deepPurple, blue } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: "relative",
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: blue[800]
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subOnOff, setSubOnOff] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openEl = Boolean(anchorEl);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSubOnOff(){
    setSubOnOff(!subOnOff)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"   //fixed에서 변경
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            JOB A LIVE
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/join">Join</Button>
          {auth && (
            <div>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleSubOnOff}>개인 My account{subOnOff ? <ExpandLess /> : <ExpandMore />}</MenuItem>
                <Collapse in={subOnOff} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="지원현황" href="/interviewerNotice"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="PR관리" href="/interviewerPr"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemText primary="회원정보수정" href="/interviewerModify"/>
                    </ListItem>
                  </List>
                </Collapse>
                <MenuItem onClick={handleSubOnOff}>기업 My account{subOnOff ? <ExpandLess /> : <ExpandMore />}</MenuItem>
                <Collapse in={subOnOff} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="공고목록" href="/corporationNotice"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="PR스크랩" href="/corporationPr"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                    <ListItemText primary="회원정보수정" href="/corporationModify"/>
                    </ListItem>
                  </List>
                </Collapse>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Home", "Notice", "Interview", "PR"].map((text, index) => (
            <ListItem button component="a" href={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["F&Q"].map((text, index) => (
            <ListItem button component="a" href={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListSubheader inset>Admin page</ListSubheader>
        <List>
          {["PR", "Alive", "Corporation", "Interviewer", "Notice"].map((text, index) => (
            <ListItem button component="a" href={text + "Admin"}>
              <ListItemIcon>
                {<AssignmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main> */}
    </div>
  );
};

export default Navbar;
