import React from 'react'

const initialState = {
    users: [],
    allUser: [],
    searchedUser: [],
}

export default function userReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case "GET_USERSUCCESS": {
            return {...state, users: payload}
        };
        case "GET_ALLUSER": {
            return {...state, allUser: payload}
        };
        case "SEARCH_USER": {
            return {...state, searchedUser: payload}
        }
        default:
            return state;
    }
}
