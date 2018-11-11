import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import themeStyles from './login.theme.style';
import scss from './login.module.scss';
import { Link } from 'react-router-dom';

import bgImage from '../../assets/images/bg-SignIn.png';

const Login = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction="coloumn"
      spacing={0}
      // justify="center"
      // alignItems="center"
      className={classes.background}
      className={scss.maingrid}
    >
      <Grid item direction="coloumn" sm={4} className={scss.sidebar} >
        <img src={bgImage} className={scss.bgImg} />
        <Grid item  sm={12} direction="coloumn" className={scss.sidebarContent}>
          <img src={require("../../assets/images/Schrocken-Logo-White@3x.png")} className={scss.schrockenLogo} />
          
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src={require("../../assets/images/ic-hyperledger.png")} className={scss.hyperLogo} />
          <img src={require("../../assets/images/ic-blockchain.png")} className={scss.blockchainLogo} />

        </Grid>
      </Grid>
      <Grid
        item
        sm={8}
        direction="row"
        spacing={8}
        justify="center"
        alignItems="center"
      >
        Signin
    <Grid
          item
          sm={6}
          xs={12}
        >
          <Card className={scss.card}>
            <div style={{ color: '#FF8A38', fontSize: '2em' }}>
              Sign In
               </div>
            <div>
              <CardContent>
                <TextField
                  label="Email Address"
                  fullWidth
                />
                <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                />
              </CardContent>
              <CardActions className={scss['login-actions']}>
                <Button href="/login" color="primary" variant="raised">Login</Button>
                <Link to="/Register" >
                  <Button fullWidth color="secondary" variant="raised"style={{ textDecoration:'none'}}>Create an account</Button>
                  </Link>
                <Button href="/forgot-password">Forgot Password</Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
      {/* </Grid>
    </Grid>
      {/* <Grid item sm={10} xs={12} className={scss.panel}>
        <Grid direction={panelDirection} container spacing={8}>
          {/* <Grid
            item
            sm={6}
            xs={12}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['signup-content']}>
                <img src={logoImage} className={scss['signup-logo']} alt="logo" />
                <Typography variant="headline" component="h2" gutterBottom>
                  Portal Admin Panel
                </Typography>
                <Typography component="p" gutterBottom>
                  Welcome to our admin panel. Please login using the form or register for a new account using the button below.
                </Typography>
                <Typography component="p" gutterBottom>
                  Portal is an amazing and easy to use Admin template. If you have any questions feel free to contact us in our support forum.
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth href="/register" color="secondary" variant="raised">Create an account</Button>
              </CardActions>
            </Card>
          </Grid> */}
      {/* */}
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Login);
