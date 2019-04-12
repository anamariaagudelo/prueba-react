import {LIST_REPOS,SET_REPOS} from '../actions/types';

//state inicial

const initialState ={
     repos: []
}

export default function(state= initialState, action){
    if(action.type=== LIST_REPOS){
        return{
            ...state
        }
    }if(action.type=== SET_REPOS){
        return{
            ...state,
            repos:[...state.repos, action.payload]
        }
    }
    return state;
}