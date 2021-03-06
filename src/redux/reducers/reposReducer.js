import {SET_REPOS } from '../actions/types';

//state inicial

const initialState = {
    repos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                repos: [...state.repos, action.payload]
            }
        default:
            return state;
    }
}