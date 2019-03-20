import uuid from 'uuid';

export const ADD_MEMBER = 'ADD_MEMBER';
// export const GROUPS_FETCHED = 'GROUPS_FETCHED';

const addMemberSuccess = (id, memberId, name) => ({
  type: ADD_MEMBER,
  member: { id, memberId, name }
});

export const addMember = (id, name) => dispatch => {
  const memberId = uuid();
  const groups = localStorage.getItem('groups');
  const groupsJSON = groups ? JSON.parse(groups) : [];

  const updatedGroup = groupsJSON.map(group => {
    if (group.id === id) {
      return {
        ...group,
        members: [
          ...group.members,
          {
            id: memberId,
            name
          }
        ]
      };
    }
    return group;
  });

  localStorage.setItem('groups', JSON.stringify(updatedGroup));
  dispatch(addMemberSuccess(id, memberId, name));
};
