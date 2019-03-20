import React from 'react';

const TeamCreator = ({ onSubmit, onChange, values, groups, selectedGroupId }) => {
  const { groupMember } = values;

  const selectedGroup = groups.filter(group => {
    return group.id === selectedGroupId;
  });

  return (
    <React.Fragment>
      <h1>Team Creator</h1>
      {selectedGroup.length !== 0 && selectedGroup[0].members.map(member => <div key={member.id}>{member.name}</div>)}
      <form onSubmit={onSubmit}>
        <input
          value={groupMember}
          onChange={onChange}
          placeholder="Enter name"
          type="text"
          name="groupMember"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </React.Fragment>
  );
};

export default TeamCreator;
