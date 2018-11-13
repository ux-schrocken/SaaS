import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
// import classNames from 'classnames';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import ButtonOverride from '../../components/Buttonoverride';
import themeStyles from './login.theme.style';
import scss from './login.module.scss';
import { Link } from 'react-router-dom';

import bgImage from '../../assets/images/bg-SignIn.png';
import Buttonoverride from '../../components/Buttonoverride';

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
      className={classes.background}
      className={scss.maingrid}>

      <Grid item direction="column" sm={4} className={scss.sidebar} >
        <div style={{ maxHeight: '100%' }}>
          <img src={bgImage} className={scss.bgImg} style={{ maxHeight: 'inherit' }} />
        </div>

        <Grid item sm={12} direction="coloumn" className={scss.sidebarContent}>
          <img src={require("../../assets/images/Schrocken-Logo-White@3x.png")} className={scss.schrockenLogo} />
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <img src={require("../../assets/images/ic-hyperledger.png")} className={scss.hyperLogo} />
          <img src={require("../../assets/images/ic-blockchain.png")} className={scss.blockchainLogo} />
        </Grid>
      </Grid>


      <Grid item sm={8} direction="row" spacing={8} justify="center" alignItems="center">
        <Grid item sm={6} xs={12}>
          <div style={{ color: '#FF8A38', fontSize: '2em', display: 'center' }}>Sign In</div>
          <Card className={scss.card} >

            <CardContent  >
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
              <Button href="/forgot-password">Forgot Password</Button>
            </CardActions>
          </Card>
        </Grid>
        <Link to="/ForgotPassword">
          <a href="http://www.google.co.in">Forgot Password? </a></Link>
        <Link to="/Register" style={{ textDecoration: 'none' }}>

          <Buttonoverride   >Get Started</Buttonoverride>
        </Link>
      </Grid>
    </Grid>
  );
};


// style={{ width: '114px', height: '42px', borderRadius: '4px', backgroundColor: '#e36d38'}}


Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Login);
