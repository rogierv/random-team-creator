import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: '#30e3ca',
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

const TeamCreator = ({ onDelete, onSubmit, onChange, values, groups, selectedGroupId, classes }) => {
  const { groupMember } = values;

  const selectedGroup = groups.filter(group => {
    return group.id === selectedGroupId;
  });

  return (
    <Paper className={classes.paper}>
      <Typography component="h5" variant="h5" gutterBottom>
        {selectedGroup.length !== 0 && selectedGroup[0].members.length}
        {' '}
Group Members
      </Typography>
      <Divider />
      <List dense>
        {selectedGroup.length !== 0 &&
          selectedGroup[0].members.map(member => (
            <ListItem key={member.id}>
              <ListItemText primary={`${member.name}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={onDelete(selectedGroup[0].id, member.id)}>
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
          margin="dense"
        />
        <Button size="small" type="submit" className={classes.margin}>
          Add
        </Button>
      </form>
    </Paper>
  );
};

TeamCreator.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({}.isRequired).isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  classes: PropTypes.shape({}.isRequired).isRequired,
  selectedGroupId: PropTypes.string.isRequired
};

export default withStyles(styles)(TeamCreator);
