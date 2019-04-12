import {combineReducers} from 'redux';
import reposReducer  from '../reducers/reposReducer';
import registerReducer  from '../reducers/registerReducer'


export default combineReducers({
    repos: reposReducer,
    candidates: registerReducer


});
