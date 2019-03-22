import { ADD_GROUP, DELETE_GROUP, GROUPS_FETCHED } from '../actions/group';
import { ADD_MEMBER, DELETE_MEMBER } from '../actions/member';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, action.group];
    case DELETE_GROUP:
      return state.filter(group => group.id !== action.id);
    case GROUPS_FETCHED:
      return action.groups;
    case ADD_MEMBER:
      return state.map(group => {
        if (group.id === action.member.id) {
          return {
            ...group,
            members: [
              ...group.members,
              {
                id: action.member.memberId,
                name: action.member.name
              }
            ]
          };
        }
        return group;
      });
    case DELETE_MEMBER:
      return state.map(group => {
        if (group.id === action.member.id) {
          return {
            ...group,
            members: group.members.filter(member => member.id !== action.member.memberId)
          };
        }
        return group;
      });
    default:
      return state;
  }
};
