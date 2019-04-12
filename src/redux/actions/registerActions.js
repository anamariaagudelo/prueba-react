import {REGISTER_CANDIDATE} from './types';

export const registerCandidate= (candidate)=>{
    return{
        type:REGISTER_CANDIDATE,
        payload: candidate
    }
}

