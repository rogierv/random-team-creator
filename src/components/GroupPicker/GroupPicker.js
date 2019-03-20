import React from 'react';

export default ({ onSubmit, onChange, values, groups }) => {
  const { groupName } = values;

  return (
    <React.Fragment>
      <h1>Group Picker</h1>
      {groups.map(group => (
        <div key={group.id}>{group.name}</div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          value={groupName}
          onChange={onChange}
          placeholder="Enter group name"
          type="text"
          name="groupName"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </React.Fragment>
  );
};
