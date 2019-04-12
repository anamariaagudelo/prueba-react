import {combineReducers} from 'redux';
import reposReducer  from '../reducers/reposReducer';
import registerReducer  from '../reducers/registerReducer'
import errorReducer  from '../reducers/errorReducer'


export default combineReducers({
    repos: reposReducer,
    candidates: registerReducer,
    error: errorReducer


});
