import { LIST_REPOS, SET_REPOS } from '../actions/types';

//state inicial

const initialState = {
    repos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LIST_REPOS:
            return {
                ...state
            }
        case SET_REPOS:
            return {
                ...state,
                repos: [...state.repos, action.payload]
            }
        default:
            return state;
    }
}