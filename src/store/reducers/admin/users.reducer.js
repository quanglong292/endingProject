import React from 'react'

const initialState = {
    users: [],
}

export default function userReducer (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case "GET_USERSUCCESS": {
            return {...state, users: payload}
        }
        default:
            return state;
    }
}
