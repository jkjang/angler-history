import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import documents from './reducers/documents';
import modal from './reducers/modal';

export default combineReducers({ documents, modal, router: routerReducer });
