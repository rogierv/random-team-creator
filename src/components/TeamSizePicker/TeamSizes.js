import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

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

const createTeams = (members, size) => {
  return chunkArray(members, size);
};

function chunkArray(arr, chunkCount) {
  const chunks = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / chunkCount--);
    const chunk = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }
  return chunks;
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const TeamSizes = ({ size, members, classes }) => {
  const teams = createTeams(shuffle(members), size);
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
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
