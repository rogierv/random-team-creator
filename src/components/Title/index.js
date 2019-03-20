import React from 'react';
import { Grid, Link, Typography, withStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    padding: '1rem',
    flexGrow: 1
  },
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
    <Grid container direction="column" justify="center" alignItems="center" spacing={24} className={classes.root}>
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
