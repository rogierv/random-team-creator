import React from 'react';
import TeamSizes from './TeamSizes';

const TeamSizePicker = ({ groups, selectedGroupId, onClickHander, size }) => {
  const selectedGroup = groups.filter(group => group.id === selectedGroupId);

  const members = selectedGroup.length !== 0 && selectedGroup[0].members;

  const countMembers = selectedGroup.length !== 0 && selectedGroup[0].members.length - 1;

  const teamSizing = countMembers > 0 && Array.from(Array(countMembers), (val, index) => index + 1);

  return (
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
  );
};

export default TeamSizePicker;
