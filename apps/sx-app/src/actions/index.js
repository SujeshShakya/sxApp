export const setMemberSearch = (searchList) => {
  return (dispatch) => {
    dispatch({
      type: 'MEMBER_SEARCH',
      payload: searchList,
    });
  };
};
