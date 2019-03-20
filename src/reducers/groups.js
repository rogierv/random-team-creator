import { ADD_GROUP, GROUPS_FETCHED } from '../actions/group';

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, action.group];
    case GROUPS_FETCHED:
      return action.groups;
    default:
      return state;
  }
};
