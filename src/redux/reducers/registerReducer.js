import {REGISTER_CANDIDATE} from '../actions/types'

//state inicial

const initialState ={
    candidates: [],
}

export default function(state= initialState, action){
    if(action.type===REGISTER_CANDIDATE){
        return{
            ...state,
            candidates:[...state.candidates, action.payload] 
        }
    }
    return state;
}