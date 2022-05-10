import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    error: false,
    users: [],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state) => {
            state.loading = true
        },
        setUsersSuccess: (state, { payload }) => {
            state.users = payload
            state.loading = false
            state.error = false
        },
        setUsersError: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

// Actions generated from the slice
export const {
    setUsers,
    setUsersSuccess,
    setUsersError,
} = usersSlice.actions

// Selector
export const usersSelector = (state) => state.users

export const selectUserByUsername = (state, username) => state.users.find(user => user.username === username)

// Reducer
export default usersSlice.reducer

// Asynchronous thunk action
export function getUsers(fetchUsers) {
    return async (dispatch) => {
        dispatch(setUsers())

        try {
            const data = await fetchUsers()
            dispatch(setUsersSuccess(data))
        } catch (error) {
            dispatch(setUsersError())
        }
    }
}