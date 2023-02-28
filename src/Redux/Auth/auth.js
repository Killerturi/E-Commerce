import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    getAuth: (state, user) => {
      state.push(user.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export { store };

export const { getAuth } = authSlice.actions;
