export function memberReducer(state = [], action) {
  if (action.type === 'MEMBER_SEARCH') {
    return Object.assign([], state, action.payload);
  }
  return state;
}
