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

import themeStyles from './register.theme.style';
import scss from './register.module.scss';
import { Link } from 'react-router-dom';


const Register = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}
    >

      <Grid direction={panelDirection} container spacing={0}>
        <Grid item sm={6} xs={12} >
          <Card className={classNames(scss.card, classes['primary-card'])}>
            <CardContent className={scss['signup-content']}>
              <Typography variant="headline" component="h2" gutterBottom>
                Register
                </Typography>
              <Typography component="p" gutterBottom>
                Welcome It takes a couple of minutes to sign up for a free account. Just fill in your details to gain access the admin panel and view the dashboard. By creating an account, you agree to our Terms & Conditions and Privacy Policy.
                </Typography>
            </CardContent>
            <CardActions>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button fullWidth color="secondary" variant="raised">I'm already registered</Button></Link>
            </CardActions>
          </Card>
        </Grid>


        <Grid item sm={6} xs={12} >
          <Card className={scss.card}>
            <CardContent>
              <Grid container>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Firstname"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Lastname"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    fullWidth
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Repeat Password"
                    fullWidth
                    type="password"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Link to='/Temp'>
              <Button fullWidth href="/Temp" color="primary" variant="raised">Register</Button></Link>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  );
};

Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Register);