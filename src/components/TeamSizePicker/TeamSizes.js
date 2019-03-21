import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import shuffle from '../../utils/shuffle';
import chunkArray from '../../utils/chunckArray';
import _ from 'lodash';

const styles = {
  card: {
    margin: '1rem'
    // minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const TeamSizes = ({ teamCount, members, classes, maxSize }) => {
  const noOfTeams = chunkArray(shuffle(members), teamCount);
  const maxMembers = _.chunk(shuffle(members), maxSize);
  const teams = teamCount ? noOfTeams : maxSize ? maxMembers : null;

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={24}>
      {teams.map((team, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Team {index + 1}
            </Typography>
            <Divider />
            <List dense={true}>
              {team.map(member => (
                <ListItem key={member.id}>
                  <ListItemText primary={member.name} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(TeamSizes);
