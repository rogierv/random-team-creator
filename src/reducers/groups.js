import { ADD_GROUP, GROUPS_FETCHED } from '../actions/group';
import { ADD_MEMBER } from '../actions/member';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, action.group];
    case GROUPS_FETCHED:
      return action.groups;
    case ADD_MEMBER:
      const updatedGroup = state.map(group => {
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
      return updatedGroup;

    default:
      return state;
  }
};
