import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import documents from './reducers/documents';

export default combineReducers({ documents, router: routerReducer });
