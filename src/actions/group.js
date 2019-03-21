import uuid from 'uuid';

export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const GROUPS_FETCHED = 'GROUPS_FETCHED';

const addGroupSuccess = (id, name) => ({
  type: ADD_GROUP,
  group: { id, name, members: [] }
});

const deleteGroupSuccess = id => ({
  type: DELETE_GROUP,
  id
});

const groupsFetched = groups => ({
  type: GROUPS_FETCHED,
  groups
});

export const addGroup = name => dispatch => {
  const id = uuid();
  const groups = localStorage.getItem('groups');
  const groupsJSON = groups ? JSON.parse(groups) : [];
  localStorage.setItem('groups', JSON.stringify([...groupsJSON, { id, name, members: [] }]));
  dispatch(addGroupSuccess(id, name));
};

export const deleteGroup = id => dispatch => {
  const groupsJSON = JSON.parse(localStorage.getItem('groups'));
  localStorage.setItem('groups', JSON.stringify(groupsJSON.filter(group => group.id !== id)));
  dispatch(deleteGroupSuccess(id));
};

export const getGroups = () => (dispatch, getState) => {
  if (getState().groups.length !== 0) return;

  const groups = localStorage.getItem('groups');
  const groupsJSON = groups ? JSON.parse(groups) : [];
  dispatch(groupsFetched(groupsJSON));
};
