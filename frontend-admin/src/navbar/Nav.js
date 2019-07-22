import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  CssBaseline,
  AppBar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  MenuItem,
  ListItemIcon,
  Link,
  Menu,
  Button,
  ListSubheader,
  Toolbar,
  Collapse
} from "@material-ui/core";
import { red, deepPurple, blue } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PetsIcon from "@material-ui/icons/Pets";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BusinessIcon from "@material-ui/icons/Business";
import PersonIcon from "@material-ui/icons/Person";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import VoiceChatIcon from "@material-ui/icons/VoiceChat"; //ALIVE
import SlideshowIcon from "@material-ui/icons/Slideshow"; //PR
import ListAltIcon from "@material-ui/icons/ListAlt"; //공고
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver"; //ALIVE
import PanToolIcon from "@material-ui/icons/PanTool"; //PR
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"; //공고
import SwitchVideoIcon from "@material-ui/icons/SwitchVideo"; //ALIVE
import HomeIcon from "@material-ui/icons/Home"; 

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: "relative",
    flexGrow: 1
  },

  title: {
    flexGrow: 1
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
    paddingLeft: theme.spacing(4)
  },
  list_item: {
    paddingTop: 20,
    paddingBottom: 20
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

  function handleSubOnOff() {
    setSubOnOff(!subOnOff);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static" //fixed에서 변경
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
            JOB A LIVE 관리자
          </Typography>
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
        {/* <ListSubheader inset>Admin</ListSubheader> */}
        <List>
          {["Home", "PR", "Alive", "Corporation", "Interviewer", "Notice"].map(
            (text, index) => (
              <ListItem
                button
                component="a"
                href={text + "Admin"}
                className={classes.list_item}
              >
                {
                  <ListItemIcon>
                    {index === 0 ? (
                      <HomeIcon />
                    ) : index === 1 ? (
                      <PanToolIcon />
                    ) : index === 2 ? (
                      <VoiceChatIcon />
                    ) : index === 3 ? (
                      <BusinessIcon />
                    ) : index === 4 ? (
                      <PersonIcon />
                    ) : (
                      <NotificationsActiveIcon />
                    )}
                  </ListItemIcon>
                }
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
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
