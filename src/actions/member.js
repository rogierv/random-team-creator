import uuid from 'uuid';

export const ADD_MEMBER = 'ADD_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';

export const addMember = (id, name) => ({
  type: ADD_MEMBER,
  member: { id, memberId: uuid(), name }
});

export const deleteMember = (id, memberId) => ({
  type: DELETE_MEMBER,
  member: { id, memberId }
});
