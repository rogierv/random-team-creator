import React from 'react';

export default ({ onSubmit, onChange, values }) => {
  const { groupName } = values;

  return (
    <React.Fragment>
      <h1>Group Picker</h1>
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
