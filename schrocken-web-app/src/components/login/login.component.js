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
import signinimg from '../../assets/images/bg-SignIn.png';
import themeStyles from './login.theme.style';
import scss from './login.module.scss';

const Login = (props) => {
  const {
    classes,
    width
  } = props;

  // Flip container to column on mobile screens.
  const panelDirection = width === 'xs' ? 'column' : 'row';

  return (

    <Grid item sm={10} xs={12} className={scss.panel}>
      <Grid direction={panelDirection} container spacing={0}>
        <Grid
          style={{ height: '500px', width: '300px' }}>
          <Card className={classNames(scss.card)} style={{ backgroundImage: `url(${signinimg} )` }}>
            {/* <img src={signinimg} alt="fjifj"/> */}
          </Card>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}>
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
                <Button fullWidth href="/register" color="secondary" variant="raised">Create an account</Button>
                <Button href="/forgot-password">Forgot Password</Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Login);
