import { ADDUSERS, REMOVEUSERS } from "../action"


const initialState = JSON.parse(localStorage.getItem("users")) || []

export const users = (state = initialState, action) => {
    switch (action.type) {
        case ADDUSERS:
            state = [...state, action.payload]
            localStorage.setItem("users", JSON.stringify(state))
            return state
        case REMOVEUSERS:
            state = state.filter(user => user.id !== action.payload.id)
            localStorage.setItem("users", JSON.stringify(state))
            return state
        default:
            return state
    }
}