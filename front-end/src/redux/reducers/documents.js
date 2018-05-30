const initialState = {
  documents: [],
};
export default(state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DOCUMENTS':
      return {
        ...state,
        documents: action.documents,
      };
    default:
      return state;
  }
};
