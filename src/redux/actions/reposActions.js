import {LIST_REPOS, SET_REPOS} from './types';

export const getRepos= ()=>{
    return{
        type:LIST_REPOS
    }
}

export const setRepos= (repos)=>{
    return{
        type:SET_REPOS,
        payload: repos
    }
}