import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    plainPass: [],
    hashedPass: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.plainPass = [];
            state.hashedPass = [];
        },
        setPlainPassword: (state, action) => {
            state.plainPass = action.payload.savedPlainPassword;
        },
        setHashedPassword: (state, action) => {
            state.hashedPass = action.payload.savedHashedPassword;
        }
    },
});

export const { setMode, setLogin, setLogout } =
    authSlice.actions;
export default authSlice.reducer;


