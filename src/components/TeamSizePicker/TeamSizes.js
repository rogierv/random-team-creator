import React from 'react';

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

const TeamSizes = ({ size, members }) => {
  const teams = createTeams(shuffle(members), size);
  return (
    <div>
      {teams.map((team, index) => (
        <div key={index}>
          {index + 1}:{' '}
          {team.map(member => (
            <span key={member.id}>{member.name} </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeamSizes;
