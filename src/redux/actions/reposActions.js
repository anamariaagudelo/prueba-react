import {SET_REPOS} from './types';


export const setRepos= (repos)=>{
    return{
        type:SET_REPOS,
        payload: repos
    }
}