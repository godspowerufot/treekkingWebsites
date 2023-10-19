import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { UserAuth } from "../contextapi";
import { AccountCircle } from "@mui/icons-material";
import { Login } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./card.css";

const drawerWidth = 204;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //check if user log in
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: "none" }),
              marginLeft: -1,
            }}>
            <MenuIcon className="menu"  style={{border: "1px solid rgb(0, 145, 255)", color: "rgb(0, 145, 255)", transition: "background-color 0.3s", width: "4rem", height: "4rem", borderRadius: "3px", padding: "5px"}}/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: "10px" }}
            style={{
              fontWeight: 600,
              fontSize: '3rem',
              background: 'linear-gradient(to right, rgb(0, 145, 255), #0e4166)',
              WebkitBackgroundClip: 'text', /* For webkit browsers like Safari */
              color: 'transparent',
              textAlign: 'center', // Optional: Center the text horizontally
              padding: '10px', // Optional: Add padding for better visibility
            }}>
           XPLUR
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ maxwidth: "5px" }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}
        
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List id="ul">
          <div>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 4,
                  justifyContent: open ? "initial" : "center",
                  px: 3.0,
                  paddingLeft: 3.8,
                }}>
                <Link
                  to="/function"
                  style={{
                    fontSize: "5em",
                    textDecoration: "none",
                    fontFamily: "Times New Roman",
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                    }}>
                    <HomeIcon />
                  </ListItemIcon>

                  <ListItemText
                    primary="Home"
                    style={{
                      opacity: open ? 1 : 0,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 4,
                  justifyContent: open ? "initial" : "center",
                  px: 3.0,
                  paddingLeft: 3.8,
                }}>
                <Link
                  onClick={handleLogout}
                  style={{
                    fontSize: "5em",
                    textDecoration: "none",
                    fontFamily: "Times New Roman",
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                    }}>
                    <Login />
                  </ListItemIcon>
                  <ListItemText
                    primary="Signout"
                    style={{
                      opacity: open ? 1 : 0,
                      fontWeight: "bold",
                      color: "black",
                    }}
                    
                  />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 4,
                  justifyContent: open ? "initial" : "center",
                  px: 3.0,
                  paddingLeft: 3.8,
                }}>
                <Link
                  to="/"
                  style={{
                    fontSize: "5em",
                    textDecoration: "none",
                    fontFamily: "Times New Roman",
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                    }}>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary="Account"
                    style={{
                      opacity: open ? 1 : 0,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 4,
                  justifyContent: open ? "initial" : "center",
                  px: 3.0,
                  paddingLeft: 3.8,
                }}>
                <Link
                  to="/"
                  style={{
                    fontSize: "5em",
                    textDecoration: "none",
                    fontFamily: "Times New Roman",
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                    }}>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Search"
                    style={{
                      opacity: open ? 1 : 0,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          </div>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 0.9, p: 3 }}></Box>
    </Box>
  );
}
export default MiniDrawer;
