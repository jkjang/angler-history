/** */
import axios from 'axios';

/* ACTION TYPE */
const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/';

export function loadDocuments() {
  return (dispatch) => {
    axios
      .get(`${url}documents`)
      .then((res) => {
        const documents = res.data;
        console.log(documents);
        dispatch({ type: 'LOAD_DOCUMENTS', documents });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function openSignInModal(openCheck: boolean) {
  return (dispatch) => {
    const open = true;
    console.log(`openSignInModal open = ${open}`);
    dispatch({ type: 'OPEN_SIGNIN_MODAL', open });
  };
}
