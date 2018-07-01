const initialState = {
  open: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SIGNIN_MODAL':
      console.log(`action.open ${action.open}`);
      return {
        ...state,
        open: action.open,
      };
    default:
      return state;
  }
};
