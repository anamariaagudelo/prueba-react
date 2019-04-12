import {REGISTER_CANDIDATE} from '../actions/types'

//state inicial

const initialState ={
    candidates: [],
}

export default function(state= initialState, action){
    switch(action.type){
        case REGISTER_CANDIDATE:
        return{
            ...state,
            candidates:[...state.candidates, action.payload] 
        }
        default:
        return state;
    }
}