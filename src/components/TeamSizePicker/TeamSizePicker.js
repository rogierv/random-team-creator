import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import TeamSizes from './TeamSizes';
import { Divider, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
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

const TeamSizePicker = ({ groups, selectedGroupId, onClickHander, size, classes, handleChange }) => {
  const selectedGroup = groups.filter(group => group.id === selectedGroupId);
  const members = selectedGroup.length !== 0 && selectedGroup[0].members;
  const countMembers = selectedGroup.length !== 0 && selectedGroup[0].members.length - 1;
  const teamSizing = countMembers > 0 && Array.from(Array(countMembers), (_, index) => index + 1);

  return (
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5" gutterBottom>
        Team Generator
      </Typography>
      <Divider />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sizeSelector"># teams</InputLabel>
        <Select value={size} onChange={handleChange} inputProps={{ name: 'size', id: 'sizeSelector' }}>
          {countMembers > 0 &&
            teamSizing.map(size => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {size && <TeamSizes size={size} members={members} />}
    </Paper>
  );
};

export default withStyles(styles)(TeamSizePicker);
