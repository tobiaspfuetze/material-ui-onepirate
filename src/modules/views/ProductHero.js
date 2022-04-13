import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from "react-router-dom";

const backgroundImage = "../../public/logo192.png" ;

const styles = (theme) => ({
  background: {
    backgroundImage: 'url(/bobo_drive.jpeg)',
    // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
   
    minWidth: 200,
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(25),
      marginRight: theme.spacing(10),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(35),
      marginRight: theme.spacing(10),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(60),
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(2),
    },
  },
  h5: {

    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(5),

    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(30),
      marginRight: theme.spacing(5),

    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(60),
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(2),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h5}>
        Hi, I'm Bobo.
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Did you know that you could mint your own digital arts to NFTs for FREE now?<br/>
      Keep scrolling to find out how!

      </Typography>
      <Link to={"/NFTs"}>
      <Button
      color="secondary"
        variant="outlined"
        align="center"
        size="large"
        className={classes.button}
        component="a"
      >
        Shop My NFTs
      </Button>
      </Link>
      <Typography variant="body2" color="inherit" className={classes.more}>
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);