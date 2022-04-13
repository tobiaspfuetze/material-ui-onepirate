import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link to={"/"}>
        Bobo's Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  footerTop: {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(20), 
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(0), 
        },
      
  },
  footerTop2: {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(-21.5), 
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(0), 
        },
  },
}));


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={3} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.facebook.com/profile.php?id=100005652198196" className={classes.icon}>
                  <img src="/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/choi_bobo" className={classes.icon}>
                  <img src="/appFooterTwitter.png" alt="Twitter" />
                </a>
               
                <Link to={{ pathname: "https://www.instagram.com/bobo0122choi/" }} target="_blank" className={classes.icon}> 
                  <InstagramIcon/>
                </Link>
                <Link to={{ pathname: "https://www.youtube.com/channel/UClnpxFdTM-SO0LS9nBWq-V/" }} target="_blank" className={classes.icon}> 
                <YouTubeIcon/>
                </Link>
                  
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sm={4} md={3} >
            <Typography variant="h6" marked="left" gutterBottom className={classes.footerTop}>
              Contact
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
              <a href="mailto:bobo0122choi@gmail.com">Email Bobo</a>
              </li>
              <li className={classes.listItem}>
              <a href="https://www.instagram.com/bobo0122choi/">DM Bobo</a>
              </li>
              <li className={classes.listItem}>
                <a href="https://www.linkedin.com/in/bobo-choi/">Bobo's LinkedIn Profile</a>
              </li>
            </ul>
         
         
          </Grid>
      
        </Grid>
      </Container>
    </Typography>
  );
}
