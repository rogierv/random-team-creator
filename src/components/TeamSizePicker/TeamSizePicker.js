import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import TeamSizes from './TeamSizes';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  }
});

const TeamSizePicker = ({ groups, selectedGroupId, onClickHander, size, classes }) => {
  const selectedGroup = groups.filter(group => group.id === selectedGroupId);

  const members = selectedGroup.length !== 0 && selectedGroup[0].members;

  const countMembers = selectedGroup.length !== 0 && selectedGroup[0].members.length - 1;

  const teamSizing = countMembers > 0 && Array.from(Array(countMembers), (val, index) => index + 1);

  return (
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5" gutterBottom>
        Team Creation
      </Typography>

      <div>
        Create number of teams:
        {countMembers > 0 &&
          teamSizing.map(size => (
            <span key={size} onClick={() => onClickHander(size)}>
              {' '}
              {size}{' '}
            </span>
          ))}
        {size && <TeamSizes size={size} members={members} />}
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TeamSizePicker);
