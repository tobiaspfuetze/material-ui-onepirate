import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
  title: {
    
    [theme.breakpoints.up('xs')]: {
      fontSize: 10,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(0.1),
  
      },
    [theme.breakpoints.up('sm')]: {
      fontSize: 14,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(2),
  
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 24,
        color: theme.palette.common.white,
      },
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    
  },
  rightLink: {
      
    [theme.breakpoints.up('xs')]: {
      fontSize: 8,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(0.5),
      padding: theme.spacing(0.6),
      },
    [theme.breakpoints.up('sm')]: {
    fontSize: 11,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),


    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    },
   
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
        <Link to={"/"}>
            <Typography
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
            >
              {"bobo choi"}
            </Typography>
          </Link>
          <div className={classes.right}>
          <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"BYU MISM"}
            </Typography>
            </Link> 
            <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"freelance model"}
            </Typography>
            </Link>
            <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"Software Engineer"}
            </Typography>
            </Link>
        
         
            <Link to={"/signin"}>
              <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"NFT Artist"}
              </Typography>
            </Link>
            <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"Singer"}
            </Typography>
            </Link>
            
            <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"food critic"}
            </Typography>
            </Link>
                   
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
