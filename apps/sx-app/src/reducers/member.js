export function memberReducer(state = {}, action) {
  if (action.type === 'MEMBER_SEARCH') {
    let obj = Object.assign({}, action.payload);
    return obj;
  }
  return state;
}
