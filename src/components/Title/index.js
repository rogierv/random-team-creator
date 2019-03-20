import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  link: {
    textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
      color: 'black'
    }
  }
});

const Title = ({ classes }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center" spacing={24}>
      <Grid item xs={12}>
        <Typography component="h2" variant="h2" gutterBottom>
          <Link component={RouterLink} to="/" className={classes.link}>
            Random Team Creator
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Title);
