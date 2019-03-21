import uuid from 'uuid';

export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const GROUPS_FETCHED = 'GROUPS_FETCHED';

export const addGroup = name => ({
  type: ADD_GROUP,
  group: { id: uuid(), name, members: [] }
});

export const deleteGroup = id => ({
  type: DELETE_GROUP,
  id
});

const groupsFetched = groups => ({
  type: GROUPS_FETCHED,
  groups
});

export const getGroups = () => (dispatch, getState) => {
  if (getState().groups.length !== 0) return;
  dispatch(groupsFetched(getState().groups));
};
