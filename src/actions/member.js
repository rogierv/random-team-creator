import uuid from 'uuid';

export const ADD_MEMBER = 'ADD_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';

const addMemberSuccess = (id, memberId, name) => ({
  type: ADD_MEMBER,
  member: { id, memberId, name }
});

const deleteMemberSuccess = (id, memberId) => ({
  type: DELETE_MEMBER,
  member: { id, memberId }
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

export const deleteMember = (id, memberId) => dispatch => {
  const groupsJSON = JSON.parse(localStorage.getItem('groups'));
  const updatedGroup = groupsJSON.map(group => {
    if (group.id === id) {
      return {
        ...group,
        members: group.members.filter(member => member.id !== memberId)
      };
    }
    return group;
  });
  localStorage.setItem('groups', JSON.stringify(updatedGroup));
  dispatch(deleteMemberSuccess(id, memberId));
};
