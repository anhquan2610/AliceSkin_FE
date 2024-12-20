import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout, resetAuthState } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import StoreIcon from "@mui/icons-material/Store";
import DraftsIcon from "@mui/icons-material/Drafts";
import { notifySuccess } from "../../utils/Nontification.utils";
import SpaIcon from "@mui/icons-material/Spa";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TagIcon from "@mui/icons-material/Tag";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.auth.role);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetAuthState());
    notifySuccess("Logout successfully!");
    navigate("/login");
  };

  const menuItems = [
    {
      text: "Dashboard",
      link: "admin",
      icon: <DraftsIcon />,
      roles: ["admin", "staff"],
    },
    { text: "User", link: "users", icon: <PersonIcon />, roles: ["admin"] },
    {
      text: "Blog",
      link: "blogs",
      icon: <ArticleIcon />,
      roles: ["admin", "staff"],
    },
    { text: "Product", link: "products", icon: <SpaIcon />, roles: ["admin"] },
    { text: "Brand", link: "brands", icon: <StoreIcon />, roles: ["admin"] },
    {
      text: "Question",
      link: "questions",
      icon: <QuizOutlinedIcon />,
      roles: ["admin", "staff"],
    },
    {
      text: "Shippings",
      link: "shippings",
      icon: <LocalShippingTwoToneIcon />,
      roles: ["admin"],
    },
    {
      text: "Vouchers",
      link: "vouchers",
      icon: <ConfirmationNumberOutlinedIcon />,
      roles: ["admin"],
    },
    {
      text: "Orders",
      link: "orders",
      icon: <ContentPasteIcon />,
      roles: ["admin", "staff"],
    },
    {
      text: "HashTags",
      link: "hashtags",
      icon: <TagIcon />,
      roles: ["admin", "staff"],
    },
    {
      text: "Cashflow",
      link: "cashflow",
      icon: <SavingsOutlinedIcon />,
      roles: ["admin", "staff"],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "var(--green)",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Alice Skin Management
          </Typography>
          <Box>
            <Link to="/manage/infoUser" style={{ color: "var(--white)" }}>
              <IconButton color="inherit">
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Link>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems
            .filter((item) => item.roles.includes(role))
            .map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  component={Link}
                  to={item.link}
                  sx={[
                    { minHeight: 48, px: 2.5 },
                    open
                      ? { justifyContent: "initial" }
                      : { justifyContent: "center" },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: "center" },
                      open ? { mr: 3 } : { mr: "auto" },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
