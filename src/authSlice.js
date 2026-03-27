import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromStorage(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;