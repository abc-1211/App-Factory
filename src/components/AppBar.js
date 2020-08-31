import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Button
} from '@material-ui/core';
import { UserContext } from '../context/UserContext';
import ProfilePic from './ProfilePic';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  titleMobile: {
    flexGrow: 1,
    display: 'block',
    textAlign: 'center',
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  link: {
    textDecoration: 'none !important',
    color: 'black'
  },
  pointer: {
    cursor: 'pointer'
  }
}));

export default function SearchAppBar() {
  const { user, isLoaded } = useContext(UserContext);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography className={classes.titleMobile} variant="h6" noWrap>
          <IconButton component={Link} to="/" aria-label="Home">
            <HomeIcon />
          </IconButton>
          App Factory
        </Typography>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <IconButton component={Link} to="/" aria-label="Home">
              <HomeIcon />
            </IconButton>
            App Factory
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {user && isLoaded ? (
            <div>
              <ProfilePic handleMenu={handleMenu} />
              <Menu
                id="menu-appbar"
                className={classes.pointer}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                keepMounted
                getContentAnchorEl={null}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  component={Link}
                  to="/dashboard"
                  onClick={handleClose}
                >
                  My dashboard
                </MenuItem>
                <a
                  href="http://localhost:5000/auth/logout"
                  className={classes.link}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </a>
              </Menu>
            </div>
          ) : (
              <Button
                component={Link}
                to="/login"
                aria-label="Login"
                color="inherit"
              >
                Login
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
