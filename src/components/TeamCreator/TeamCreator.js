import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

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

const TeamCreator = ({ onSubmit, onChange, values, groups, selectedGroupId, classes }) => {
  const { groupMember } = values;

  const selectedGroup = groups.filter(group => {
    return group.id === selectedGroupId;
  });

  return (
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5" gutterBottom>
        Group Members
      </Typography>
      <Divider />
      <List dense={true}>
        {selectedGroup.length !== 0 &&
          selectedGroup[0].members.map(member => (
            <ListItem key={member.id}>
              <ListItemText primary={`${member.name}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>

      <form onSubmit={onSubmit}>
        <TextField
          value={groupMember}
          onChange={onChange}
          placeholder="Enter name"
          type="text"
          name="groupMember"
          required
        />
        <Button size="small" variant="outlined" color="primary" type="submit" className={classes.margin}>
          Add
        </Button>
      </form>
    </Paper>
  );
};

export default withStyles(styles)(TeamCreator);
