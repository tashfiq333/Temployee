import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { CssBaseline } from "@material-ui/core";
import { Component } from "react";
import { Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  comApp: {
    flexGrow: 1,
    background:
      "linear-gradient(62.98deg, #7710FF 46.52%, rgba(119, 16, 255, 0.104167) 111.11%, rgba(119, 16, 255, 0) 111.12%);",
  },

  bt: {
    padding: 30,
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


}));

const UserAppBar = () => {
  const classes = useStyles();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Button href="/user-profile"><p>Profile</p></Button></MenuItem>
      <MenuItem onClick={handleMenuClose}><Button><p>Sign Out</p></Button></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >


      <MenuItem>
        <IconButton  color="inherit" href="/">

          <HomeIcon />

        </IconButton>
        <p>Home</p>
      </MenuItem>


      
      <MenuItem>
        <IconButton  color="inherit" href="/company-info">

          <WorkIcon />

        </IconButton>
        <p>Find work</p>
      </MenuItem>


      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit" href="/person_info" >
          <Badge badgeContent={4} color="secondary">
            <AssignmentTurnedInIcon />
          </Badge>
        </IconButton >
        <p>My work</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton href="/user-profile"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

    </Menu>
  );



  return (
    <>
      <CssBaseline />
      {/* <div className={classes.rootComNav}>
        <AppBar className={classes.comApp} position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Temployee
            </Typography>
            <Link className={classes.bt} color="inherit" href="/company-info">
              Find Work
            </Link>
            <Link className={classes.bt} color="inherit" href="/person_info">
              My Work
            </Link>
            <Link className={classes.bt} color="inherit" href="/user-profile">
              Notification
            </Link>
            <Button className={classes.bt} color="inherit">
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
      </div> */}



      <div className={classes.grow}>
        <AppBar className={classes.comApp} position="fixed">
          <Toolbar>

            <Typography className={classes.title} variant="h6" noWrap>
              Temployee
            </Typography>

            
            <div className={classes.sectionDesktop}>


            <IconButton color="inherit" href="/" >
               
                  <HomeIcon />
              
              </IconButton>

              <IconButton  color="inherit" href="/company-info">

                <WorkIcon />

              </IconButton>

              <IconButton color="inherit" href="/person_info" >
                <Badge badgeContent={4} color="secondary">
                  <AssignmentTurnedInIcon />
                </Badge>
              </IconButton>

              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

    </>
  );
};
export default UserAppBar;
