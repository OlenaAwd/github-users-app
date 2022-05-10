import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    user: null,
    loading: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoading: (state) => {
            state.loading = true
        },
        setUserSuccess: (state, { payload }) => {
            state.user = payload
            state.loading = false
            state.error = false
        },
        setUserError: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

// Action generated from the slice
export const {
    setUserLoading,
    setUserSuccess,
    setUserError,
} = userSlice.actions

// Selector
export const userSelector = (state) => state.user

// Reducer
export default userSlice.reducer

// Asynchronous thunk action
export function getUser(fetchUser) {
    return async (dispatch) => {
        dispatch(setUserLoading())
        try {
            const data = await fetchUser()
            dispatch(setUserSuccess(data))
        } catch (error) {
            dispatch(setUserError())
        }
    }
}

