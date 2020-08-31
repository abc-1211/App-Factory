import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleLogo from './images/google-logo.webp';

const useStyles = makeStyles((theme) => ({
  facebook: {
    color: '#ffffff',
    backgroundColor: '#3b5998',
    margin: 15,
    width: 250,
    '&:hover, &:focus': {
      backgroundColor: '#003069'
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    marginRight: 10
  },
  button: {
    width: 250
  },
  img: {
    height: 22,
    marginRight: 10
  },
  poster: {
    [theme.breakpoints.up(780)]: {
      width: '50%'
    }
  }
}));

export default function PosterLogin() {
  const classes = useStyles();

  return (
    <div className={classes.poster}>
      <Typography variant="h6">Login as a poster</Typography>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          className={classes.facebook}
          href="http://localhost:5000/auth/facebook"
        >
          <FacebookIcon className={classes.icon} />
          Login with Facebook
        </Button>
        <Button
          variant="outlined"
          href="http://localhost:5000/auth/google"
          className={classes.button}
        >
          <img src={GoogleLogo} alt="google" className={classes.img} />
          Login with Google
        </Button>
      </div>
    </div>
  );
}

