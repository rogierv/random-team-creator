import React from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1200
  },
  margin: {
    margin: theme.spacing.unit
  },
  chip: {
    margin: theme.spacing.unit
  }
});

const GroupPicker = ({ onSubmit, onChange, values, groups, classes }) => {
  const { groupName } = values;

  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h2" gutterBottom>
        Random Team Creator
      </Typography>
      <Typography component="h5" variant="h5" gutterBottom>
        Select your team
      </Typography>

      {groups.map(group => (
        <Link component={RouterLink} key={group.id} to={`/group/${group.id}`}>
          <Chip key={group.id} label={group.name} onDelete={this} color="primary" className={classes.chip} />
        </Link>
      ))}
      <form onSubmit={onSubmit}>
        <TextField
          value={groupName}
          onChange={onChange}
          placeholder="Enter group name"
          type="text"
          name="groupName"
          required
        />
        <Button size="small" variant="outlined" color="primary" type="submit" className={classes.margin}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(GroupPicker);
