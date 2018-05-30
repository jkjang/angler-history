/* ACTION TYPE */
const LOAD_DOCUMENTS = 'LOAD_DOCUMENTS';

export default function loadDocuments() {
  return (dispatch) => {
    dispatch({ type: LOAD_DOCUMENTS, modalMode: false });
  };
}
