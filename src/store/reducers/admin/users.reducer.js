import React from 'react'

const initialState = {
    users: [],
    allUser: [],
}

export default function userReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case "GET_USERSUCCESS": {
            return {...state, users: payload}
        };
        case "GET_ALLUSER": {
            return {...state, allUser: payload}
        }
        default:
            return state;
    }
}
