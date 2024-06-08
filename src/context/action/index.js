export const ADDUSERS = "ADDUSERS"
export const REMOVEUSERS = "REMOVEUSERS"

export const addToUsers = (payload) => {
    return {
        type: ADDUSERS,
        payload
    }
}

export const removeFromUsers = (payload) => {
    return {
        type: REMOVEUSERS,
        payload
    }
}